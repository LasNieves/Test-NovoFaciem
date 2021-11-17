import { helpHttp } from "../helpers/helpHttp";
import React, { useEffect, useState } from "react";

export default function WithTestimonialAndStats({ index }) {
  const [data, setData] = useState(null);

  const url = "https://backendln.herokuapp.com/testimonios";
  const api = helpHttp();

  useEffect(() => {
    api.get(url)
      .then(res => {
        if (!res.err) {
          setData(res[index]);
        } else {
          setData(null);
        }
      })
  }, [url]);

  return (
    <>
      {data &&
        <div className="relative z-n1 bg-Blanco dark:bg-PseudoNegro py-16 sm:py-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="relative sm:py-16 lg:py-0">
              <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                <div className="absolute inset-y-0 right-1/2 w-full bg-Blanco dark:bg-GrisNt rounded-r-3xl lg:right-72" />
                <svg
                  className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-GrisPlata" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                {/* Testimonial card*/}
                <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={data.imagen[0].url}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-Turquesa mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-Turquesa via-Turquesa opacity-90" />
                  <div className="relative px-8">
                    <div>
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                        alt="Workcation"
                      />
                    </div>
                    <blockquote className="mt-8">
                      <div className="relative text-lg font-medium text-Blanco md:flex-grow">
                        <svg
                          className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-Turquesa"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="relative">
                          {data.frase}
                        </p>
                      </div>

                      <footer className="mt-4">
                        <p className="text-base font-semibold text-VerdeAgua">{data.nombre}</p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              {/* Content area */}
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl text-AzulMarino dark:text-Gris font-extrabold tracking-tight sm:text-4xl">
                  {data.titulo}
                </h2>
                <div className="mt-6 text-GrisPlata space-y-6">
                  <p className="text-lg">
                    {data.parrafo1}
                  </p>
                  <p className="text-base leading-7">
                    {data.parrafo2}
                  </p>
                  <p className="text-base leading-7">
                    {data.parrafo3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
