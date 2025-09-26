import { FaHandHoldingHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <nav className="flex p-4 bg-black text-white bottom-0 absolute w-screen items-center justify-center gap-2">
        <p className="flex font-mono">Powered by SVK</p>
        <FaHandHoldingHeart />
      </nav>
    </>
  );
}
