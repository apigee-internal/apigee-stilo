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
// require('!copy-file!apigee-icons/css/apigee-icons.css'); // Needed for emit apigee-components.css

// Copy fonts
require('lato-font/fonts/lato-light/lato-light.eot');
require('lato-font/fonts/lato-light/lato-light.woff');
require('lato-font/fonts/lato-light/lato-light.ttf');

require('lato-font/fonts/lato-light-italic/lato-light-italic.eot');
require('lato-font/fonts/lato-light-italic/lato-light-italic.woff');
require('lato-font/fonts/lato-light-italic/lato-light-italic.ttf');

require('lato-font/fonts/lato-normal/lato-normal.eot');
require('lato-font/fonts/lato-normal/lato-normal.woff');
require('lato-font/fonts/lato-normal/lato-normal.ttf');

require('lato-font/fonts/lato-normal-italic/lato-normal-italic.eot');
require('lato-font/fonts/lato-normal-italic/lato-normal-italic.woff');
require('lato-font/fonts/lato-normal-italic/lato-normal-italic.ttf');

require('lato-font/fonts/lato-bold/lato-bold.eot');
require('lato-font/fonts/lato-bold/lato-bold.woff');
require('lato-font/fonts/lato-bold/lato-bold.ttf');

require('lato-font/fonts/lato-bold-italic/lato-bold-italic.eot');
require('lato-font/fonts/lato-bold-italic/lato-bold-italic.woff');
require('lato-font/fonts/lato-bold-italic/lato-bold-italic.ttf');

require('font-awesome/fonts/fontawesome-webfont.eot');
require('font-awesome/fonts/fontawesome-webfont.woff');
require('font-awesome/fonts/fontawesome-webfont.woff2');
require('font-awesome/fonts/fontawesome-webfont.ttf');

require('apigee-icons/fonts/apigee-icons.eot');
require('apigee-icons/fonts/apigee-icons.woff');
require('apigee-icons/fonts/apigee-icons.ttf');

require('@typopro/web-oxygen/TypoPRO-OxygenMono-Regular.eot');
require('@typopro/web-oxygen/TypoPRO-OxygenMono-Regular.ttf');
require('@typopro/web-oxygen/TypoPRO-OxygenMono-Regular.woff');

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
