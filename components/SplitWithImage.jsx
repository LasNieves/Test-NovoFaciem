/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from 'react'
import { helpHttp } from "../helpers/helpHttp";

export default function SplitWithImage({ index }) {
  const [data, setData] = useState(null);

  const url = "https://backendln.herokuapp.com/banner-introduccions";
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
        <div className="relative z-n1 bg-TurquesaOscuro">
          <div className="h-56 bg-AzulMarino sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img
              className="w-full h-full object-cover"
              src={data.imagen[0].url}
              alt="ImageTailwind"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <h2 className="cursor-pointer text-base font-semibold uppercase tracking-wider text-Blanco ">
                {data.subtitulo}
              </h2>
              <p className="mt-2 text-Blanco  text-3xl font-extrabold tracking-tight sm:text-4xl">
                {data.titulo}
              </p>
              <p className="mt-3 text-lg text-GrisClaro">
                {data.descripcion}
              </p>
            </div>
          </div>
        </div>
      }
    </>
  );
}
