import { onAuthStateChanged } from '@firebase/auth';
import { fireAuth } from '@/firebase/config';
import { ref } from 'vue';

const user = ref({});

onAuthStateChanged(fireAuth, (_user) => {
    console.log('User state changed. Current user is ', _user);
    user.value = _user;
});

const getUser = () => {
    return { user };
};

export default getUser;
