<template>
    <div class="home container">
        <p>Welcome</p>
        <div v-if="showLogin">
            <LoginForm @login="enterChatroom" />
            <p>No account yet? <span @click="showLogin = false">Signup</span> instead</p>
        </div>
        <div v-else>
            <SignupForm @signup="enterChatroom" />
            <p>Already registered? <span @click="showLogin = true">Login</span> instead</p>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
    name: 'HomeView',
    components: { SignupForm, LoginForm },
    setup() {
        const showLogin = ref(true);
        const router = useRouter();

        const enterChatroom = () => {
            router.push({ name: 'Chatroom' });
        };

        return { showLogin, enterChatroom };
    },
};
</script>

<style>
.home {
    text-align: center;
    padding: 20px 0;
}

.home form {
    width: 300px;
    margin: 20px auto;
}
.home label {
    display: block;
    margin: 20px 0 10px;
}
.home input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}
.home span {
    font-weight: bold;
    cursor: pointer;
    transition: color 0.1s ease-in;
}
.home span:hover {
    color: #5ae4ca;
}
.home button {
    margin: 20px auto;
}
</style>
