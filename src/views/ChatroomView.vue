<template>
    <div class="container">
        <Navbar />
        <ChatWindow />
        <ChatForm />
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { watch } from 'vue';
import getUser from '@/composables/getUser';
import Navbar from '@/components/Navbar.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import ChatForm from '@/components/ChatForm.vue';

export default {
    components: { Navbar, ChatForm, ChatWindow },
    setup() {
        const router = useRouter();
        const { user } = getUser();

        watch(user, () => {
            if (!user.value) {
                router.push({ name: 'Home' });
            }
        });
    },
};
</script>

<style></style>
