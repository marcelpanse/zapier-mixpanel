"use strict";

const testAuth = (z /*, bundle*/) => {
  //can't check mixpanel public id, so it is always correct.
  return {}
};

module.exports = {
  type: 'custom',
  // Define any auth fields your app requires here. The user will be prompted to enter this info when
  // they connect their account.
  fields: [
    {key: 'token', label: 'token', required: true, type: 'string'}
  ],
  // The test method allows Zapier to verify that the credentials a user provides are valid. We'll execute this
  // method whenver a user connects their account for the first time.
  test: testAuth
};