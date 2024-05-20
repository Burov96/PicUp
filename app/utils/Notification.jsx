"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { useEffect, useState } from "react";

const Notification = ({ message, type }) => {
  const [show, setShow] = useState();
  const [show2, setShow2] = useState();

  useEffect(() => {
    const pre = setTimeout(() => {
      setShow(true);
      setShow2(true);
    }, 400);
    const timeout = setTimeout(() => {
      setShow(false);
    }, 1000);
    setTimeout(() => {
      setShow2(false);
    }, 3000);

    return () => clearTimeout(pre, timeout);
  }, [message, type]);

  const handleHideNotification = () => {
    setShow(false);
    setShow2(false);
  };

  return (
    message && (
      <div
        className={`z-[999999] fixed top-10 md:top-32 right-1 w-60 md:w-80 h-16 md:h-24 bg-white p-4 rounded-lg shadow-md flex items-center justify-between transition-all duration-1000  opacity-0`}
        style={{
          opacity: show2 ? 1 : 0,
          transform: `translateX(${show ? +30 : 10}px)`,
          transform: `translateX(${show2 ? -10 : 10}px)`,
        }}
      >
        <div className="w-20 h-20 flex items-center justify-center rounded-full text-white">
          <div className="">
            {type === "success" ? (
              <DotLottiePlayer src={"/success.lottie"} autoplay={true} />
            ) : type === "failure" ? (
              <DotLottiePlayer src={"/failure.lottie"} autoplay={true} />
            ) : type === "removed" ? (
              <DotLottiePlayer src={"/removed.lottie"} loop={false} autoplay={true} direction={-1} />
            ) : (
              <DotLottiePlayer src={"/warning.lottie"} autoplay={true} />
            )}
          </div>
        </div>
        <div className="text-gray-800 text-sm md:text-xl py-2">{message}</div>
        <button
          onClick={handleHideNotification}
          className="text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1.414-9.293a1 1 0 0 1 1.414-1.414L10 8.586l1.414-1.414a1 1 0 0 1 1.414 1.414L11.414 10l1.414 1.414a1 1 0 0 1-1.414 1.414L10 11.414l-1.414 1.414a1 1 0 1 1 1.414 1.414L11.414 10l1.414 1.414a1 1 0 0 1-1.414 1.414L10 11.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L8.586 10 7.172 8.586a1 1 0 0 1 1.414-1.414L10 8.586l1.414-1.414a1 1 0 0 1 1.414 1.414L11.414 10l1.414 1.414a1 1 0 0 1-1.414 1.414L10 11.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L8.586 10 7.172 8.586a1 1 0 0 1 1.414-1.414L10 8.586l1.414-1.414a1 1 0 0 1 1.414 1.414L11.414 10l1.414 1.414a1 1 0 0 1-1.414 1.414L10 11.414l-1.414 1.414a1 1 0 0 1-1.414-1.414L8.586 10 7.172 8.586a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    )
  );
};

const Notify = (message, type) => {
  console.log(
    "Notification triggered with message:",
    message,
    "and type:",
    type
  );
  return <Notification message={message} type={type} />;
};

export { Notification, Notify };
