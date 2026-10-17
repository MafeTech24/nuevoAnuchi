import React from 'react';
import CategoryHub from '../components/CategoryHub';
import portada from '../assets/portada.png';
import ani4 from '../assets/ani4.png';

export default function RecursosHub() {
  return (
    <CategoryHub
      eyebrow="Biblioteca digital"
      title="Recursos para diferentes momentos y necesidades"
      description="Ebooks, audios, videos, guías y herramientas interactivas organizados por temática para acceder fácilmente al contenido que estás buscando."
      seoTitle="Recursos Digitales de Adicciones y Menopausia | Lic. Ana Paris"
      seoDescription="Biblioteca digital de la Lic. Ana Paris: ebooks, audiolibros, guías y herramientas sobre adicciones familiares y menopausia."
      canonicalUrl="https://licenciadaanaparis.com/recursos"
      keywords="recursos psicología, ebook adicciones, audiolibro adicciones, ebook menopausia, recursos menopausia"
      breadcrumb="Recursos"
      categories={[
        {
          eyebrow: 'Familias y adicciones',
          title: 'Recursos de Adicciones',
          description: 'Ebook, audiolibro, guía práctica de respuestas y herramientas de mindfulness aplicadas a situaciones familiares.',
          image: portada,
          imageAlt: 'Portada del ebook Intervención familiar en adicciones de la Lic. Ana Paris',
          path: '/recursos/adicciones',
          cta: 'Ver recursos de adicciones',
        },
        {
          eyebrow: 'Menopausia integral',
          title: 'Recursos de Menopausia',
          description: 'Ebook, videos profesionales, materiales descargables y aplicaciones interactivas para transitar esta etapa con información.',
          image: ani4,
          imageAlt: 'Contenido audiovisual sobre el cerebro femenino durante la transición a la menopausia',
          path: '/recursos/menopausia',
          cta: 'Ver recursos de menopausia',
        },
      ]}
    />
  );
}
