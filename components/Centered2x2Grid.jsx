import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import { ComponentCentered2x2Grid } from '../helpers/data.json'


export default function Centered2x2Grid({ index }) {
  const { title, text1, text2, name1, name2, name3, name4, description1, description2, description3, description4 } = ComponentCentered2x2Grid[index];

  const features = [
    {
      name: name1,
      description: description1,
      icon: GlobeAltIcon,
    },
    {
      name: name2,
      description: description2,
      icon: ScaleIcon,
    },
    {
      name: name3,
      description: description3,
      icon: AnnotationIcon,
    },
    {
      name: name4,
      description: description4,
      icon: LightningBoltIcon,
    },
  ]

  return (
    <div className="py-12 bg-Blanco dark:bg-PseudoNegro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-Turquesa font-semibold tracking-wide uppercase">{title}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-AzulMarino dark:text-GrisClaro sm:text-4xl">
            {text1}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-GrisPlata lg:mx-auto">
            {text2}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-Turquesa text-Blanco">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-SemiNegro dark:text-GrisClaroViolaceo">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-GrisPlata">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
