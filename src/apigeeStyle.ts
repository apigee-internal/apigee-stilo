/*
 Copyright 2016 Apigee Corporation

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// import {Rule, ICSS} from './css';

// Import and generate CSS files from Less
require('./apigee.less'); // Needed for emit apigee.css
require('./globals/apigee-base.less'); // Needed for emit apigee-base.css
require('./components/apigee-components.less'); // Needed for emit apigee-components.css

// Copy fonts
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Light.eot');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Light.woff');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Light.woff2');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Light.ttf');

require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-LightItalic.eot');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-LightItalic.woff');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-LightItalic.woff2');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-LightItalic.ttf');
//
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Regular.eot');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Regular.woff');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Regular.woff2');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Regular.ttf');

require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Italic.eot');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Italic.woff');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Italic.woff2');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Italic.ttf');

require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Bold.eot');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Bold.woff');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Bold.woff2');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-Bold.ttf');

require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-BoldItalic.eot');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-BoldItalic.woff');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-BoldItalic.woff2');
require('./artifacts/Lato2OFLWeb/Lato/fonts/Lato-BoldItalic.ttf');

require('font-awesome/fonts/fontawesome-webfont.eot');
require('font-awesome/fonts/fontawesome-webfont.woff');
require('font-awesome/fonts/fontawesome-webfont.woff2');
require('font-awesome/fonts/fontawesome-webfont.ttf');

require('apigee-icons/fonts/apigee-icons.eot');
require('apigee-icons/fonts/apigee-icons.woff');
require('apigee-icons/fonts/apigee-icons.ttf');

// Load color constants and expose them in an object:
const colors = require('!lessVariables!./globals/colors.less');

export interface IApigeeStyle {
    // readonly appView: Rule;
    readonly colors: any;
}

export const apigeeStyle: IApigeeStyle = {
    // appView: new Rule('app-view', require('./appView.less') as ICSS[]),
    colors: colors
};
