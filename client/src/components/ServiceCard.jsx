import React from 'react';

const ServiceCard = ({ icon, title, description, variant = 'page', className = '' }) => {
  if (variant === 'home') {
    return (
      <div className={`bg-white p-10 rounded-[20px] ambient-glow border border-text-muted/10 transition-transform hover:-translate-y-2 group ${className}`}>
        <div className="w-14 h-14 bg-secondary-container/30 rounded-[12px] flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
          {icon}
        </div>
        <h3 className="font-headline-md text-headline-md text-2xl mb-4">{title}</h3>
        <p className="text-on-surface-variant leading-relaxed">{description}</p>
      </div>
    );
  }

  // default variant="page"
  return (
    <div className={`service-card bg-white p-10 rounded-[20px] border border-outline-variant/10 shadow-sm shadow-secondary/5 ${className}`}>
      <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-8">
        {icon}
      </div>
      <h3 className="font-headline-md text-headline-md mb-4">{title}</h3>
      <p className="text-on-surface-variant font-body-md leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
