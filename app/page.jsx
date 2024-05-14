'use client'
import { useState } from "react";
import AuthForm from "./components/AuthForm";
import { Notify } from "./utils/Notification";

export default function Home() {
  
  const [show, setShow] = useState('');
  const handleNotify = (message, type) => {
    setShow(Notify(message, type));
    setTimeout(() => {
      setShow('')
    }, 4000);
  };


  return (
    <main className="flex items-center justify-center bg-sinyo min-h-screen">
      {show&&(show)}
      <div className="bg-gray-700 rounded-lg p-6 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Welcome to PicUp!
        </h2>
        <p className="text-center mb-6 text-lg">
          Sign in to upload and save your favorite photos.
        </p>
        <AuthForm sendDataToParent={handleNotify}/>

      </div>
    </main>
  );
}
