const people = [
  {
    name: 'Lionel Messi',
    role: 'Co-Founder Apple',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Santiago Enrique Martin',
    role: 'Co-Founder Google',
    imageUrl:
      'https://res.cloudinary.com/novofaciem/image/upload/v1637029758/unnamed_0047e5066f.png',
  },
  {
    name: 'Claudio Olmedo',
    role: 'Co-Founder Microsoft',
    imageUrl:
      'https://res.cloudinary.com/novofaciem/image/upload/v1637029758/unnamed_0bda6c4fa2.jpg',
  },
  {
    name: 'Jonathan Mircha',
    role: 'Co-Founder YouTube',
    imageUrl:
      'https://res.cloudinary.com/novofaciem/image/upload/v1637009997/thumbnail_11139429_c28a569303.jpg',
  },
  {
    name: 'Santiago Enrique Martin',
    role: 'Presidente de Santilandia',
    imageUrl:
      'https://res.cloudinary.com/novofaciem/image/upload/v1637029758/unnamed_0047e5066f.png',
  },
  {
    name: 'Santiago Enrique Martin',
    role: 'Coleccionista de medias',
    imageUrl:
      'https://res.cloudinary.com/novofaciem/image/upload/v1637029758/unnamed_0047e5066f.png',
  },
]

export default function GridWithRound() {
  return (
    <div className="bg-Blanco dark:bg-PseudoNegro">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-AzulMarino dark:text-Gris">Autoridades</h2>
            <p className="text-xl text-GrisPlata">
              Todas las autoridades que trabajan y contribuyen en el día a día de la familia que compone al Instituto Nuestra Señora de Las Nieves
            </p>
          </div>
          <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src={person.imageUrl} alt={person.name} />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm text-SemiNegro dark:text-GrisClaro">
                      <h3>{person.name}</h3>
                      <p className="text-Turquesa">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
