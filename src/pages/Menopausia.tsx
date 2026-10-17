import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Heart,
  Leaf,
  MessageCircle,
  MonitorSmartphone,
  PlayCircle,
  Salad,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import ani4 from '../assets/ani4.png';
import ani6 from '../assets/ani6.png';

const whatsappBase = 'https://wa.me/5493515557316';

const interestLink = `${whatsappBase}?text=${encodeURIComponent(
  'Hola Ana, quiero recibir información sobre el Programa Integral de Menopausia.'
)}`;

const clinicalLink = `${whatsappBase}?text=${encodeURIComponent(
  'Hola Ana, quiero consultar por un proceso psicológico individual para transitar la menopausia.'
)}`;

export default function Menopausia() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const perspectives = [
    { icon: Brain, title: 'Psicología', text: 'Emociones, identidad, vínculos y cambios en la manera de habitar esta etapa.' },
    { icon: Stethoscope, title: 'Ginecología', text: 'Información para comprender el climaterio, la salud sexual y los controles necesarios.' },
    { icon: Sparkles, title: 'Endocrinología', text: 'Una mirada clara sobre los cambios hormonales y las preguntas para la consulta médica.' },
    { icon: Salad, title: 'Nutrición', text: 'Hábitos posibles y sostenibles para acompañar el bienestar cotidiano.' },
    { icon: Heart, title: 'Fisioterapia', text: 'Movimiento, suelo pélvico, fuerza y cuidado corporal desde una perspectiva integral.' },
  ];

  const formats = [
    {
      icon: BookOpen,
      title: 'Ebook y materiales de consulta',
      text: 'Contenido ordenado para leer a tu ritmo, volver sobre cada tema y preparar preguntas para tus consultas profesionales.',
    },
    {
      icon: PlayCircle,
      title: 'Videos con profesionales',
      text: 'Clases organizadas por ejes, con explicaciones provenientes de distintas disciplinas y lenguaje accesible.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Aplicaciones interactivas',
      text: 'Herramientas para registrar cambios, ordenar información y convertir el contenido en acciones concretas.',
    },
  ];

  const faq = [
    {
      q: '¿El programa reemplaza una consulta médica o psicológica?',
      a: 'No. Es una propuesta educativa y de acompañamiento que ayuda a comprender la etapa y organizar decisiones informadas. No realiza diagnósticos ni reemplaza la atención médica, ginecológica, endocrinológica, nutricional, fisioterapéutica o psicológica individual.',
    },
    {
      q: '¿Puedo acceder aunque todavía tenga menstruaciones?',
      a: 'Sí. La transición puede comenzar antes de la última menstruación. El contenido incluye climaterio, perimenopausia, menopausia y posmenopausia, siempre desde una perspectiva educativa y no diagnóstica.',
    },
    {
      q: '¿Los materiales podrán adquirirse por separado?',
      a: 'Sí. La propuesta contempla el programa integral y recursos individuales para quienes necesiten comenzar por un tema o formato específico. La opción integral reunirá el recorrido completo y tendrá la mejor relación entre contenido y valor.',
    },
    {
      q: '¿Existe acompañamiento psicológico individual?',
      a: 'Sí. Además del programa educativo, Ana ofrece un proceso clínico individual para trabajar emociones, vínculos, identidad, ansiedad, duelos y otros cambios que pueden aparecer durante esta etapa.',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <SEOHead
        title="Programa Integral de Menopausia | Lic. Ana Paris"
        description="Ebook, videos y herramientas interactivas para comprender la perimenopausia y menopausia desde la psicología, ginecología, endocrinología, nutrición y fisioterapia."
        canonicalUrl="https://licenciadaanaparis.com/menopausia"
        keywords="programa menopausia, psicología menopausia, perimenopausia, climaterio, curso menopausia, ebook menopausia, Ana Paris"
      />

      <main>
        <section className="relative overflow-hidden bg-brand-bg-sage pb-20 pt-32">
          <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-brand-sage/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" />

          <div className="relative z-10">
            <Breadcrumbs items={[{ label: 'Menopausia' }]} />
            <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 items-center gap-12 px-6 pt-8 md:grid-cols-12">
              <motion.div
                className="md:col-span-7"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-sage/30 bg-brand-cream/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-sage-dark">
                  <Leaf className="h-4 w-4" />
                  El cuerpo que habito
                </span>
                <h1 className="mb-6 font-display text-5xl font-semibold leading-[1.05] text-brand-bg-dark sm:text-6xl">
                  Programa Integral de Menopausia
                </h1>
                <p className="mb-5 max-w-2xl font-body text-lg font-light leading-relaxed text-brand-text/90">
                  Un recorrido profesional y multidisciplinario para comprender los cambios de esta etapa, ordenar lo que te pasa y construir decisiones de autocuidado informadas, a tu ritmo y sin transitarla en soledad.
                </p>
                <p className="mb-8 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
                  Coordinado por la Lic. Ana Paris, con contenidos de psicología, ginecología, endocrinología, nutrición y fisioterapia.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#programa"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-sage-dark px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-md transition-all hover:scale-[1.02] hover:bg-brand-bg-dark"
                  >
                    Ver qué incluye
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={interestLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-sage px-7 py-4 text-xs font-semibold uppercase tracking-widest text-brand-sage-dark transition-all hover:bg-brand-cream"
                  >
                    Recibir información
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="md:col-span-5"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="relative mx-auto max-w-[360px]">
                  <div className="absolute -inset-3 -rotate-2 rounded-[120px_24px_24px_24px] border border-brand-sage/30" />
                  <img
                    src={ani6}
                    alt="Lic. Ana Paris, coordinadora del Programa Integral de Menopausia"
                    className="relative aspect-[4/5] w-full rounded-[120px_24px_24px_24px] object-cover shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-brand-bg py-20">
          <div className="mx-auto w-full max-w-[1000px] px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-accent">Una etapa, muchas dimensiones</span>
              <h2 className="mb-4 font-display text-4xl font-semibold text-brand-bg-dark">No es una sola hormona ni un único síntoma</h2>
              <p className="text-base font-light leading-relaxed text-brand-text-muted">
                La menopausia puede atravesar el cuerpo, el ánimo, el sueño, la sexualidad, los vínculos y la identidad. Por eso el programa reúne perspectivas que habitualmente aparecen separadas.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {perspectives.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="rounded-2xl border border-brand-sage/20 bg-brand-cream p-5 text-center shadow-sm"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-bg-sage text-brand-sage-dark">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-brand-bg-dark">{item.title}</h3>
                  <p className="text-xs font-light leading-relaxed text-brand-text-muted">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="programa" className="bg-brand-bg-dark py-20 text-brand-cream">
          <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <img
                src={ani4}
                alt="Muestra de una clase del programa El Cerebro Femenino en Transición"
                className="w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
              />
              <p className="mt-3 text-xs leading-relaxed text-brand-cream/60">Muestra de uno de los contenidos audiovisuales del programa.</p>
            </div>
            <div className="md:col-span-7">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-sage">Un recorrido para usar, no sólo mirar</span>
              <h2 className="mb-5 font-display text-4xl font-semibold">Ebook, videos y herramientas interactivas</h2>
              <p className="mb-8 font-light leading-relaxed text-brand-cream/80">
                Los contenidos estarán disponibles como programa completo y también como recursos individuales. La propuesta integral conecta cada eje para ofrecer una mirada más amplia y un recorrido ordenado.
              </p>

              <div className="space-y-4">
                {formats.map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-sage/15 text-brand-sage">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-display text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm font-light leading-relaxed text-brand-cream/70">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-bg-sage py-20">
          <div className="mx-auto w-full max-w-[1000px] px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-accent">Formas de acceso</span>
              <h2 className="mb-4 font-display text-4xl font-semibold text-brand-bg-dark">Elegí cómo comenzar</h2>
              <p className="font-light leading-relaxed text-brand-text-muted">
                La información de precios y disponibilidad se publicará al completar la configuración de los productos. Podés solicitar acceso prioritario desde ahora.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  name: 'Esencial',
                  badge: 'Recurso de entrada',
                  items: ['Ebook de menopausia', 'Una herramienta interactiva', 'Acceso a tu ritmo'],
                  featured: false,
                },
                {
                  name: 'Integral',
                  badge: 'Opción recomendada',
                  items: ['Todos los videos', 'Ebook y materiales', 'Aplicaciones interactivas', 'Recorrido completo'],
                  featured: true,
                },
                {
                  name: 'Acompañado',
                  badge: 'Con orientación grupal',
                  items: ['Programa integral', 'Encuentro de orientación', 'Espacio para preguntas'],
                  featured: false,
                },
              ].map((option) => (
                <div
                  key={option.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-7 ${option.featured ? 'border-brand-sage-dark bg-brand-cream shadow-xl md:-translate-y-3' : 'border-brand-sage/25 bg-brand-cream/80 shadow-sm'}`}
                >
                  {option.featured && <span className="absolute right-5 top-5 rounded-full bg-brand-sage-dark px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">Recomendado</span>}
                  <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-accent">{option.badge}</span>
                  <h3 className="mb-5 font-display text-3xl font-semibold text-brand-bg-dark">{option.name}</h3>
                  <ul className="mb-7 flex-grow space-y-3">
                    {option.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-brand-text/85">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-sage-dark" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={interestLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-all ${option.featured ? 'bg-brand-sage-dark text-white hover:bg-brand-bg-dark' : 'border border-brand-sage text-brand-sage-dark hover:bg-brand-bg-sage'}`}
                  >
                    Solicitar información
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-bg py-20">
          <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 gap-10 px-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-accent">También puede ser un proceso personal</span>
              <h2 className="mb-4 font-display text-4xl font-semibold text-brand-bg-dark">Acompañamiento psicológico individual durante la menopausia</h2>
              <p className="mb-6 font-light leading-relaxed text-brand-text-muted">
                Cuando los cambios de esta etapa se enlazan con ansiedad, duelos, vínculos, identidad, sexualidad o situaciones personales difíciles, el programa educativo puede complementarse con un proceso clínico individual y confidencial.
              </p>
              <a
                href={clinicalLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-sage-dark px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand-bg-dark"
              >
                Consultar por atención individual
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-2xl border border-brand-sage/20 bg-brand-bg-sage p-7 md:col-span-5">
              <h3 className="mb-4 font-display text-2xl font-semibold text-brand-bg-dark">Un espacio para trabajar</h3>
              <ul className="space-y-3">
                {['Cambios emocionales y ansiedad', 'Duelo por etapas que terminan', 'Vínculos, pareja y sexualidad', 'Autoestima, identidad y proyectos', 'Separaciones y otras transiciones vitales'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-text/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-sage-dark" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-brand-cream py-20">
          <div className="mx-auto w-full max-w-[800px] px-6">
            <div className="mb-10 text-center">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-accent">Preguntas frecuentes</span>
              <h2 className="font-display text-4xl font-semibold text-brand-bg-dark">Antes de comenzar</h2>
            </div>
            <div className="space-y-4">
              {faq.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-brand-sage/20 bg-brand-bg p-5 open:border-brand-sage-dark/40">
                  <summary className="cursor-pointer list-none pr-4 font-semibold text-brand-bg-dark marker:hidden">{item.q}</summary>
                  <p className="mt-3 text-sm font-light leading-relaxed text-brand-text-muted">{item.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-brand-accent/20 bg-brand-bg-sage p-6 text-center">
              <p className="text-xs leading-relaxed text-brand-text-muted">
                Este programa tiene fines educativos y de acompañamiento. No ofrece diagnósticos, tratamientos médicos ni resultados clínicos garantizados. Ante síntomas o dudas de salud, corresponde consultar con profesionales habilitados.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-brand-bg-dark py-16">
          <div className="mx-auto w-full max-w-[1000px] px-6">
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-brand-sage/30 bg-white/5 px-8 py-12 text-center backdrop-blur-sm md:flex-row md:text-left">
              <div className="flex-1">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-sage">
                  Complementá el programa
                </span>
                <h2 className="mb-3 font-display text-3xl font-semibold text-brand-cream">
                  Talleres de Menopausia
                </h2>
                <p className="font-light leading-relaxed text-brand-cream/70">
                  Encuentros grupales en vivo para profundizar sobre los cambios de esta etapa con acompañamiento directo de la Lic. Ana Paris.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  to="/talleres/menopausia"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-sage-dark px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-md transition-all hover:scale-[1.02] hover:bg-brand-sage"
                >
                  Ver talleres
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
