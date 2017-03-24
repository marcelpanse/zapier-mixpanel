"use strict";

const testAuth = (z /*, bundle*/) => {
  // Normally you want to make a request to an endpoint that is either specifically designed to test auth, or one that
  // every user will have access to, such as an account or profile endpoint like /me.
  // In this example, we'll hit httpbin, which validates the Authorization Header against the arguments passed in the URL path
  //const promise = z.request({
  //  url: 'http://57b20fb546b57d1100a3c405.mockapi.io/api/recipes'
  //});
  //
  //// This method can return any truthy value to indicate the credentials are valid.
  //// Raise an error to show
  //return promise.then((response) => {
  //  if (response.status === 401) {
  //    throw new Error('The API Key you supplied is invalid');
  //  }
  //  return response;
  //});
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