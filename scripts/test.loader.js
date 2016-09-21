Error.stackTraceLimit = 20;

var context = require.context('../src', true, /\.spec\.ts$/);
context.keys().forEach(context);
