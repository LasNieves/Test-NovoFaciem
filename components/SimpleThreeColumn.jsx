import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentSimpleThreeColumn } from "../helpers/data.json";

export default function SimpleThreeColumn({ index, icon }) {
  let { name1, name2, name3, description1, description2, description3 } =
    ComponentSimpleThreeColumn[index];

  const features = [
    {
      name: name1,
      description: description1,
      icon: icon[0],
    },
    {
      name: name2,
      description: description2,
      icon: icon[1],
    },
    {
      name: name3,
      description: description3,
      icon: icon[2],
    },
  ];

  return (
    <div className="py-12 bg-Blanco dark:bg-PseudoNegro">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-Turquesa text-Blanco">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-SemiNegro dark:text-GrisClaroViolaceo">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-GrisPlata">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
