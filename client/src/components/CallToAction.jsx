import React from 'react';

const CallToAction = ({ 
  title, 
  description, 
  buttonNode, 
  sectionClassName = "py-section-padding-lg px-8", 
  containerClassName = "max-w-container-max mx-auto bg-inverse-surface rounded-[32px] p-12 md:p-24 relative overflow-hidden text-center",
  hasAnimatedBg = true 
}) => {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className="relative z-10">
          <h2 className="font-headline-lg text-headline-lg text-white mb-6">{title}</h2>
          <p className="font-body-lg text-body-lg text-surface-variant mb-12 max-w-2xl mx-auto">
            {description}
          </p>
          {buttonNode}
        </div>
        {hasAnimatedBg && (
          <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
        )}
      </div>
    </section>
  );
};

export default CallToAction;
