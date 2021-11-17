export default function SimpleOnBrand() {
  return (
    <div className="bg-Turquesa transition-all duration-500">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-Blanco  sm:text-4xl">
            Más de 50 años brindando la mejor educación
          </h2>
          <p className="mt-3 text-xl text-Gris sm:mt-4">
            Con el transcurso del tiempo, muchas familias fueron adhiriéndose a
            nuestro proyecto
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-VerdeAgua">
              Alumnos
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-Blanco">3200</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-VerdeAgua">
              Aulas
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-Blanco">100</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-VerdeAgua">
              Personal
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-Blanco">
              300
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
