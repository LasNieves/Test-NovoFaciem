/* This example requires Tailwind CSS v2.0+ */
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { ComponentSplitWithImageData } from "../helpers/data.json";

export default function SplitWithImage({ index }) {
  let { title, subtitle, subtitle2, image, redirect } =
    ComponentSplitWithImageData[index];

  return (
    <div className="relative z-n1 bg-TurquesaOscuro">
      <div className="h-56 bg-AzulMarino sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="http://www.lasnieves.edu.ar/uploaded_files/a98t8295.jpg"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="cursor-pointer text-base font-semibold uppercase tracking-wider text-Blanco ">
            {title}
          </h2>
          <p className="mt-2 text-Blanco  text-3xl font-extrabold tracking-tight sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-3 text-lg text-GrisClaro">{subtitle2}</p>
          <div className="mt-8 cursor-pointer">
            <div className="inline-flex rounded-md shadow ">
              <a
                href={redirect.href}
                className=" inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-SemiNegro bg-Blanco hover:bg-GrisPlata"
              >
                {redirect.text}
                <ExternalLinkIcon
                  className="-mr-1 ml-3 h-5 w-5 text-VerdeAgua"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SplitWithImage.defaultProps = {
  index: 0,
};
