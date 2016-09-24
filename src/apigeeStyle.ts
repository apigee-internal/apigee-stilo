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

import {Rule, ICSS} from './css';

require('./apigee.less'); // Needed for emit apigee.css
require('./apigee-base.less'); // Needed for emit apigee-base.css

// Load color constants and expose them in an object:
const colors = require('!lessVariables!./globals/colors.less');

export interface IApigeeStyle {
    readonly appView: Rule;
    readonly colors: any;
}

export const apigeeStyle: IApigeeStyle = {
    appView: new Rule('app-view', require('./appView.less') as ICSS[]),
    colors: colors
};
