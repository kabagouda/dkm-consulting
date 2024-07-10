import { customer } from "@/types/customer";
import { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query } from "firebase/firestore";
import firebase_app from "../config";

const db = getFirestore(firebase_app);
export default async function getDocument(collection: string, id: string) {
  const docRef = doc(db, collection, id);
  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }
  return { result, error };
}

export async function getCollection(collectionName: string) {
  const collectionRef = collection(db, collectionName);
  const queryRef = query(collectionRef);

  let documents: customer[] = [];
  let error = null;

  try {
    const querySnapshot = await getDocs(queryRef);
    querySnapshot.forEach((doc) => {
      const customerData: any = doc.data();
      documents.push({ id: doc.id, ...customerData });
    });
  } catch (e) {
    error = e;
  }

  return { documents, error };
}

export async function deleteDocumentById(collectionName: string, id: string) {
  const docRef = doc(db, collectionName, id);
  let success = false;
  let error = null;

  try {
    await deleteDoc(docRef);
    success = true;
  } catch (e) {
    error = e;
  }

  return { success, error };
}
