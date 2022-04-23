<template>
    <form>
        <textarea
            placeholder="Message here..."
            v-model="message"
            @keypress.enter.prevent="handleSubmit"
        ></textarea>
        <div class="error">{{ error }}</div>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import { serverTimestamp } from '@firebase/firestore';
import getUser from '@/composables/getUser';
import useCollection from '@/composables/useCollection';

export default {
    setup() {
        const { user } = getUser();
        const { error, addDocument } = useCollection('messages');

        const message = ref('');

        const handleSubmit = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            };

            await addDocument(chat);
            if (!error.value) {
                message.value = '';
            }
        };

        return { error, message, handleSubmit };
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
