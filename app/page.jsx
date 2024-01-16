import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-sinyo min-h-screen">
      <div className="bg-gray-700  rounded-lg p-6 shadow-lg w-full max-w-md ">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome to to PicUp!</h2>
        <p className="text-center mb-6 text-lg ">
          Sign in to upload and save your favourite photos.
        </p>
        <AuthForm  />
      </div>
    </main>
  );
}

