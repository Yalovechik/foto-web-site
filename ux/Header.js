
import { Image } from 'next/image';

function Header() {
  return (
    <div className="bg-slate-200 h-min-40 flex">
      <div className="flex-initial w-32 tracking-wide">
        <div className=" h-full flex justify-center items-center gap-2 bg-slate-300 ">
          <h3>$</h3>
          <h3>$</h3>
          <h3>$</h3>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between p-3 px-10">
          <div className="text-3xl font-bold">
            {/* <Image
              src="../ux/1.svg"
              height={32}
              width={32}
              alt="Follow us on Twitter"
            /> */}
          </div>
          <div className="flex">
            <ul className="flex gap-3 mr-12 ">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex-column h-full justify-end mt-4">
          <h1 className="text-5xl">Ashley Ross Photography</h1>
          <p className="pb-6 mt-3 font-light">
            a photograph is a secret about secret. The more it tells you the
            less you know
          </p>
        </div>
      </div>
    </div>
  );
}
