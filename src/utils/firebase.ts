"use server";

import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const addMenu = async (menu: any) => {
  const menuRef = collection(db, "menus");
  const res = await addDoc(menuRef, menu);

  return JSON.stringify(res);
};

export { addMenu };
