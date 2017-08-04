"use strict";

const Mixpanel = require('mixpanel');

// We recommend writing your creates separate like this and rolling them
// into the App definition at the end.
module.exports = {
  key: 'track_charge',

  // You'll want to provide some helpful display labels and descriptions
  // for users. Zapier will put them into the UX.
  noun: 'Track charge',
  display: {
    label: 'Track charge',
    description: 'Log revenue to Mixpanel.'
  },

  // `operation` is where the business logic goes.
  operation: {
    inputFields: [
      {key: 'id', required: true, type: 'string'},
      {key: 'amount', required: true, type: 'number'}
    ],
    perform: (z, bundle) => {
      const mixpanel = Mixpanel.init(bundle.authData.token)
      mixpanel.people.track_charge(bundle.inputData.id, bundle.inputData.amount);
      return {}
    }
  }
};