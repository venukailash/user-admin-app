import { IoMdMail } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import React from "react";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const getEmail = () => {
    console.log(email);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col">
          <div className="flex border-4 border-black-500 rounded-sm h-14 items-center">
            <IoMdMail className="pl-2 text-4xl" />
            <input
              id="email"
              type="email"
              className="pl-2 flex font-mono w-96 h-12 !outline-none"
              placeholder="Your email ID..."
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <button type="button" id="submit" onClick={getEmail}>
              <FaArrowCircleRight className="pr-2 text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
