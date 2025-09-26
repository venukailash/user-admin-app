import { IoMdMail } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import React, { useEffect } from "react";

const FailureMessage = () => {
  return <p className="font-mono text-red-500">Enter your email ID</p>;
};

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) console.log(email);
    else setIsSubmitting(true);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex border-4 border-black-500 rounded-sm h-14 items-center">
          <IoMdMail className="pl-2 text-4xl" />
          <input
            id="email"
            type="email"
            className="pl-2 flex font-mono w-96 h-12 !outline-none"
            placeholder="Your email ID..."
            onChange={handleEmailChange}
          ></input>
          <button type="submit" title="email-submit">
            <FaArrowCircleRight className="pr-2 text-4xl" />
          </button>
        </div>
        {isSubmitting ? <FailureMessage /> : null}
      </form>
    </div>
  );
}
