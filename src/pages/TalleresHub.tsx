import React from 'react';
import CategoryHub from '../components/CategoryHub';
import ani3 from '../assets/ani3.png';
import ani4 from '../assets/ani4.png';

export default function TalleresHub() {
  return (
    <CategoryHub
      eyebrow="Talleres y programas"
      title="Elegí la temática que necesitás trabajar"
      description="Los talleres están organizados por áreas para que cada persona encuentre con claridad los encuentros, programas y propuestas que corresponden a su situación."
      seoTitle="Talleres de Adicciones y Menopausia | Lic. Ana Paris"
      seoDescription="Talleres y programas de la Lic. Ana Paris organizados por temática: acompañamiento a familiares en adicciones y propuestas integrales sobre menopausia."
      canonicalUrl="https://licenciadaanaparis.com/talleres"
      keywords="talleres psicología Córdoba, talleres adicciones familias, talleres menopausia, Ana Paris programas"
      breadcrumb="Talleres"
      categories={[
        {
          eyebrow: 'Familias y vínculos',
          title: 'Talleres de Adicciones',
          description: 'Programas grupales y acompañamientos focalizados para familiares que atraviesan el consumo problemático de un ser querido.',
          image: ani3,
          imageAlt: 'Lic. Ana Paris, coordinadora de talleres para familiares atravesados por adicciones',
          path: '/talleres/adicciones',
          cta: 'Ver talleres de adicciones',
        },
        {
          eyebrow: 'El cuerpo que habito',
          title: 'Talleres de Menopausia',
          description: 'Encuentros interdisciplinarios sobre cuerpo, emociones, hormonas, nutrición, sexualidad y suelo pélvico.',
          image: ani4,
          imageAlt: 'Clase El Cerebro Femenino en Transición del programa de menopausia',
          path: '/talleres/menopausia',
          cta: 'Ver talleres de menopausia',
        },
      ]}
    />
  );
}
