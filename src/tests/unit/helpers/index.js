import { mount, createLocalVue } from '@vue/test-utils';
import * as utils from '@/utils/utils';
import constants from '@/utils/constants';
import store from '@/store';
import Toast from 'vue-toastification';

import VueRouter from 'vue-router';

const localVue = createLocalVue();

localVue.use(VueRouter);
const router = new VueRouter();

export const createWrapper = component => {
    return mount(component, {
        mocks: {
            $utils: utils,
            $constants: constants,
            $store: store,
            $toast: Toast,
        },
        router,
    });
};
