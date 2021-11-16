/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "¿Cuántos alumnos hay?",
    answer:
      "Actualmente cuenta con más de 3000 alumnos, mujeres y varones, repartidos en los distintos niveles (Inicial, Primario, Secundario y Superior) y turnos (mañana, tarde y noche) en que se desarrollan las actividades.",
  },
  {
    question: "¿Cuántos docentes hay?",
    answer:
      "Sus docentes superan los 370. Cuenta también con el Campus Cultural con una propuesta complementaria a los estudios formales.",
  },
  {
    question: "¿Cuántos años tiene la institución?",
    answer:
      "El Instituto Nuestra Señora de las Nieves abrió sus puertas en el año 1965. Apenas contaba con unas pocas divisiones de la sección primaria."
  },
  {
    question: "¿Cuántas aulas hay?",
    answer:
      "Más de 80 aulas, todas equipadas con pantallas electrónicas interactivas (TouchScreen) con PC incorporadas de última generación"
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CenteredAccordion() {
  return (
    <div className="bg-Blanco dark:bg-PseudoNegro">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-GrisClaro">
          <h2 className="text-center text-3xl font-extrabold text-AzulMarino dark:text-Gris sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-GrisClaro">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-Gris">
                        <span className="font-medium text-SemiNegro dark:text-Blanco">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-GrisPlata dark:text-GrisClaroViolaceo">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
