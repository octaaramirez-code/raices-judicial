/* ─────────────────────────────────────────────────────────────────────────────
   EDIT THIS FILE. Todo el sitio sale de acá.

   Buscá "COMPLETAR" para encontrar los campos que todavía faltan definir
   (email de contacto, URL del formulario seguro, nombres del equipo, etc.)
   ───────────────────────────────────────────────────────────────────────────── */

export const profile = {
  name: 'RAÍCES',
  fullName: 'Red Argentina de Acompañamiento Integral contra el Acoso en Sede Judicial',
  tagline: 'Espacio de contención, asesoramiento y red de resguardo para integrantes del Poder Judicial.',

  // Isologo (escudo + balanza + raíces) con fondo transparente, para el header y el hero.
  logo: '/logo-mark.png',
  // Logo completo con nombre y bajada, para redes (Open Graph).
  logoFull: '/logo.png',

  // COMPLETAR: URL final una vez deployado en Vercel.
  siteUrl: 'https://raices-judicial.vercel.app',
  title: 'RAÍCES — Red Argentina de Acompañamiento Integral contra el Acoso en Sede Judicial',
  description:
    'Espacio seguro, confidencial y multidisciplinario de contención, asesoramiento y acompañamiento integral a integrantes del Poder Judicial que atraviesan situaciones de acoso y violencia laboral.',
}

/* Botón de salida rápida: redirige a un sitio neutro si alguien necesita
   cerrar la página de inmediato (ej. equipo institucional o monitoreado). */
export const quickExit = {
  label: 'Salida rápida',
  // COMPLETAR (opcional): podés cambiar el destino por otro sitio neutro.
  href: 'https://www.google.com',
}

export const mission =
  'Brindar un espacio seguro, confidencial e interdisciplinario de contención, orientación y acompañamiento integral a quienes integran el Poder Judicial y atraviesan situaciones de acoso, violencia laboral o institucional. Promover la protección de sus derechos fundamentales mediante el rigor técnico-jurídico, la perspectiva de género y los estándares nacionales e internacionales de derechos humanos, impulsando estrategias individuales y colectivas que contribuyan a garantizar la dignidad, la integridad y el ejercicio justo de la función judicial.'

export const vision =
  'Consolidarnos como una red de referencia en el ámbito judicial, reconocida por su independencia, transparencia y compromiso con la erradicación de la violencia institucional y el acoso laboral. Promover entornos laborales libres de violencia y arbitrariedad, impulsando transformaciones institucionales basadas en la justicia, la equidad de género y el respeto por la dignidad humana. Proyectarnos a nivel nacional e internacional, conforme a los estándares de derechos humanos y mediante la articulación con redes y organismos especializados.'

export const independencia =
  'RAÍCES no depende jerárquicamente de los órganos de gobierno del Poder Judicial. Esta independencia es la garantía de un acompañamiento imparcial, confidencial y libre de injerencias.'

/* ── Quiénes somos ────────────────────────────────────────────────────────────
   COMPLETAR: cuando definan si publican nombres y fotos, se puede sumar el
   detalle real del equipo. Por ahora se presentan por rol. */
export const nosotrosIntro =
  'Somos un grupo de funcionarias, exfuncionarias y trabajadores del Poder Judicial, con amplia trayectoria y experiencia en los ámbitos judicial y ejecutivo, y especialización en derechos humanos, género, violencia por motivos de género, violencia institucional y violencia laboral. Contamos con profesionales especializados en salud mental y discapacidad, y promovemos un abordaje interdisciplinario que contempla la perspectiva de género, la inclusión, la accesibilidad y la protección integral de los derechos. Nuestro compromiso es acompañar a quienes integran el sistema judicial, atendiendo también las consecuencias que las distintas formas de violencia pueden generar en su salud mental, bienestar e integridad psicosocial, desde un enfoque respetuoso de la dignidad humana y de los estándares nacionales e internacionales de derechos humanos.'

export const magistradas = {
  rol: 'Magistradas',
  d: 'Aportan una perspectiva institucional y jurisdiccional sobre la organización, el funcionamiento interno y las dinámicas propias del Poder Judicial, contribuyendo a la comprensión de sus estructuras, prácticas y desafíos institucionales.',
}

export const equiposInterdisciplinarios = {
  rol: 'Equipos interdisciplinarios',
  d: 'Integrados por abogadas, psicólogas y psicólogas sociales.',
  miembros: [
    {
      rol: 'Abogadas',
      d: 'Asesoramiento y orientación jurídica personalizada, situada y conforme al marco normativo y los estándares de protección de derechos vigentes en cada jurisdicción.',
    },
    {
      rol: 'Psicólogas',
      d: 'Contención y acompañamiento psicológico, evaluaciones de riesgo y valoración del impacto de las situaciones de violencia laboral, institucional y mobbing (acoso psicológico laboral) en la salud mental. Identificación de indicadores de afectación emocional y psicológica, contención, orientación y derivación especializada cuando corresponda.',
    },
    {
      rol: 'Psicólogas sociales',
      d: 'Acompañamiento psicosocial, análisis de las dinámicas vinculares, grupales e institucionales, identificación de factores de vulnerabilidad y fortalecimiento de redes de apoyo. Diseño de estrategias de intervención de los vínculos y la integración social.',
    },
  ],
}

/* ── Canal de denuncias / solicitud de ayuda ─────────────────────────────── */
export const ayudaIntro =
  'Este es un espacio confidencial. Antes de completar el formulario, te recomendamos leer cómo manejamos la información y, si estás en un dispositivo institucional o compartido, tener presente el botón de salida rápida.'

export const confidencialidad = [
  'La información que compartas es tratada de forma confidencial por el equipo de RAÍCES y no se comparte con los órganos de gobierno del Poder Judicial ni con terceros sin tu consentimiento expreso.',
  'Podés optar por un primer contacto anónimo para evaluar tu situación antes de decidir si avanzás con una identificación formal.',
  'El acompañamiento no reemplaza ni condiciona ningún proceso administrativo o judicial que decidas iniciar por tu cuenta.',
]

/* COMPLETAR: pegar acá la URL del formulario externo (Google Forms, Typeform, etc.)
   embebido de forma segura. Mientras esté vacío, el sitio muestra un estado
   de "formulario en configuración" con un email de contacto como alternativa. */
export const formUrl = '' // ej: 'https://docs.google.com/forms/d/e/XXXXXXX/viewform?embedded=true'

// COMPLETAR: email de contacto alternativo mientras se configura el formulario.
export const contactEmail = ''

/* ── Garantías institucionales / seguridad ───────────────────────────────── */
export const garantias = [
  { t: 'Conexión segura', d: 'El sitio y el formulario funcionan bajo HTTPS, con la información protegida en tránsito.' },
  { t: 'Botón de salida rápida', d: 'Disponible en todo momento para cerrar la página de forma inmediata.' },
  { t: 'Independencia jerárquica', d: 'RAÍCES no depende de los órganos de gobierno judicial, lo que garantiza imparcialidad.' },
  {
    t: 'Marco normativo',
    d: 'Fundamentada en la Constitución Nacional, los tratados internacionales de derechos humanos y la normativa nacional, provincial y específica de cada Poder Judicial. Comprende leyes orgánicas, reglamentos, acordadas y protocolos institucionales vinculados con la protección de derechos, la prevención de la violencia laboral e institucional, la perspectiva de género, la igualdad y la discapacidad. Asimismo, adoptamos como referencia los estándares internacionales establecidos por la CEDAW, la Convención de Belém do Pará, la Convención sobre los Derechos de las Personas con Discapacidad y el Convenio 190 de la OIT.',
    wide: true,
  },
]

/* ── Recursos ────────────────────────────────────────────────────────────
   COMPLETAR: reemplazar "href" por el link real cuando suban cada documento
   (podés subir PDFs a /public y apuntar a "/nombre-archivo.pdf"). */
export const recursos = [
  { t: 'Modelo de nota de solicitud de acompañamiento', d: 'Formato de referencia para iniciar una consulta por escrito.', href: '' },
  // COMPLETAR: confirmar la descripción del Pacto de confidencialidad.
  { t: 'Pacto de confidencialidad', d: 'Compromiso de reserva y confidencialidad sobre la información compartida por quienes consultan.', href: '' },
  { t: 'Normativa aplicable', d: 'Compilación de leyes y reglamentos vigentes sobre acoso laboral en el Poder Judicial.', href: '' },
  { t: 'Jurisprudencia relevante', d: 'Antecedentes y fallos de referencia en casos de acoso y violencia laboral.', href: '' },
]

/* ── Preguntas frecuentes ─────────────────────────────────────────────────
   Contenido general de referencia — recomendamos que el equipo jurídico de
   RAÍCES lo revise antes de publicarlo, ya que puede orientar decisiones
   reales de las personas que consultan. */
export const faq = [
  {
    q: '¿Qué se considera acoso laboral (mobbing)?',
    a: 'En términos generales, el acoso laboral es toda conducta reiterada y sistemática, ejercida por una o varias personas sobre otra, que tenga por efecto intimidar, degradar, humillar o aislar a quien la sufre, afectando su dignidad y su desempeño. Puede manifestarse de forma directa (agresiones, descalificaciones) o indirecta (aislamiento, sobrecarga o vaciamiento de funciones, exclusión de información).',
  },
  {
    q: '¿Cómo puedo empezar a documentar lo que me está pasando?',
    a: 'Registrar fechas, lugares, personas presentes y una descripción breve de cada episodio apenas ocurre ayuda mucho más que reconstruirlo después. Conviene también guardar copias de comunicaciones (emails, mensajes, memos) y, si existen, identificar testigos. En el acompañamiento te podemos ayudar a ordenar esta documentación.',
  },
  {
    q: '¿Qué pasos contempla el acompañamiento de RAÍCES?',
    a: 'Un primer contacto para escuchar la situación (puede ser anónimo), una evaluación conjunta de las opciones disponibles —incluida la posibilidad de no avanzar con ninguna acción formal—, y acompañamiento técnico-jurídico y psicológico durante el proceso que decidas seguir.',
  },
  {
    q: '¿Necesito iniciar una denuncia formal para pedir ayuda?',
    a: 'No. Podés acercarte a RAÍCES simplemente para conversar tu situación y evaluar alternativas, sin ninguna obligación de iniciar un proceso administrativo o judicial.',
  },
  {
    q: '¿Quiénes pueden acceder a este espacio?',
    a: 'Integrantes del Poder Judicial que atraviesan o atravesaron situaciones de acoso o violencia laboral en el ámbito de su función.',
  },
]

export const footerNote =
  'RAÍCES es un espacio independiente de contención y acompañamiento. No sustituye ninguna instancia administrativa, judicial o de salud mental que decidas iniciar por tu cuenta.'
