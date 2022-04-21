<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" required placeholder="email" v-model="email" />
        <input type="password" required placeholder="password" v-model="password" />
        <div class="error">{{ error }}</div>
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import useLogin from '@/composables/useLogin';

export default {
    setup(props, context) {
        const { login, error } = useLogin();

        const email = ref('');
        const password = ref('');

        const handleSubmit = async () => {
            await login(email.value, password.value);
            if (!error.value) {
                context.emit('login');
            }
        };

        return { email, password, error, handleSubmit };
    },
};
</script>

<style></style>
