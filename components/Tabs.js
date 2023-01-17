import { Tab } from "@headlessui/react";
import Gallery from "./Gallery";

const tabs = [
  { key: "Photo-1", display: "Photo-1" },
  { key: "Photo-2", display: "Photo-2" },
  { key: "Photo-3", display: "Photo-3" }
];

export default function TabGroup({ photos, toggleMenu }) {
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
                      ? "bg-blue-200 text-white p-3 "
                      : "bg-white text-black"
                  }
                >
                  {tab.display}
                </span>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="h-full max-w-[1500px]  w-full p-3 my-6">
          {tabs.map(tab => (
            <Tab.Panel key={tab.key}>
              <Gallery
                allImages={photos.filter(photo => photo.folder === tab.key)}
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
