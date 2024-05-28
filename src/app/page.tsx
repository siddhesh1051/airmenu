"use client";

import { addMenu } from "@/utils/firebase";

export default function Home() {
  const addMenuF = () => {
    addMenu({ name: "menu" }).then((res) => {
      alert(res);
    });
  };

  return (
    <>
      <button onClick={() => addMenuF()}>add menu</button>
    </>
  );
}
