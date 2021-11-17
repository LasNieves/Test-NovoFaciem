import Link from "next/link";

export default function SimpleWithLogo() {
  return (
    <div className="min-h-screen pt-16 pb-12 flex flex-col bg-Blanco dark:bg-PseudoNegro">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <Link href="/">
            <div className="inline-flex">
              <span className="sr-only">Workflow</span>
              <img
                className="h-12 w-auto"
                src="http://www.aytosanlorenzo.es/wp-content/uploads/2016/11/Obras.png"
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-Turquesa uppercase tracking-wide">
              250 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-SemiNegro dark:text-GrisClaroViolaceo  tracking-tight sm:text-5xl">
              Estamos trabajando.
            </h1>
            <p className="mt-2 text-base text-GrisPlata">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <Link href="/">
                <p className="text-base font-medium text-Turquesa hover:text-TurquesaOscuro cursor-pointer">
                  Or go back home<span aria-hidden="true"> &rarr;</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <a
            href="#"
            className="text-sm font-medium text-GrisPlata hover:text-GrisGG"
          >
            Contact Support
          </a>
          <span
            className="inline-block border-l border-GrisClaro"
            aria-hidden="true"
          />
          <a
            href="#"
            className="text-sm font-medium text-GrisPlata hover:text-GrisGG"
          >
            Status
          </a>
          <span
            className="inline-block border-l border-GrisClaro"
            aria-hidden="true"
          />
          <a
            href="#"
            className="text-sm font-medium text-GrisPlata hover:text-GrisGG"
          >
            Twitter
          </a>
        </nav>
      </footer>
    </div>
  );
}
