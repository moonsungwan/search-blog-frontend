/**
 * @jest-environment jsdom
 */
import { createWrapper } from '@/tests/unit/helpers/index';
import * as utils from '@/utils/utils';

import SignUp from '@/views/account/SignUp.vue';

const wrapper = createWrapper(SignUp);

beforeEach(() => {
    wrapper.setData({
        data: {
            loginId: 'accountAB',
            password: '1234',
            nickName: '테스트',
        },
    });
});

describe('로그인 테스트', () => {
    test('필수값 입력 확인', () => {
        expect(wrapper.vm.validate()).toBe(true);
    });

    test('회원가입 시도', async () => {
        const response = await wrapper.vm.signUp();

        // 1. 이미 있을 경우 실패
        expect(!utils.isEmpty(response)).toBe(true); //response : 토큰값
    });
});
