// Datos específicos por ciudad para las landings locales SEO
// 70% contenido común + 30% contenido único por ciudad

export interface CityData {
  slug: string;
  name: string;
  // Contenido único local (30%)
  localIntro: string;
  geoReference: string;
  ctaText: string;
  // Modalidades disponibles
  hasLadyStyle: boolean;
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
    slug: "clases-de-baile-elche",
    name: "Elche",
    localIntro: `En Elche cada vez más personas se animan a aprender bachata y salsa como forma de ocio, 
    deporte y socialización. La ciudad ilicitana cuenta con una vibrante escena de baile latino, 
    donde The Latin Action se ha convertido en referente desde hace más de 20 años. 
    Nuestras clases en Elche reúnen a personas de todas las edades que buscan desconectar del día a día, 
    mantenerse activos y conocer gente nueva en un ambiente divertido y acogedor.`,
    geoReference: "Zona centro de Elche, bien comunicado y con fácil acceso desde toda la ciudad.",
    ctaText: "Reserva tu clase de baile en Elche",
    hasLadyStyle: true,
    seo: {
      title: "Clases de Salsa y Bachata en Elche | The Latin Action",
      description: "⭐ Academia de Salsa y Bachata en Elche con Juan Carlos y Luna ✅ +20 años de experiencia 🕺 Clases para todos los niveles 📍 Zona centro de Elche 📞 645 08 91 22",
      keywords: "clases de baile Elche, bachata Elche, salsa Elche, academia de baile Elche, aprender bachata Elche, clases bachata principiantes Elche, baile latino Elche, The Latin Action Elche",
      canonical: "https://thelatinaction.com/clases-de-baile-elche/",
    },
    venue: {
      name: "Academia Dairen - Elche",
      url: "https://academiadairen.com/",
    },
  },
  elda: {
    slug: "clases-de-baile-elda",
    name: "Elda",
    localIntro: `En Elda el baile latino está ganando cada vez más adeptos. 
    Muchos eldenses buscan una actividad que combine ejercicio, diversión y vida social, 
    y la bachata y salsa son la combinación perfecta. En The Latin Action llevamos el ritmo 
    caribeño a Elda para que puedas disfrutar de clases de calidad cerca de casa. 
    Nuestra comunidad de baile en Elda crece cada semana con personas que descubren 
    la alegría de moverse al ritmo de la música latina.`,
    geoReference: "En el corazón de Elda, con fácil acceso desde Petrer y localidades cercanas.",
    ctaText: "Reserva tu clase de baile en Elda",
    hasLadyStyle: false,
    seo: {
      title: "Clases de Salsa y Bachata en Elda | The Latin Action",
      description: "⭐ Academia de Salsa y Bachata en Elda con Juan Carlos y Luna ✅ +20 años de experiencia 🕺 Clases para todos los niveles 📍 Centro de Elda 📞 645 08 91 22",
      keywords: "clases de baile Elda, bachata Elda, salsa Elda, academia de baile Elda, aprender bachata Elda, clases bachata principiantes Elda, baile latino Elda, The Latin Action Elda",
      canonical: "https://thelatinaction.com/clases-de-baile-elda/",
    },
    venue: {
      name: "Estudio42 - Elda",
      url: "https://estudio42.es/",
    },
  },
  novelda: {
    slug: "clases-de-baile-novelda",
    name: "Novelda",
    localIntro: `Novelda se ha sumado al fenómeno del baile latino con entusiasmo. 
    Cada vez más noveldenses descubren en la bachata y la salsa una forma de hacer ejercicio, 
    relajarse después del trabajo y crear nuevas amistades. The Latin Action ha llevado 
    su experiencia de más de dos décadas a Novelda, ofreciendo clases que se adaptan 
    a todos los niveles. Si vives en Novelda o alrededores, ya no tienes que desplazarte 
    lejos para disfrutar de clases de baile de calidad.`,
    geoReference: "Ubicación céntrica en Novelda, accesible desde Aspe, Monforte y zonas cercanas.",
    ctaText: "Reserva tu clase de baile en Novelda",
    hasLadyStyle: false,
    seo: {
      title: "Clases de Salsa y Bachata en Novelda | The Latin Action",
      description: "⭐ Academia de Salsa y Bachata en Novelda con Juan Carlos y Luna ✅ +20 años de experiencia 🕺 Clases para todos los niveles 📍 Centro de Novelda 📞 645 08 91 22",
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
  aboutUs: {
    title: "¿Quiénes somos?",
    description: `The Latin Action es la academia de Juan Carlos y Luna, dos bailarines profesionales 
    con más de 20 años de experiencia enseñando salsa y bachata. Nuestra filosofía se basa en que 
    cualquier persona puede aprender a bailar, independientemente de su edad o condición física. 
    Creemos en un ambiente cercano, divertido y sin presiones donde cada alumno progresa a su ritmo.`,
  },
  danceTypes: [
    {
      name: "Bachata",
      description: "Desde los pasos básicos hasta la bachata sensual. Aprenderás a moverte con elegancia, conectar con tu pareja y disfrutar de cada canción.",
      onlyElche: false,
    },
    {
      name: "Salsa",
      description: "Salsa cubana y salsa en línea para todos los niveles. Ritmo, diversión y mucha energía en cada clase.",
      onlyElche: false,
    },
    {
      name: "Lady Style",
      description: "Clases especiales para mujeres donde trabajamos la expresión corporal, sensualidad y estilo propio.",
      onlyElche: true,
    },
  ],
  methodology: {
    title: "Nuestra metodología",
    points: [
      "Grupos reducidos para atención personalizada",
      "Rotación de parejas para aprender a bailar con diferentes estilos",
      "Progresión gradual: de principiante a intermedio sin saltos",
      "Práctica constante con música actual y clásicos latinos",
      "Ambiente relajado y sin presiones",
    ],
  },
  levels: {
    title: "Niveles disponibles",
    items: [
      {
        name: "Principiantes",
        description: "Para quienes nunca han bailado. Empezamos desde cero con pasos básicos y ritmo.",
      },
      {
        name: "Intermedios",
        description: "Para quienes ya dominan lo básico y quieren mejorar figuras, conexión y musicalidad.",
      },
    ],
  },
  benefits: [
    "Mejora tu condición física de forma divertida",
    "Reduce el estrés y desconecta del día a día",
    "Conoce gente nueva y amplía tu círculo social",
    "Gana confianza y mejora tu expresión corporal",
    "Aprende una habilidad que disfrutarás toda la vida",
  ],
};

export type CityKey = keyof typeof cities;
