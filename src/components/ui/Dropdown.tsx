import { FC, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Variant } from "../CreateForm";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

interface DropdownProps {
  onClick: (e: Variant) => void;
  variant: string;
}

const variants = ["Graphic Design", "UI/UX Design", "Web Development"];

const Dropdown: FC<DropdownProps> = ({ onClick, variant }) => {
  const handleOnClick = (variant: string) => {
    onClick(variant as Variant);
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {variant}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {variants.map((variant, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <li
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900 " : "text-gray-700",
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                    onClick={() => handleOnClick(variant)}
                  >
                    {variant}
                  </li>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
