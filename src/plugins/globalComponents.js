import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import Pagination from 'vue-pagination-2';

export default {
    install(Vue) {
        const requireComponent = require.context(
            '/src/components/common',
            false,
            /(Base|The)[A-Z]\w+\.(vue|js)$/,
        );
        requireComponent.keys().forEach(fileName => {
            const componentConfig = requireComponent(fileName);
            const componentName = upperFirst(
                camelCase(
                    fileName
                        .split('/')
                        .pop()
                        .replace(/\.\w+$/, ''),
                ),
            );
            Vue.component(componentName, componentConfig.default || componentConfig);
        });

        Vue.component('pagination', Pagination);
    },
};
