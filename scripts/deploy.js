const path = require('path');
const fs = require('fs');
var s3 = require('s3');

const MASTER = 'master';
const DEVELOP = 'develop';

'use strict';

const packageJson = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), './package.json'), 'utf8'));

const version = `v${packageJson.version}`;

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const bucket = process.env.AWS_S3_BUCKET;
const region = process.env.AWS_REGION;
const basePath = process.env.AWS_BASEPATH;
const buildPath = path.resolve(process.cwd(), './build');

if (!(accessKeyId && secretAccessKey && bucket && region && basePath)) {
    console.error('Missing configuration values.');
    process.exit(1);
}

const onBranch = function (path, callback) {
    const p = process.argv.filter(p => p.startsWith('--branch'));
    if (!p || p.length === 0) {
        callback(new Error('No branch specified'));
        return;
    }
    const b = process.argv[process.argv.indexOf(p[0]) + 1];
    if (!b || b.length === 0) {
        callback(new Error('No branch specified'));
        return;
    }
    callback(null, b.trim());
};

onBranch('.', (error, branch) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    // We only deploy if the branch is master or develop
    if (branch !== MASTER && branch !== DEVELOP) {
        console.log('No deployment done. Current branch is ' + branch);
        process.exit(0);
    }
    const suffix = (branch === MASTER) ? version : 'beta';
    const deploymentPath = `${basePath}/${suffix}`;
    console.log(`Copying build artifacts to S3 bucket '${bucket}' under path '${deploymentPath}'`);


    var client = s3.createClient({
        maxAsyncS3: 20,     // this is the default
        s3RetryCount: 3,    // this is the default
        s3RetryDelay: 1000, // this is the default
        multipartUploadThreshold: 20971520, // this is the default (20 MB)
        multipartUploadSize: 15728640, // this is the default (15 MB)
        s3Options: {
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
            region: region
        }
    });

    var params = {
        localDir: buildPath,
        deleteRemoved: true, // default false, whether to remove s3 objects
                             // that have no corresponding local file.
        s3Params: {
            Bucket: bucket,
            Prefix: deploymentPath
        }
    };
    var uploader = client.uploadDir(params);
    uploader.on('error', function(err) {
        console.error("ALM S3: Unable to sync:", err.stack);
        process.exit(1);
    });
    uploader.on('end', function() {
        console.log("ALM S3: Uploading completed.");
    });

});

