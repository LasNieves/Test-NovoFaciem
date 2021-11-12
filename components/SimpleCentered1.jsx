/* This example requires Tailwind CSS v2.0+ */
export default function SimpleCentered1() {
  return (
    <div className="bg-Blanco  dark:bg-PseudoNegro transition-all duration-500 ">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-Turquesa dark:bg-transparent tracking-wide uppercase">
            Pricing
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-AzulMarino dark:text-Gris sm:text-5xl sm:tracking-tight lg:text-6xl">
            Take control of your team.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-GrisPlata">
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
        </div>
      </div>
    </div>
  );
}
