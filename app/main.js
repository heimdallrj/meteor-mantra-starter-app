import { createApp } from 'mantra-core';
import initContext from './configs/context';
import setSsrUserAgent from './configs/ssr_user_agent';

// modules
import coreModule from './modules/core';
// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();

// additional configurations

setSsrUserAgent(context);
