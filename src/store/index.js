import { createStore } from 'vuex';

import slider from "./modules/home/slider";
import companyOverview from './modules/home/companyOverview';
import siteSettings from './modules/home/siteSettings';
import mediaCentre from './modules/mediaCentre/mediaCentre';
import contact from './modules/contact/contact';

import training from './modules/training/training';

const store = createStore({
  modules: {
    slider,
    companyOverview,
    siteSettings,
    mediaCentre,
    contact,

    training
  }
})

export default store;