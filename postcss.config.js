const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
      },
    }),
    require('postcss-reporter')({ clearReportedMessages: true }),
  ],
};
