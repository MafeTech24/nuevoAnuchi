import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, CheckCircle2, MessageCircle, MonitorSmartphone, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import SEOHead from '../components/SEOHead';
import ani6 from '../assets/ani6.png';

const ebookLink = 'https://hotmart.com/es/marketplace/productos/renacer-menopausia/T107650659T';
const audiolibro = 'https://hotmart.com/es/marketplace/productos/hagsxd-audiolibro-renacer-menopausia-nido-vacio-y-proposito-9r5fd/K107658199A';
const informationLink = `https://wa.me/5493515557316?text=${encodeURIComponent(
  'Hola Ana, quiero recibir información sobre los recursos de menopausia.'
)}`;

const resources = [
  {
    icon: BookOpen,
    eyebrow: 'Guía práctica digital',
    title: 'Renacer en la Menopausia',
    text: '¿Sentís que los cambios hormonales están afectando tu energía, descanso o estado de ánimo? Una guía integral para transitar la perimenopausia y la menopausia con claridad, bienestar y confianza.',
    items: [
      'Comprensión hormonal: qué ocurre en tu cuerpo, sin mitos ni tabúes',
      'Alivio de síntomas: sofocos, insomnio, cambios de humor y fatiga',
      'Nutrición y hábitos para tu salud ósea, cardiovascular y metabólica',
      'Bienestar emocional: gestión del estrés y reconexión con tu cuerpo',
    ],
    link: ebookLink,
    linkLabel: 'Obtener ebook',
  },
  {
    icon: PlayCircle,
    eyebrow: 'Experiencia de audio',
    title: 'Renacer: Menopausia, Nido Vacío y Propósito',
    text: 'Una guía sonora cercana y transformadora para convertir el vacío, la incertidumbre y los cambios de esta etapa en tu mayor oportunidad para volver a elegirte.',
    items: [
      'Comprensión y aceptación física: transitar lo hormonal con serenidad',
      'El duelo del nido vacío: sanar la nostalgia y redescubrir tu identidad',
      'Reinvención y propósito: clarificar deseos y construir un nuevo rumbo',
      'Formato ideal para caminatas, descanso o rutinas de autocuidado',
    ],
    link: audiolibro,
    linkLabel: 'Obtener audiolibro',
  },
  {
    icon: MonitorSmartphone,
    eyebrow: 'Próximamente',
    title: 'Herramientas interactivas',
    text: 'Aplicaciones y ejercicios para ordenar información, observar cambios y convertir lo aprendido en acciones posibles.',
    items: [
      'Registros personales',
      'Ejercicios guiados',
      'Herramientas de autocuidado',
    ],
    link: null,
    linkLabel: 'Próximamente',
  },
];


export default function RecursosMenopausia() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg pb-24 pt-28 text-brand-text">
      <SEOHead
        title="Recursos de Menopausia: Ebook, Videos y Herramientas | Lic. Ana Paris"
        description="Ebook, videos profesionales y herramientas interactivas para comprender y transitar la perimenopausia y menopausia con información integral."
        canonicalUrl="https://licenciadaanaparis.com/recursos/menopausia"
        keywords="ebook menopausia, videos menopausia, herramientas menopausia, perimenopausia, recursos climaterio, Ana Paris"
      />

      <Breadcrumbs items={[{ label: 'Recursos', path: '/recursos' }, { label: 'Menopausia' }]} />

      <main>
        <section className="relative overflow-hidden pb-20 pt-6">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand-bg-sage blur-3xl" />
          <div className="relative z-10 mx-auto grid w-full max-w-[1000px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12">
            <motion.div className="md:col-span-7" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-brand-accent">Biblioteca digital · Menopausia</span>
              <h1 className="mb-6 font-display text-5xl font-semibold leading-tight text-brand-bg-dark sm:text-6xl">Recursos para comprender y transitar esta etapa</h1>
              <p className="mb-5 max-w-2xl text-lg font-light leading-relaxed text-brand-text/90">
                Materiales en distintos formatos para informarte, ordenar lo que te pasa y acompañar decisiones de autocuidado a tu propio ritmo.
              </p>
              <p className="mb-8 max-w-2xl text-sm leading-relaxed text-brand-text-muted">
                Los recursos podrán adquirirse de manera individual y también como parte del Programa Integral de Menopausia. Los enlaces de compra se incorporarán cuando estén disponibles.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={informationLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-sage-dark px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand-bg-dark">
                  Avisarme cuando estén disponibles
                  <MessageCircle className="h-4 w-4" />
                </a>
                <Link to="/menopausia" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-sage px-7 py-4 text-xs font-semibold uppercase tracking-widest text-brand-sage-dark transition-all hover:bg-brand-bg-sage">
                  Ver programa integral
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div className="md:col-span-5" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
              <div className="relative mx-auto max-w-[360px]">
                <div className="absolute -inset-3 rotate-2 rounded-[24px_120px_24px_24px] border border-brand-sage/30" />
                <img src={ani6} alt="Lic. Ana Paris, creadora de recursos integrales sobre menopausia" className="relative aspect-[4/5] w-full rounded-[24px_120px_24px_24px] object-cover shadow-xl" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-brand-bg-sage py-20">
          <div className="mx-auto w-full max-w-[1000px] px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-accent">Recursos disponibles</span>
              <h2 className="mb-4 font-display text-4xl font-semibold text-brand-bg-dark">Elegí el formato que mejor se adapte a vos</h2>
              <p className="font-light leading-relaxed text-brand-text-muted">El ebook y el audiolibro ya están disponibles. Las herramientas interactivas se publicarán próximamente.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {resources.map((resource, index) => (
                <motion.article key={resource.title} className="flex h-full flex-col rounded-2xl border border-brand-sage/20 bg-brand-cream p-7 shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.08 }}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-bg-sage text-brand-sage-dark"><resource.icon className="h-6 w-6" /></div>
                  <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-accent">{resource.eyebrow}</span>
                  <h3 className="mb-3 font-display text-3xl font-semibold text-brand-bg-dark">{resource.title}</h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-brand-text-muted">{resource.text}</p>
                  <ul className="mb-6 space-y-3">
                    {resource.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-brand-text/85">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-sage-dark" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    {resource.link ? (
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-sage-dark px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand-bg-dark hover:scale-[1.02]"
                      >
                        {resource.linkLabel}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center rounded-full border border-brand-sage/30 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-brand-text-muted">
                        {resource.linkLabel}
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1000px] px-6 py-20">
          <div className="rounded-2xl border border-brand-sage/20 bg-brand-bg-dark p-8 text-center text-brand-cream shadow-xl sm:p-12">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-sage">Programa completo o materiales separados</span>
            <h2 className="mb-4 font-display text-4xl font-semibold">Una propuesta flexible para empezar donde lo necesites</h2>
            <p className="mx-auto mb-7 max-w-2xl font-light leading-relaxed text-brand-cream/75">
              Podrás acceder al recorrido integral o elegir recursos específicos. Esta página mostrará cada opción, su alcance y el enlace de compra cuando se complete la publicación.
            </p>
            <a href={informationLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand-sage-dark">
              Solicitar información
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
