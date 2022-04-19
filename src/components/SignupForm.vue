<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" required placeholder="username" v-model="username" />
        <input type="email" required placeholder="email" v-model="email" />
        <input type="password" required placeholder="password" v-model="password" />
        <button>Signup</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    setup() {
        const username = ref('');
        const email = ref('');
        const password = ref('');

        const handleSubmit = () => {
            console.log(username.value);
            console.log(email.value);
            console.log(password.value);
        };

        return { username, email, password, handleSubmit };
    },
};
</script>

<style></style>
