import React from "react";
import { useState } from "react";

const ChatInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");

  const submitHandler = () => {
    if (value === "") {
      return;
    }
    sendMessage({ sender: "user", message: value });
    setValue("");
  };
  return (
    <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4 py-4 overflow-auto relative">
      {loading ? (
        <img src="../../public/loader.gif" alt="" className=" w-8 m-auto" />
      ) : (
        <>
          <textarea
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && submitHandler();
            }}
            rows={1}
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value)}
            className="border-0 bg-transparent outline-none w-11/12"
          />

          <img
            src="../../public/send.png"
            alt="send button"
            width={20}
            onClick={submitHandler}
            className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125"
          />
        </>
      )}
    </div>
  );
};

export default ChatInput;
