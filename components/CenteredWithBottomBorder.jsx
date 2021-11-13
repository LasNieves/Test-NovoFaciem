/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import ToggleWithIcon from "./ToggleWithIcon";
import { useDarkMode } from './../hooks/useDarkMode';

const solutions = [
  {
    name: "Inicial",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/inicial",
    icon: ChartBarIcon,
  },
  {
    name: "Primario",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/primario",
    icon: CursorClickIcon,
  },
  {
    name: "Secundario",
    description: "Your customers' data will be safe and secure.",
    href: "/secundario",
    icon: ShieldCheckIcon,
  },
  {
    name: "Terciario",
    description: "Connect with third-party tools that you're already using.",
    href: "/terciario",
    icon: ViewGridIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Parroquial",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/otros/parroquial",
    icon: SupportIcon,
  },
  {
    name: "Autoridades",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/otros/autoridades",
    icon: BookmarkAltIcon,
  },
  {
    name: "Eventos",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/otros/eventos",
    icon: CalendarIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CenteredWithBottomBorder() {
  const { switchTheme } = useDarkMode();

  return (
    <Popover className="relative bg-Blanco dark:bg-GrisNt">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 border-transparent py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <div>
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://res.cloudinary.com/novofaciem/image/upload/v1636832762/icon_512_Dark_b635f20a00.png"
                      alt="Icono"
                    />
                  </div>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-Blanco dark:bg-GrisNt rounded-md p-2 inline-flex items-center justify-center text-GrisClaroViolaceo hover:text-GrisPlata hover:bg-GrisClaro focus:outline-none focus:ring-2 focus:ring-inset focus:ring-Turquesa">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Link href="/">
                  <p className="cursor-pointer text-base font-medium text-GrisPlata  hover:text-SemiNegro dark:hover:text-GrisClaro">
                    Inicio
                  </p>
                </Link>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-GrisPlata" : "text-GrisPlata",
                          "group bg-Blanco dark:bg-GrisNt rounded-md inline-flex items-center text-base font-medium hover:text-SemiNegro dark:hover:text-GrisClaro"
                        )}
                      >
                        <span>Niveles</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-GrisPlata" : "text-GrisPlata",
                            "ml-2 h-5 w-5 group-hover:text-GrisPlata"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-Blanco dark:bg-GrisNt px-5 py-6 sm:gap-8 sm:p-8">
                              {solutions.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-GrisClaro"
                                >
                                  <div className="ml-3 p-3 cursor-pointer hover:bg-SemiBlanco dark:hover:bg-PseudoNegro flex items-start rounded-lg">
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-Turquesa"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-SemiNegro dark:text-GrisClaroViolaceo">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-GrisPlata">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-Blanco dark:bg-GrisNt space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                              {callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-SemiNegro dark:text-GrisClaroViolaceo hover:bg-GrisClaro dark:hover:bg-PseudoNegro"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-GrisPlata"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Link href="/nosotros">
                  <p className="cursor-pointer text-base font-medium text-GrisPlata hover:text-SemiNegro dark:hover:text-GrisClaro">
                    Nosotros
                  </p>
                </Link>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-GrisPlata" : "text-GrisPlata",
                          "group bg-Blanco dark:bg-GrisNt rounded-md inline-flex items-center text-base font-medium hover:text-SemiNegro dark:hover:text-GrisClaro"
                        )}
                      >
                        <span>Otros</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-GrisPlata" : "text-GrisPlata",
                            "ml-2 h-5 w-5 group-hover:text-GrisPlata"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-Blanco dark:bg-GrisNt px-5 py-6 sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-Blanco"
                                >
                                  <div className="ml-3 p-3 cursor-pointer hover:bg-SemiBlanco dark:hover:bg-PseudoNegro flex items-start rounded-lg">
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-Turquesa"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-SemiNegro dark:text-GrisClaroViolaceo">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-GrisPlata">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-Blanco dark:bg-GrisNt sm:px-8 sm:py-8">
                              <div>
                                <h3 className="text-sm tracking-wide font-medium text-GrisPlata dark:text-GrisClaroViolaceo uppercase">
                                  Recent Posts
                                </h3>
                                <ul className="mt-4 space-y-4">
                                  {recentPosts.map((post) => (
                                    <li
                                      key={post.id}
                                      className="text-base truncate"
                                    >
                                      <a
                                        href={post.href}
                                        className="font-medium text-SemiNegro dark:text-GrisPlata hover:text-Plata dark:hover:text-GrisGG"
                                      >
                                        {post.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-5 text-sm">
                                <a
                                  href="#"
                                  className="font-medium text-Turquesa hover:text-TurquesaOscuro"
                                >
                                  {" "}
                                  View all posts{" "}
                                  <span aria-hidden="true">&rarr;</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <button onClick={switchTheme} className="p-0 m-0 h-6 w-11 border-0 border-transparent rounded-xl cursor-pointer mt-1 hidden md:inline-block">
                <ToggleWithIcon />
              </button>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link href="/siena">
                  <p className="cursor-pointer whitespace-nowrap text-base font-medium text-SemiNegro hover:text-GrisTopo dark:hover:text-GrisPlata">
                    Sign in
                  </p>
                </Link>
                <Link
                  href="/siena"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-Blanco bg-Turquesa hover:bg-TurquesaOscuro"
                >
                  <p className="cursor-pointer ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-Blanco bg-Turquesa hover:bg-TurquesaOscuro">
                    Sign up
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-PseudoNegro ring-opacity-5 bg-Blanco dark:bg-GrisNt divide-y-2 divide-SemiBlanco dark:divide-PseudoNegro">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <button onClick={switchTheme} className="p-0 m-0 h-6 w-11 border-0 border-transparent rounded-xl cursor-pointer">
                      <ToggleWithIcon />
                    </button>
                    <div className="-mr-2">
                      <Popover.Button className="bg-Blanco dark:bg-GrisNt rounded-md p-2 inline-flex items-center justify-center text-GrisPlata hover:text-SemiNegro dark:hover:text-Gris hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-Turquesa">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <div className="cursor-pointer -m-3 p-3 flex items-center rounded-md hover:bg-SemiBlanco dark:hover:bg-PseudoNegro">
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-Turquesa"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium text-SemiNegro dark:text-GrisClaroViolaceo">
                              {item.name}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <Link href="/nosotros">
                      <p className="cursor-pointer text-base font-medium text-SemiNegro hover:text-GrisGG dark:text-GrisPlata dark:hover:text-GrisClaroViolaceo">
                        Nosotros
                      </p>
                    </Link>

                    <Link href="/blog">
                      <p className="cursor-pointer text-base font-medium text-SemiNegro hover:text-GrisGG dark:text-GrisPlata dark:hover:text-GrisClaroViolaceo">
                        Blog
                      </p>
                    </Link>
                    {resources.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <p className="cursor-pointer text-base font-medium text-SemiNegro hover:text-GrisGG dark:text-GrisPlata dark:hover:text-GrisClaroViolaceo">
                          {item.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div>
                    <Link href="/siena">
                      <p className="cursor-pointer w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-Turquesa hover:bg-TurquesaOscuro">
                        Sign up
                      </p>
                    </Link>
                    <p className="mt-6 text-center text-base font-medium text-GrisPlata">
                      Existing customer?
                      <Link href="/siena">
                        <p className="inline-block cursor-pointer text-Turquesa hover:text-TurquesaOscuro">
                          Sign in
                        </p>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
