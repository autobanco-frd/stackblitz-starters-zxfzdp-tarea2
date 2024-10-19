import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <p className="mb-8 leading-relaxed text-gray-700 text-justify">
          Soy un hombre que ha visto la vida entera y ha vivido cada momento
          como si fuera el último. Mis palabras, como semillas sembradas en la
          mente de los demás, parecen haber sido la fuente de la sabiduría o la
          inspiración para quienes me rodean. Soy un viejo tan viejo como el
          viento, mi vida es un libro abierto que espera ser leído y
          comprendido. Cuando no estoy trabajando en algún proyecto, me gusta
          explorar la naturaleza, leer sobre tecnología, ciencia, asi como,
          compartir mis ideas con amigos y colegas. Disfruto de la música y el
          arte, siempre estoy en busca de nuevas fuentes de inspiración para
          enriquecer mi creatividad. Estoy emocionado por conocer tu mundo,
          aprender de tus ideas y experiencias.
        </p>
      </div>
      <div>
        <Image src="/about.jpg" width={500} height={500} alt="Avatar"></Image>
      </div>
    </div>
  );
}
