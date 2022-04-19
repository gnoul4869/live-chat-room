<template>
    <div class="home container">
        <p>Home</p>
        <SignupForm />
        <LoginForm />
    </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
    name: 'HomeView',
    components: { SignupForm, LoginForm },
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
</style>
