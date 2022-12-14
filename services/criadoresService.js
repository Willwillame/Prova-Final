import {collection, getDocs} from 'firebase/firestore/lite';
import db from '../config/firebase';

export const getCriadores = async () => {
  try {
    const criadoresCollection = collection(db, 'criadores');
    const criadoresSnapshot = await getDocs(criadoresCollection);
  
    return criadoresSnapshot.docs.map(criador => criador.data());
  
  } 
  catch (error) {
    console.log(error);
  }
  }