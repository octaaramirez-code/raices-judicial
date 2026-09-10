/* ─────────────────────────────────────────────────────────────────────────────
   EDIT THIS FILE. Todo el sitio sale de acá.

   Buscá "COMPLETAR" para encontrar los campos que todavía faltan definir
   (email de contacto, URL del formulario seguro, nombres del equipo, etc.)
   ───────────────────────────────────────────────────────────────────────────── */

export const profile = {
  name: 'RAÍCES',
  fullName: 'Red de Acompañamiento Integral contra el Acoso en Sede Judicial',
  tagline: 'Espacio de contención, asesoramiento y red de resguardo para integrantes del Poder Judicial.',

  logo: '/logo.png',

  // COMPLETAR: URL final una vez deployado en Vercel.
  siteUrl: 'https://raices-judicial.vercel.app',
  title: 'RAÍCES — Red de Acompañamiento Integral contra el Acoso en Sede Judicial',
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
  'Brindar un espacio seguro, confidencial y multidisciplinario de contención, asesoramiento y acompañamiento integral a integrantes del Poder Judicial que atraviesan situaciones de acoso y violencia laboral. Promovemos la protección de sus derechos fundamentales a través del rigor técnico-jurídico, la perspectiva de género y la articulación de estrategias colectivas que garanticen la integridad, la dignidad y el ejercicio justo de la función judicial.'

export const vision =
  'Ser una red de referencia e impacto dentro del ámbito judicial, reconocida por su independencia, transparencia y excelencia en la erradicación del acoso laboral. Aspiramos a consolidar entornos de trabajo libres de violencia y arbitrariedad, impulsando transformaciones culturales e institucionales que fortalezcan la justicia interna, la equidad de género y el debido resguardo de quienes integran el sistema de justicia.'

export const independencia =
  'RAÍCES no depende jerárquicamente de los órganos de gobierno del Poder Judicial. Esta independencia es la garantía de un acompañamiento imparcial, confidencial y libre de injerencias.'

/* ── Quiénes somos ────────────────────────────────────────────────────────────
   COMPLETAR: cuando definan si publican nombres y fotos, reemplazar este
   array por el detalle real del equipo. Por ahora son roles genéricos. */
export const nosotrosIntro =
  'RAÍCES está integrada por un equipo multidisciplinario con trayectoria en el ámbito judicial. Por motivos de seguridad y a pedido de quienes lo requieran, la identidad de algunas integrantes se mantiene resguardada — lo que no resguardamos es el compromiso técnico y humano con cada consulta.'

export const equipo = [
  { rol: 'Magistradas', d: 'Perspectiva institucional y jurisdiccional sobre el funcionamiento interno del Poder Judicial.' },
  { rol: 'Abogadas', d: 'Asesoramiento legal general y acompañamiento en la articulación de estrategias.' },
  { rol: 'Abogadas penalistas', d: 'Evaluación de encuadres penales cuando la situación lo requiere.' },
  { rol: 'Psicólogas', d: 'Contención emocional y acompañamiento terapéutico durante el proceso.' },
]

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
  { t: 'Marcos normativos', d: 'Adhesión a instrumentos de derechos humanos y perspectiva de género, incluyendo el Convenio 190 de la OIT.' },
]

/* ── Protocolos y recursos ───────────────────────────────────────────────
   COMPLETAR: reemplazar "href" por el link real cuando suban cada documento
   (podés subir PDFs a /public y apuntar a "/nombre-archivo.pdf"). */
export const recursos = [
  { t: 'Modelo de nota de solicitud de acompañamiento', d: 'Formato de referencia para iniciar una consulta por escrito.', href: '' },
  { t: 'Convenio 190 de la OIT', d: 'Convenio sobre la violencia y el acoso en el mundo del trabajo.', href: '' },
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
