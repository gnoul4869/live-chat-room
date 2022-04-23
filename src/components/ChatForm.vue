<template>
    <form>
        <textarea
            placeholder="Message here..."
            v-model="message"
            @keypress.enter.prevent="handleSubmit"
        ></textarea>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import { serverTimestamp } from '@firebase/firestore';
import getUser from '@/composables/getUser';

export default {
    setup() {
        const message = ref('');
        const { user } = getUser();

        const handleSubmit = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            };

            console.log(chat);
            message.value = '';
        };

        return { message, handleSubmit };
    },
};
</script>

<style scoped>
form {
    margin: 10px;
}
textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
</style>
