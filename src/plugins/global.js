import * as utils from '@/utils/utils';
import constants from '@/utils/constants';

import globalComponents from './globalComponents';
import { formatDate } from '@/filter/globalFilter';

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default {
    install(Vue) {
        Vue.prototype.$utils = utils;
        Vue.prototype.$constants = constants;

        Vue.use(globalComponents);
        Vue.use(Toast, {
            position: 'top-center',
            timeout: 2000,
            closeOnClick: false,
            pauseOnFocusLoss: false,
            pauseOnHover: false,
            draggable: false,
            draggablePercent: 0.6,
            showCloseButtonOnHover: false,
            hideProgressBar: true,
            closeButton: 'button',
            icon: true,
            rtl: false,
            transition: 'Vue-Toastification__fade',
            maxToasts: 3,
            newestOnTop: true,
        });

        Vue.filter('formatDate', formatDate);
    },
};
