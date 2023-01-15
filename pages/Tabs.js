import Gallery from "./Gallery";
import { Tab } from "@headlessui/react";

const tabs = [
  { key: "all photos", display: "all photos" },
  { key: "photo1", display: "photo1" },
  { key: "photo2", display: "photo2" }
];

export default function tabGroup({
  allImages,
  firstPhoto,
  secondPhoto,
  toggleMenu
}) {
  return (
    <div className="flex flex-col items-center w-full  ">
      <Tab.Group>
        <Tab.List
          className={
            toggleMenu
              ? "flex flex-col gap-12 flex-wrap md:flex-row"
              : "flex gap-12 flex-wrap -pt-20 max-h-0 overflow-hidden transition-{max-h}-1 md:max-h-full "
          }
        >
          {tabs.map(tab => (
            <Tab className="p-2 uppercase text-xl" key={tab.key}>
              {({ selected }) => (
                <span
                  className={
                    selected
                      ? "bg-blue-500 text-white p-3 "
                      : "bg-white text-black"
                  }
                >
                  All
                </span>
              )}
              {tab.display}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="h-full max-w-[1500px]  w-full p-3 my-6">
          <Tab.Panel>{<Gallery photos={allImages} />}</Tab.Panel>
          <Tab.Panel>{<Gallery photos={firstPhoto} />}</Tab.Panel>
          <Tab.Panel>{<Gallery photos={secondPhoto} />}</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
