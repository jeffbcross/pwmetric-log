require('dotenv').config();

module.exports = {
  flags: {
    submit: true
  },
  sheets: {
    type: 'GOOGLE_SHEETS',
    options: {
      /** Replace with your own spreadsheet id. */
      spreadsheetId: '13C-qAV-j2TyaQ8ahvc4sKCsBHCyu-P4s3NntPd-xO9M',
      tableName: 'data',
      uploadMedian: true
    }
  },
  /**
   * To get client secret:
   * 1. Go to this URL and follow step 1: https://developers.google.com/sheets/api/quickstart/nodejs#step_1_turn_on_the_api_name
   * 2. Move the credentials JSON file to the root of the workspace
   */
  clientSecret: require('./credentials.json'),
  url: 'http://localhost:4200'
};
