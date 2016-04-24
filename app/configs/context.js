import * as Collections from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { DocHead } from 'meteor/kadira:dochead';

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker,
    DocHead,
    // We use this to use analytics.js (segment.io)
    // Otherwise it won't track info
    window: (typeof window !== 'undefined') ? window : null,
  };
}
