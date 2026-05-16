// Datos específicos por ciudad para las landings locales SEO
// 70% contenido común + 30% contenido único por ciudad

export interface CityData {
  key: string;
  slug: string;
  name: string;
  // Contenido único local (30%)
  localIntro: string;
  geoReference: string;
  ctaText: string;
  // SEO específico
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
  };
  // Schema location
  venue: {
    name: string;
    url?: string;
  };
}

export const cities: Record<string, CityData> = {
  elche: {
    key: "elche",
    slug: "clases-de-baile-elche",
    name: "Elche",
    localIntro: `The Latin Action es una compañia de Salsa y Bachata fundada por Juan Carlos. Con más de 20 años de experiencia dando clases, donde cada persona lleva su ritmo, sin agobios, sin compararse. Aquí se viene a aprender y a disfrutar, no a ser el mejor.`,
    geoReference: "Zona centro de Elche, bien comunicado y con fácil acceso desde toda la ciudad.",
    ctaText: "Reserva tu clase de baile en Elche",

    seo: {
      title: "Clases de Salsa y Bachata en Elche | The Latin Action",
      description: "⭐ Academia de Salsa y Bachata en Elche con Juan Carlos ✅ +20 años de experiencia 🕺 Clases para todos los niveles 📍 Zona centro de Elche 📞 645 08 91 22",
      keywords: "clases de baile Elche, bachata Elche, salsa Elche, academia de baile Elche, aprender bachata Elche, clases bachata principiantes Elche, baile latino Elche, The Latin Action Elche",
      canonical: "https://thelatinaction.com/clases-de-baile-elche/",
    },
    venue: {
      name: "Academia Dairen - Elche",
      url: "https://academiadairen.com/",
    },
  },
  elda: {
    key: "elda",
    slug: "clases-de-baile-elda",
    name: "Elda",
    localIntro: `Clases de salsa y bachata en Elda para todos los niveles. Sin prisas, sin bailarines perfectos, sin experiencia previa. Ven cuando puedas, baila a tu manera y vete con una sonrisa. Eso es lo que hacemos.`,
    geoReference: "En el corazón de Elda, con fácil acceso desde Petrer y localidades cercanas.",
    ctaText: "Reserva tu clase de baile en Elda",
    seo: {
      title: "Clases de Salsa y Bachata en Elda | The Latin Action",
      description: "⭐ Academia de Salsa y Bachata en Elda con Juan Carlos ✅ +20 años de experiencia 🕺 Clases para todos los niveles 📍 Centro de Elda 📞 645 08 91 22",
      keywords: "clases de baile Elda, bachata Elda, salsa Elda, academia de baile Elda, aprender bachata Elda, clases bachata principiantes Elda, baile latino Elda, The Latin Action Elda",
      canonical: "https://thelatinaction.com/clases-de-baile-elda/",
    },
    venue: {
      name: "Estudio42 - Elda",
      url: "https://estudio42.es/",
    },
  },
  novelda: {
    key: "novelda",
    slug: "clases-de-baile-novelda",
    name: "Novelda",
    localIntro: `Bachata en Novelda sin tener que irte del pueblo. Clases presenciales, grupales y con buen ambiente. Da igual si nunca has bailado: aquí te enseñamos desde cero, con paciencia y buena música.`,
    geoReference: "Ubicación céntrica en Novelda, accesible desde Aspe, Monforte y zonas cercanas.",
    ctaText: "Reserva tu clase de baile en Novelda",
    seo: {
      title: "Clases de Salsa y Bachata en Novelda | The Latin Action",
      description: "⭐ Academia de Salsa y Bachata en Novelda con Juan Carlos ✅ +20 años de experiencia 🕺 Clases para todos los niveles 📍 Centro de Novelda 📞 645 08 91 22",
      keywords: "clases de baile Novelda, bachata Novelda, salsa Novelda, academia de baile Novelda, aprender bachata Novelda, clases bachata principiantes Novelda, baile latino Novelda, The Latin Action Novelda",
      canonical: "https://thelatinaction.com/clases-de-baile-novelda/",
    },
    venue: {
      name: "NVFit - Novelda",
      url: "https://nvfit.es/",
    },
  },
};

// Contenido común (70%) - reutilizado en todas las ciudades
export const sharedContent = {
  danceTypes: [
    {
      name: "Bachata",
      description: "Pasos básicos, giros, bachata sensual. Aprendes a moverte, a soltarte y a disfrutar del ritmo con alguien delante.",
      cities: ["elche", "elda", "novelda"],
    },
    {
      name: "Salsa en linea",
      description: "Salsa en línea: figuras rápidas, mucho movimiento y energía. Perfecta si te gusta el estilo más urbano y dinámico.",
      cities: ["elche", "elda"],
    },
    {
      name: "Salsa cubana",
      description: "Salsa cubana: vueltas, giros circulares, juego de pies. Un estilo más suelto y con mucho sabor caribeño.",
      cities: ["elche"],
    }

  ],
  methodology: {
    title: "Nuestra metodología",
    points: [
      "Grupos pequeños, con una atención para todos",
      "Rotamos parejas para que aprendas con todo el mundo",
      "Vas poco a poco: de cero a intermedio y sin prisas",
      "Practicamos con música actual y clásicos latinos",
    ],
  },
  levels: {
    title: "Niveles disponibles",
    items: [
      {
        name: "Principiantes",
        description: "Nunca has bailado? Aquí te enseñamos desde cero, con paciencia y buena música. No necesitas experiencia previa.",
      },
      {
        name: "Intermedios",
        description: "Ya controlas lo básico? En este nivel profundizamos en figuras más complejas y trabajamos la conexión con la pareja.",
      },
    ],
  },
  benefits: [
    "Haces ejercicio sin darte cuenta",
    "Desconectas del móvil y del lío del día",
    "Conoces gente nueva de verdad",
    "Pierdes la vergüenza y ganas soltura",
    "Aprendes algo que te sirve para salir a bailar donde sea",
  ],
};

export type CityKey = keyof typeof cities;
