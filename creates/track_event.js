"use strict";

const Mixpanel = require('mixpanel');

// We recommend writing your creates separate like this and rolling them
// into the App definition at the end.
module.exports = {
  key: 'track_event',

  // You'll want to provide some helpful display labels and descriptions
  // for users. Zapier will put them into the UX.
  noun: 'Track event',
  display: {
    label: 'Track event',
    description: 'Log event to Mixpanel.'
  },

  // `operation` is where the business logic goes.
  operation: {
    inputFields: [
      {key: 'id', required: true, type: 'string'},
      {key: 'event', required: true, type: 'string'},
      {key: 'properties', dict: true}
    ],
    perform: (z, bundle) => {
      const mixpanel = Mixpanel.init(bundle.authData.token)
      mixpanel.people.track_charge(bundle.inputData.id, bundle.inputData.amount);

      const props = Object.assign(bundle.inputData.properties, {distinct_id: bundle.inputData.id});
      mixpanel.track(bundle.inputData.event, props);

      return {}
    }
  }
};