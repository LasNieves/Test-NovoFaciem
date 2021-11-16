import React, { useState, useEffect } from 'react';
import { helpHttp } from "../helpers/helpHttp";

export default function ColumnCards() {
  const [data, setData] = useState(null);

  const url = "https://backendln.herokuapp.com/blogs";
  const api = helpHttp();

  useEffect(() => {
    api.get(url)
      .then(res => {
        if (!res.err) {
          setData(res);
        } else {
          setData(null);
        }
      })
  }, [url]);

  const posts = [
    {
      title: (data ? data[0].titulo : ""),
      category: { name: (data ? data[0].categoria : ""), href: "#" },
      description:
        (data ? data[0].descripcion : ""),
      date: (data ? data[0].fecha : ""),
      datetime: "2020-03-16",
      imageUrl:
        (data ? data[0].imagen[0].url : ""),
      author: {
        name: (data ? data[0].autor : ""),
        href: "#",
        imageUrl:
          (data ? data[0].imagenAutor[0].url : ""),
      },
    },
    {
      title: (data ? data[1].titulo : ""),
      category: { name: (data ? data[1].categoria : ""), href: "#" },
      description:
        (data ? data[1].descripcion : ""),
      date: (data ? data[1].fecha : ""),
      datetime: "2020-03-16",
      imageUrl:
        (data ? data[1].imagen[0].url : ""),
      author: {
        name: (data ? data[1].autor : ""),
        href: "#",
        imageUrl:
          (data ? data[1].imagenAutor[0].url : ""),
      },
    },
    {
      title: (data ? data[2].titulo : ""),
      category: { name: (data ? data[2].categoria : ""), href: "#" },
      description:
        (data ? data[2].descripcion : ""),
      date: (data ? data[2].fecha : ""),
      datetime: "2020-03-16",
      imageUrl:
        (data ? data[2].imagen[0].url : ""),
      author: {
        name: (data ? data[2].autor : ""),
        href: "#",
        imageUrl:
          (data ? data[2].imagenAutor[0].url : ""),
      },
    },
  ];

  return (
    <>
      {data &&
        <div className="relative bg-Blanco dark:bg-PseudoNegro pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-Blanco dark:bg-PseudoNegro h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-Turquesa dark:text-Turquesa  sm:text-4xl">
                Sección de noticias
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Informate de los últimos avisos institucionales para estar lo más actualizado posible
                acerca de la comunidad de Las Nieves.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {posts.map((post) => (
                <div
                  key={post.title}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={post.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-Blanco dark:bg-SemiNegro p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-Turquesa">
                        {post.category.name}
                      </p>
                      <p className="text-xl font-semibold text-SemiNegro dark:text-GrisClaroViolaceo">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-GrisPlata">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={post.author.href}>
                          <span className="sr-only">{post.author.name}</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={post.author.imageUrl}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-SemiNegro dark:text-Gris">
                          <a href={post.author.href} className="hover:underline">
                            {post.author.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-GrisPlata">
                          <time dateTime={post.datetime}>{post.date}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </>
  );
}
