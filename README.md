Apigee Stilo
============

**This is an in-progress project of Apigee Corporation. No support is expressed or implied.
Use at your own risk.**

Apigee UI styles library to be used by Single Page Applications (SPAs) that want to conform with Apigee look and feel.
It is designed to be used with Webpack and Typescript or as a raw CSS dependency.

## Installation

    :> npm install apigee-stilo

## Usage

### Raw CSS

Apigee Stilo CSS files are located at `./node_modules/apigee-stilo/css` folder.
You can import them directly into your HTML documents:

```HTML
<link rel="stylesheet" href="pathToYourProject/node_modules/apigee-stilo/build/apigee.css">
```

Or use them in any way a regular CSS can be used.

### Webpack and TypeScript

It is recommended that you include the apigee CSS file in your build. You can do that creating a main style file and including the CSS refrence in it:

```less
//main.less
@import '../node_modules/apigee-stilo/build/apigee.css';
```

And then include the file into your entry TypeScript file:

```typescript
import './main.less';
``` 

Note: It is not recommended to include `.less` files from the source library.
Compiled versions are modified using *autoprefixer* which add some extra features to them not included in the source files.

### CSS class conventions

The styles asuem ytou have two DOM elements as children of the main `body`. The first element is supposed to be the Universal NavBar, the second one is supposed to be the main container of your app.

* `nav-bar-placeholder` is supposed to be the Universal Navbar container. The styles in this library don't affect the Navbar.

* `app-view` is supposed to be the main container of your app. Many styles on this library are scoped to this element.
 
* `context-bar` the top bar of your app, usually contains the breadcrumb and some top action elements.
 
## Dependencies

CSS are built using *Twitter Bootstrap 3* as a starting point. The library doesn't expose any of the JS in Bootstrap as it is only used as a base for styles.

The library is compiled against ES5 but will relay on some polyfills. It is recomended that you install es6-polyfill.

The CSS files can be used pretty much anywhere you can use CSS. JS files are compiled to be used on build environments like Webpack.

## Contributing

Pull requests are welcome! Please create a new feature branch for each change. 

### Getting Started

Getting started is easy! Clone the project, then:

1. `$ npm install` to install dependencies
2. `$ npm start` to start the project
3. Browse to `http://localhost:3000` to view

### Adding & Updating Styles

Styles are broken down into two categories: 

- *Elements* are simple interface controls with a single purpose; they cannot be further subdivided. Examples: buttons, toggles, input boxes.
- *Patterns* are composites of multiple elements or patterns; they look and feel unique to Apigee. Examples: context bar, forms, list views, detail views.

When editing styles, look in either `src/components/elements` or `src/components/patterns` for the style you want to edit. Keeping one file per component helps maintain order and maximize flexibility.

If you need to add new patterns or elements, create new Less files for each and add them to the applicable folder(s). You will then need to `@import` your new style(s) in `src/apigee.less`.

- - -

## License

Copyright 2016 Apigee Corporation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this software except in compliance with the License.
You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
