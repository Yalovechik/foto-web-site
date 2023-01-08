import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";
import { Fragment } from "react";

import { forwardRef } from "react";
import Link from "next/link";

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href} legacyBehavior>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

export default function Example() {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          <MyLink href="/profile">Profile</MyLink>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

// export default function MyDropdown() {
//   const [active, setActive] = useState(true);

// //   const links = [
// //     { href: "/account-settings", label: "Account settings" },
// //     { href: "/support", label: "Support" },
// //     { href: "/license", label: "License" },
// //     { href: "/sign-out", label: "Sign out" }
// //   ];

//   return (
//     <Menu>
//       <Menu.Button>Options</Menu.Button>

//       <Transition
//         enter="transition duration-100 ease-out"
//         enterFrom="transform scale-95 opacity-0"
//         enterTo="transform scale-100 opacity-100"
//         leave="transition duration-75 ease-out"
//         leaveFrom="transform scale-100 opacity-100"
//         leaveTo="transform scale-95 opacity-0"
//       >
//         <Menu.Items className="bg-blue-500 p-3">
//           {links.map(link => (
//             <Menu.Item
//               as="a"
//               key={link.href}
//               href={link.href}
//               className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
//             >
//               {link.label}
//             </Menu.Item>
//           ))}
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   );
// }
