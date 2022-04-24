import { firestore } from '@/firebase/config';
import { collection, onSnapshot, orderBy } from '@firebase/firestore';
import { ref } from 'vue';

const getCollection = (collectionName) => {
    const documents = ref(null);
    const error = ref(null);

    const conllectionRef = collection(firestore, collectionName);
    const collectionQuery = query(conllectionRef, orderBy('createdAt', 'desc'));
    onSnapshot(
        collectionQuery,
        (snapshot) => {
            const results = [];
            snapshot.docs.forEach((doc) => {
                doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
            });
            documents.value = results;
            error.value = null;
        },
        (err) => {
            console.log(err.message);
            error.value = 'Could not fetch data';
        }
    );

    return { documents, error };
};

export default getCollection;
