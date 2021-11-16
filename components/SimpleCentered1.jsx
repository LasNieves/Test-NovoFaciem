/* This example requires Tailwind CSS v2.0+ */
import { helpHttp } from "../helpers/helpHttp";
import React, { useEffect, useState } from "react";

export default function SimpleCentered1({ index }) {
  const [data, setData] = useState(null);

  const url = "https://backendln.herokuapp.com/banner-bienvenidas";
  const api = helpHttp();

  useEffect(() => {
    api.get(url).then((res) => {
      if (!res.err) {
        setData(res[index]);
      } else {
        setData(null);
      }
    });
  }, [url]);

  return (
    <>
      {data && (
        <div className="bg-Blanco  dark:bg-PseudoNegro">
          <div className="max-w-7xl mx-auto pb-16 pb-4 sm:pb-24 sm:pb-6 lg:pb-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-Turquesa dark:bg-transparent tracking-wide uppercase">
                {data.titulo}
              </h2>
              <p className="mt-1 text-4xl font-extrabold text-AzulMarino dark:text-Gris sm:text-5xl sm:tracking-tight lg:text-6xl">
                {data.texto1}
              </p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-GrisPlata">
                {data.texto2}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
