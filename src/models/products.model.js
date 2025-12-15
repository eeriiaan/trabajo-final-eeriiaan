 import db from '../config/firebase.config.js';
import { 
    collection, 
    getDocs, 
    doc, 
    getDoc, 
    addDoc, 
    deleteDoc 
} from 'firebase/firestore';

const productsCollectionRef = collection(db, "products");

export const getAll = async () => {
    const productsSnapshot = await getDocs(productsCollectionRef);
    const productsList = productsSnapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
    }));
    return productsList;
};

export const getById = async (id) => {
    const productDocRef = doc(db, "products", id);
    const productDoc = await getDoc(productDocRef);
    
    if (!productDoc.exists()) {
        return null; 
    }
    
    return { id: productDoc.id, ...productDoc.data() };
};

export const create = async (productData) => {
    const docRef = await addDoc(productsCollectionRef, productData);
    return { id: docRef.id, ...productData };
};

export const remove = async (id) => {
    const productDocRef = doc(db, "products", id);
    await deleteDoc(productDocRef);
    return id;
};

export const update = async (id, updatedData) => {
    const productDocRef = doc(db, "products", id);

    throw new Error("El método update aún no está implementado para Firestore.");
};
