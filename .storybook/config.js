import { configure } from '@kadira/storybook';
import { disable } from 'react-komposer';
import { defonce } from 'ud';

// Here we need to run injectTapEventPlugin only once and
// it shouldn't run on hot reloads.
defonce(module, () => {
  const injectTapEventPlugin = require('react-tap-event-plugin');
  injectTapEventPlugin();
});

disable();

function loadStories() {
  require('../app/modules/core/components/.stories');
  // require as many as stories you need.
}

configure(loadStories, module);
