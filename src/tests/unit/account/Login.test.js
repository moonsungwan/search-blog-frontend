/**
 * @jest-environment jsdom
 */
import { createWrapper } from '@/tests/unit/helpers/index';
import * as utils from '@/utils/utils';

import Login from '@/views/account/Login.vue';

const wrapper = createWrapper(Login);

beforeEach(() => {
    wrapper.setData({
        data: {
            loginId: 'account1',
            password: '1234',
        },
    });
});

describe('로그인 테스트', () => {
    test('필수값 입력 확인', () => {
        expect(wrapper.vm.validate()).toBe(true);
    });

    test('로그인 시도 및 토큰 조회', async () => {
        const response = await wrapper.vm.login();
        expect(!utils.isEmpty(response)).toBe(true); //response : 토큰값
    });
});
