import { CgInstagram } from "react-icons/cg";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="h-[100px] mb-5 flex items-center justify-center relative">
      <div className="absolute w-100  flex justify-center  gap-2 text-2xl z-20">
        {[<CgInstagram />, <AiOutlineFacebook />, <CiLinkedin />].map(
          (icon, idx) => (
            <div
              key={idx}
              className="border-2 border-slate-800 rounded-full p-2 md:p-3 bg-slate-50"
            >
              {icon}
            </div>
          )
        )}
      </div>
      <div className="w-full border border-b-slate-800 opacity-30"></div>
    </footer>
  );
}
