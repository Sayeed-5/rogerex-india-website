import React from 'react';

const PageHero = ({ subtitle, title, highlightText, description }) => {
  return (
    <section className="py-section-padding-lg px-8 max-w-container-max mx-auto text-center">
      {subtitle && <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] mb-6 block">{subtitle}</span>}
      <h1 className="font-display-lg text-display-lg mb-8 text-on-surface max-w-4xl mx-auto">
        {title} {highlightText && <span className="text-primary">{highlightText}</span>}
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
        {description}
      </p>
    </section>
  );
};

export default PageHero;
