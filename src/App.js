import React, { useState } from 'react';
import { Users, MapPin, Guitar, Disc3, Globe, Mic, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

// --- Data for the Infographic (Extracted from Will Straw's paper) ---
// --- Datos para la Infografía (Extraídos del paper de Will Straw) ---
const infographicData = {
  title: "Sistemas de Articulación, Lógicas de Cambio",
  subtitle: "Comunidades y Escenas en la Música Popular",
  author: "Will Straw (Cultural Studies, 1991)",
  introduction: "Infografía interactiva que resume los conceptos clave del influyente paper de Will Straw, explorando cómo se forman y cambian las agrupaciones musicales.",
  comparison: {
    title: "Comunidad Musical vs. Escena Musical",
    concepts: [
      {
        id: 'community',
        name: "Comunidad Musical",
        icon: Users,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        definition: "Grupo estable, con raíces geográficas e históricas, que explora uno o más idiomas musicales. Presupone unidad y continuidad.",
        points: [
          "Estabilidad relativa del grupo",
          "Fuertes raíces geográficas/históricas",
          "Exploración de idiomas musicales definidos",
          "Presunción de unidad y continuidad cultural",
          "Enfoque en la herencia y la tradición"
        ]
      },
      {
        id: 'scene',
        name: "Escena Musical",
        icon: MapPin,
        color: "text-teal-600",
        bgColor: "bg-teal-50",
        borderColor: "border-teal-200",
        definition: "Espacio cultural (no necesariamente fijo geográficamente) donde coexisten diversas prácticas musicales, interactuando y diferenciándose.",
        points: [
          "Coexistencia de prácticas diversas",
          "Interacción, diferenciación y cambio constante",
          "Articulación vía comunicación, alianzas, fronteras",
          "Dinámica más cosmopolita y menos estable",
          "Énfasis en la interacción presente y futura"
        ]
      }
    ]
  },
  logics: {
    title: "Lógicas de Cambio en Terrenos Musicales",
    terrains: [
      {
        id: 'alt-rock',
        name: "Rock Alternativo",
        icon: Guitar,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        description: "Caracterizado por un pluralismo estable y una relación particular con la historia y el localismo.",
        points: [
          "Ausencia de 'obsolescencia': estilos coexisten.",
          "Canonización de estilos pasados (garage, punk, etc.).",
          "Énfasis en la carrera individual sobre el movimiento colectivo.",
          "Conexión con cultura de coleccionistas (masculina, blanca).",
          "Cosmopolitismo: lenguajes similares repetidos en distintas locales."
        ]
      },
      {
        id: 'dance-music',
        name: "Música Dance",
        icon: Disc3,
        color: "text-pink-600",
        bgColor: "bg-pink-50",
        borderColor: "border-pink-200",
        description: "Marcada por la rápida sucesión de estilos, la importancia de la infraestructura y la constante redefinición.",
        points: [
          "Énfasis en distinción y jerarquías (estilo, clase, raza).",
          "Transforma diversidad espacial (regional) en secuencia temporal (ciclos).",
          "Infraestructuras (DJs, sellos, listas) gestionan el cambio.",
          "Constante tensión y redefinición (ej. 'real' vs. sintético, local vs. global).",
          "Altamente policéntrica y orientada al presente/futuro."
        ]
      }
    ]
  },
  takeaways: {
      title: "Conclusiones Clave",
      points: [
          { id: 'global-local', name: "Globalización y Localismo", description: "No son opuestos simples. Las 'escenas' locales se insertan en sistemas de articulación internacionales, a veces reproduciendo un cosmopolitismo.", icon: Globe, color: "text-indigo-600", bgColor: "bg-indigo-50", borderColor: "border-indigo-200" },
          { id: 'politics', name: "Política de la Música Popular", description: "Reside menos en la transgresión inherente de un estilo y más en cómo se construyen audiencias y alianzas entre comunidades y formas musicales, mediadas por instituciones (radio, clubs).", icon: Mic, color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200" }
      ]
  },
  references: {
      title: "Referencia Principal",
      icon: BookOpen,
      main: "Straw, Will (1991) 'Systems of articulation, logics of change: Communities and scenes in popular music', Cultural Studies, 5:3, pp. 368-388.",
      doi: "10.1080/09502389100490311",
      doiLink: "https://doi.org/10.1080/09502389100490311"
  }
};

// --- Reusable Components ---
// --- Componentes Reutilizables ---

// Card component for Community vs Scene
// Componente de Tarjeta para Comunidad vs Escena
const ConceptCard = ({ concept }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = concept.icon;

  return (
    <div className={`border ${concept.borderColor} rounded-lg p-6 shadow-md ${concept.bgColor} transition-all duration-300 hover:shadow-lg flex flex-col`}>
      <div className="flex items-center mb-4">
        <Icon className={`w-8 h-8 mr-3 ${concept.color}`} />
        <h3 className={`text-xl font-semibold ${concept.color}`}>{concept.name}</h3>
      </div>
      <p className="text-gray-700 mb-4 text-sm">{concept.definition}</p>
      {/* Contenedor para la lista que permite el crecimiento */}
      <div className="flex-grow">
        {/* Lista de puntos con altura máxima y overflow oculto hasta expandir */}
        <ul className={`list-disc list-inside text-gray-600 space-y-1 text-sm transition-max-height duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-20'}`}>
          {concept.points.map((point, index) => (
            <li key={`${concept.id}-${index}`}>{point}</li>
          ))}
        </ul>
      </div>
       {/* Botón para expandir/contraer */}
       <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-4 text-sm ${concept.color} font-medium flex items-center self-start hover:underline`}
          aria-expanded={isExpanded} // Añadido para accesibilidad
        >
          {isExpanded ? 'Mostrar menos' : 'Mostrar más'}
          {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
        </button>
    </div>
  );
};

// Card component for Logics of Change
// Componente de Tarjeta para Lógicas de Cambio
const LogicDetailCard = ({ terrain }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = terrain.icon;

  return (
    <div className={`border ${terrain.borderColor} rounded-lg p-6 shadow-md ${terrain.bgColor} transition-all duration-300 hover:shadow-lg flex flex-col`}>
      <div className="flex items-center mb-4">
        <Icon className={`w-8 h-8 mr-3 ${terrain.color}`} />
        <h3 className={`text-xl font-semibold ${terrain.color}`}>{terrain.name}</h3>
      </div>
      <p className="text-gray-700 mb-4 text-sm">{terrain.description}</p>
       {/* Contenedor para la lista */}
       <div className="flex-grow">
        {/* Lista de puntos */}
        <ul className={`list-disc list-inside text-gray-600 space-y-1 text-sm transition-max-height duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-24'}`}>
          {terrain.points.map((point, index) => (
            <li key={`${terrain.id}-${index}`}>{point}</li>
          ))}
        </ul>
      </div>
       {/* Botón para expandir/contraer */}
       <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-4 text-sm ${terrain.color} font-medium flex items-center self-start hover:underline`}
          aria-expanded={isExpanded} // Añadido para accesibilidad
        >
          {isExpanded ? 'Mostrar menos' : 'Mostrar más'}
          {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
        </button>
    </div>
  );
};

// Card component for Key Takeaways
// Componente de Tarjeta para Conclusiones Clave
const TakeawayCard = ({ takeaway }) => {
    const Icon = takeaway.icon;
    return (
        <div className={`border ${takeaway.borderColor} rounded-lg p-5 shadow-sm ${takeaway.bgColor} transition-all duration-300 hover:shadow-md flex items-start space-x-4`}>
            {/* Icono */}
            <Icon className={`w-7 h-7 ${takeaway.color} mt-1 flex-shrink-0`} />
            {/* Contenido */}
            <div>
                <h4 className={`text-lg font-semibold ${takeaway.color} mb-1`}>{takeaway.name}</h4>
                <p className="text-gray-700 text-sm">{takeaway.description}</p>
            </div>
        </div>
    );
}

// Section Title Component
// Componente para Título de Sección
const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{title}</h2>
);

// --- Main App Component ---
// --- Componente Principal de la Aplicación ---
function App() {
  return (
    // Contenedor principal con padding y fondo gris claro
    <div className="font-sans bg-gray-50 min-h-screen p-4 md:p-8">
      {/* Contenedor central con sombra, bordes redondeados y fondo blanco */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-6 md:p-10">

        {/* Header - Cabecera */}
        <header className="text-center mb-10 border-b pb-6 border-gray-200">
          {/* Título Principal */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            {infographicData.title}
          </h1>
           {/* Subtítulo */}
           <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
            {infographicData.subtitle}
           </h2>
           {/* Autor */}
          <p className="text-lg text-gray-500 mb-4">{infographicData.author}</p>
          {/* Introducción */}
          <p className="text-md text-gray-600 max-w-3xl mx-auto">{infographicData.introduction}</p>
        </header>

        {/* Comparison Section - Sección de Comparación */}
        <section id="comparison" className="mb-12">
          <SectionTitle title={infographicData.comparison.title} />
          {/* Grid para las tarjetas de comparación */}
          <div className="grid md:grid-cols-2 gap-8">
            {infographicData.comparison.concepts.map(concept => (
              <ConceptCard key={concept.id} concept={concept} />
            ))}
          </div>
        </section>

        {/* Logics of Change Section - Sección de Lógicas de Cambio */}
        <section id="logics" className="mb-12">
          <SectionTitle title={infographicData.logics.title} />
          {/* Grid para las tarjetas de lógicas */}
          <div className="grid md:grid-cols-2 gap-8">
            {infographicData.logics.terrains.map(terrain => (
              <LogicDetailCard key={terrain.id} terrain={terrain} />
            ))}
          </div>
        </section>

         {/* Key Takeaways Section - Sección de Conclusiones Clave */}
        <section id="takeaways" className="mb-12">
          <SectionTitle title={infographicData.takeaways.title} />
           {/* Grid para las tarjetas de conclusiones */}
          <div className="grid md:grid-cols-2 gap-6">
            {infographicData.takeaways.points.map(takeaway => (
              <TakeawayCard key={takeaway.id} takeaway={takeaway} />
            ))}
          </div>
        </section>

        {/* References Section - Sección de Referencias */}
        <footer id="references" className="text-center border-t pt-8 mt-10 border-gray-200">
           {/* Título de la sección de referencias */}
           <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
             <BookOpen className="w-6 h-6 mr-2 text-gray-600" />
             {infographicData.references.title}
            </h3>
           {/* Referencia principal */}
          <p className="text-sm text-gray-600 mb-2">{infographicData.references.main}</p>
           {/* Enlace DOI */}
          <a
            href={infographicData.references.doiLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            DOI: {infographicData.references.doi}
          </a>
           {/* Nota de pie de página */}
           <p className="text-xs text-gray-400 mt-6">Infografía generada con React y Tailwind CSS.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;