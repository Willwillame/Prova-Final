import {collection, getDocs} from 'firebase/firestore/lite';
import db from '../config/firebase';

export const getPedreiros = async () => {
  try {
    const criadoresCollection = collection(db, 'pedreiros');
    const criadoresSnapshot = await getDocs(criadoresCollection);
  
    return criadoresSnapshot.docs.map(pedreiro => pedreiro.data());
  
  } 
  catch (error) {
    console.log(error);
  }
  }