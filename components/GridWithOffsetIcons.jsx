/* This example requires Tailwind CSS v2.0+ */
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import { ComponentGridWithOffsetIcons } from "../helpers/data.json";

export default function GridWithOffsetIcons({ index }) {
  const {
    title,
    text1,
    text2,
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    desc6,
    href1,
    href2,
    href3,
    href4,
    href5,
    href6,
    name1,
    name2,
    name3,
    name4,
    name5,
    name6,
  } = ComponentGridWithOffsetIcons[index];

  const features = [
    { name: name1, desc: desc1, href: href1, icon: CloudUploadIcon },
    { name: name2, desc: desc2, href: href2, icon: LockClosedIcon },
    { name: name3, desc: desc3, href: href3, icon: RefreshIcon },
    { name: name4, desc: desc4, href: href4, icon: ShieldCheckIcon },
    { name: name5, desc: desc5, href: href5, icon: CogIcon },
    { name: name6, desc: desc6, href: href6, icon: ServerIcon },
  ];

  return (
    <div className="relative bg-Blanco dark:bg-PseudoNegro py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-Turquesa dark:text-Turquesa uppercase">
          {title}
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-AzulMarino dark:text-Gris tracking-tight sm:text-4xl">
          {text1}
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-GrisPlata dark:text-GrisPlata">
          {text2}
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <a href={feature.href} target="_blank" rel="noopener noreferrer">
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-SemiBlanco dark:bg-GrisNt rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-Turquesa rounded-md shadow-lg">
                          <feature.icon
                            className="h-6 w-6 text-Blanco"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-SemiNegro dark:text-GrisClaroViolaceo tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-GrisPlata dark:text-GrisPlata">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
