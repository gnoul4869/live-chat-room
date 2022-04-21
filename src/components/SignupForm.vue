<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" required placeholder="username" v-model="username" />
        <input type="email" required placeholder="email" v-model="email" />
        <input type="password" required placeholder="password" v-model="password" />
        <div class="error">{{ error }}</div>
        <button>Signup</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import useSignup from '@/composables/useSignup';

export default {
    setup() {
        const { signup, error } = useSignup();

        const username = ref('');
        const email = ref('');
        const password = ref('');

        const handleSubmit = async () => {
            await signup(email.value, password.value, username.value);
            console.log('User signed up');
        };

        return { username, email, password, error, handleSubmit };
    },
};
</script>

<style></style>
