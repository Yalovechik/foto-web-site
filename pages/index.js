import { AiOutlineClose } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";
import Head from "next/head";
import { Inter } from "@next/font/google";
// import allImages from "./photo";
import { useState } from "react";
import ImgKitService from "../services/imgKitService";
import Footer from "../components/Footer";
import TabGroup from "../components/Tabs";
import lqip from "lqip-modern";
import Logo from "../ux/logo/logo_seniorita.svg";




const inter = Inter({ subsets: ["latin"] });

export default function Home({ mappedPhoto }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="h-full overflow-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className=" h-[70px] z-10 ">
        <div className="h-full w-full flex justify-between items-center px-5 ">
          <div className=" gap-1 text-4xl opacity-0 hidden md:flex"></div>
         
          <div >
            <Logo className="w-12 h-12" />
          </div>
          <div
            onClick={() => setToggleMenu(!toggleMenu)}
            className="hover:opacity-80 cursor-pointer transition-all items-center w-5 md:opacity-0"
          >
            {!toggleMenu ? (
              <TbMenu className="text-2xl" />
            ) : (
              <AiOutlineClose className="text-2xl" />
            )}
          </div>
        </div>
      </header>
      <main className=" md:pt-[30px] ">
        <TabGroup toggleMenu={toggleMenu} photos={mappedPhoto} />
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  let mappedPhotoUrl = [];
  let photos = [];
  try {
    const imgKitService = new ImgKitService();
    const response = await imgKitService.getAllPhotos();

    photos = response
      .filter(item => item.filePath.split("/").length > 2)
      .map(({ url, height, width, filePath }) => ({
        url,
        height,
        width,
        folder: filePath.split("/")[1],
        orientationHorizontal: height < width
      }));

    const photoWithDataUrl = [];

    for (const photo of photos) {
      const dataUrl = await getDataUrl(photo.url);
      photoWithDataUrl.push({ ...photo, dataUrl });
    }
    mappedPhotoUrl.push(...photoWithDataUrl);
  } catch (error) {
    console.log(error);
  }



  return {
    props: {
      mappedPhoto: mappedPhotoUrl
    }
  };
}

async function getDataUrl(url) {
  const imgData = await fetch(url);
  const arrayBufferData = await imgData.arrayBuffer();
  const lqipData = await lqip(Buffer.from(arrayBufferData));
  return lqipData.metadata.dataURIBase64;
}
