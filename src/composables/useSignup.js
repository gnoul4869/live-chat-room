import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { fireAuth } from '@/firebase/config';
import { ref } from 'vue';

const error = ref(null);

const signup = async (email, password, username) => {
    error.value = null;

    try {
        const res = await createUserWithEmailAndPassword(fireAuth, email, password);

        if (!res) {
            throw new Error('Error creating user');
        }

        await updateProfile(res.user, { displayName: username });

        console.log(res.user);

        return res;
    } catch (err) {
        console.log(err.message);
        error.value = err.message;
    }
};

const useSignup = () => {
    return { signup, error };
};

export default useSignup;
