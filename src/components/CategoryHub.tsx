import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import SEOHead from './SEOHead';

interface Category {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  path: string;
  cta: string;
}

interface CategoryHubProps {
  eyebrow: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  keywords: string;
  breadcrumb: string;
  categories: Category[];
}

export default function CategoryHub({ eyebrow, title, description, seoTitle, seoDescription, canonicalUrl, keywords, breadcrumb, categories }: CategoryHubProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-bg pb-24 pt-28 text-brand-text">
      <SEOHead title={seoTitle} description={seoDescription} canonicalUrl={canonicalUrl} keywords={keywords} />
      <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-brand-bg-sage opacity-70 blur-3xl" />
      <div className="absolute -left-20 bottom-16 h-80 w-80 rounded-full bg-brand-cream opacity-70 blur-3xl" />

      <Breadcrumbs items={[{ label: breadcrumb }]} />

      <div className="relative z-10 mx-auto w-full max-w-[1000px] px-6">
        <motion.div className="mx-auto mb-14 max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand-accent">{eyebrow}</span>
          <h1 className="mb-5 font-display text-5xl font-semibold leading-tight text-brand-bg-dark sm:text-6xl">{title}</h1>
          <p className="mx-auto max-w-2xl font-light leading-relaxed text-brand-text-muted">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.article key={category.path} className="group overflow-hidden rounded-2xl border border-brand-sage/20 bg-brand-cream shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: index * 0.12 }}>
              <div className="aspect-[16/9] overflow-hidden bg-brand-bg-sage">
                <img src={category.image} alt={category.imageAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-7">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-brand-accent">{category.eyebrow}</span>
                <h2 className="mb-3 font-display text-3xl font-semibold text-brand-bg-dark">{category.title}</h2>
                <p className="mb-6 text-sm font-light leading-relaxed text-brand-text-muted">{category.description}</p>
                <Link to={category.path} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-sage-dark transition-colors hover:text-brand-accent">
                  {category.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-sage/20 bg-brand-bg-sage p-6 text-center">
          <p className="text-sm font-light leading-relaxed text-brand-text-muted">
            Esta organización permite incorporar nuevas temáticas y colecciones en el futuro sin cambiar la estructura principal del sitio.
          </p>
        </div>
      </div>
    </div>
  );
}
