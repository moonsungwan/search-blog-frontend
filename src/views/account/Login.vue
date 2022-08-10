<template>
    <div class="content">
        <img
            class="logo"
            src="http://ec2-13-209-200-6.ap-northeast-2.compute.amazonaws.com/images/5d286ce0e5250.png"
        />
        <form class="user-info" action="" method="post">
            <div class="info-box bottom-border">
                <input
                    class="input"
                    v-model="data.loginId"
                    type="text"
                    placeholder="아이디를 입력해주세요."
                    maxlength="12"
                    v-on:keyup.enter="login()"
                    style="border-bottom: 1px solid black;"
                />
            </div>
            <div class="info-box">
                <input
                    class="input"
                    type="password"
                    v-model="data.password"
                    placeholder="비밀번호를 입력해주세요."
                    maxlength="15"
                    v-on:keyup.enter="login()"
                    style="margin-top: 10px; border-bottom: 1px solid black;"
                />
            </div>
        </form>
        <div class="wrap_btn">
            <button class="btn_comm" :disabled="!validate()" v-on:click="login()">
                <span class="txt_btn">로그인</span>
            </button>
            &nbsp;
            <button class="btn_comm" :disabled="!validate()" v-on:click="goSignUp()">
                <span class="txt_btn">회원가입</span>
            </button>
        </div>
    </div>
</template>

<script>
import { saveTokenToStorage } from '@/utils/storage.js';

export default {
    data() {
        return {
            data: {
                loginId: 'accountA',
                password: '1234',
            },
        };
    },
    methods: {
        validate() {
            if (this.$utils.isEmpty(this.data.loginId)) {
                return false;
            } else if (this.$utils.isEmpty(this.data.password)) {
                return false;
            }
            return true;
        },
        async login() {
            if (!this.validate()) {
                this.$toast('ID 또는 비밀번호를 입력해주세요.');
            } else {
                const { data } = await this.$store.dispatch('ACCOUNT_LOGIN', this.data);
                localStorage.setItem('loginId', this.data.id);
                saveTokenToStorage(data.accessToken);
                this.$router.push({ name: 'BlogList' });

                return data;
            }
        },
        goSignUp() {
            this.$router.push({ name: 'SignUp' });
        },
    },
};
</script>

<style scoped>
body {
    display: flex;
    height: 100%;
    align-items: center;
}
.content {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 450px;
    margin: 0 auto;
    margin-top: 8%;
    border-radius: 2%;
    padding-top: 3%;
    border: 2px solid #e5e5e5;
}
.input {
    border-style: solid;
    border-top-width: medium;
    border-bottom-width: medium;
    border-left-width: medium;
    border-right-width: medium;
    border-color: black;
}
.window-button-box {
    width: 90%;
    height: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.window-button-box > i {
    cursor: pointer;
    padding-left: 7px;
}
.logo {
    width: 150px;
    height: 150px;
    border-radius: 3%;
    margin-bottom: 5%;
}
form.user-info {
    width: 200px;
    height: 100px;
    background-color: white;
}

form.user-info > .info-box {
    position: relative;
    width: 100%;
    height: 50%;
    display: flex;
}

form.user-info > .info-box > input {
    width: 100%;
    height: 100%;
    margin: 0;
    border: 0;
}

#login {
    width: 200px;
    height: 45px;
    margin: 5px 10px;
    background-color: rgb(238, 238, 238);
    border-radius: 5px;
    color: gray;
    text-align: center;
    line-height: 50px;
}

#login:hover {
    color: #00b7ff;
}
#confirm_button {
    display: block;
    width: 100%;
    padding: 0;
    border: 0;
    border-radius: 4px;
    font-size: 15px;
    color: #191919;
}
</style>
