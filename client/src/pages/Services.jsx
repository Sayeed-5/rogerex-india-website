import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Layers, Globe, Smartphone, Palette, Bot, Cloud, Plug, Briefcase, Wrench } from 'lucide-react';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <>
      
<main>
{/*  Hero Section  */}
<PageHero 
  subtitle="OUR EXPERTISE"
  title="Comprehensive IT Solutions for the"
  highlightText="Digital Age"
  description="Transforming ideas into reliable technology solutions through innovation, quality, and technical precision."
/>
{/*  Services Grid Section  */}
<section className="py-section-padding-lg bg-surface px-8">
<div className="max-w-container-max mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/*  Service 1: Software Development  */}
<ServiceCard 
  icon={<Code className="w-6 h-6 text-current" />}
  title="Software Development"
  description="Custom-built enterprise software designed to streamline operations and drive business efficiency at scale."
/>
{/*  Service 2: Full Stack Development  */}
<ServiceCard 
  icon={<Layers className="w-6 h-6 text-current" />}
  title="Full Stack Development"
  description="End-to-end development covering both front-end aesthetics and robust back-end architecture for seamless performance."
/>
{/*  Service 3: Website Development  */}
<ServiceCard 
  icon={<Globe className="w-6 h-6 text-current" />}
  title="Website Development"
  description="Responsive, high-performance websites that blend cutting-edge design with powerful functionality to engage users."
/>
{/*  Service 4: Mobile App Development  */}
<ServiceCard 
  icon={<Smartphone className="w-6 h-6 text-current" />}
  title="Mobile App Development"
  description="Native and cross-platform mobile applications that provide intuitive user experiences on iOS and Android devices."
/>
{/*  Service 5: UI/UX Design  */}
<ServiceCard 
  icon={<Palette className="w-6 h-6 text-current" />}
  title="UI/UX Design"
  description="User-centric design strategies that prioritize usability and visual delight to create meaningful digital interactions."
/>
{/*  Service 6: AI & Automation  */}
<ServiceCard 
  icon={<Bot className="w-6 h-6 text-current" />}
  title="AI & Automation"
  description="Intelligent systems and automated workflows that leverage machine learning to optimize productivity and data insights."
/>
{/*  Service 7: Cloud Solutions  */}
<ServiceCard 
  icon={<Cloud className="w-6 h-6 text-current" />}
  title="Cloud Solutions"
  description="Scalable cloud infrastructure and migration services ensuring high availability, security, and global accessibility."
/>
{/*  Service 8: API Integration  */}
<ServiceCard 
  icon={<Plug className="w-6 h-6 text-current" />}
  title="API Integration"
  description="Connecting diverse platforms through robust APIs to ensure data synchronization and unified digital ecosystems."
/>
{/*  Service 9: IT Consulting  */}
<ServiceCard 
  icon={<Briefcase className="w-6 h-6 text-current" />}
  title="IT Consulting"
  description="Strategic guidance on technology stacks, digital transformation, and future-ready IT roadmaps for growth."
/>
{/*  Service 10: Maintenance & Support  */}
<ServiceCard 
  className="lg:col-span-1"
  icon={<Wrench className="w-6 h-6 text-current" />}
  title="Maintenance & Support"
  description="Continuous monitoring, updates, and dedicated technical support to keep your digital assets running at peak performance."
/>
</div>
</div>
</section>
{/*  Process Section  */}
<section className="py-section-padding-lg bg-background-bone px-8">
<div className="max-w-container-max mx-auto">
<div className="mb-20 text-center">
<span className="font-label-caps text-label-caps text-primary tracking-[0.2em] mb-4 block">OUR APPROACH</span>
<h2 className="font-headline-lg text-headline-lg">The Way We Work</h2>
</div>
<div className="relative">
{/*  Progress Line (Desktop)  */}
<div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-outline-variant/20 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative z-10">
{/*  Step 1  */}
<div className="bg-white p-8 rounded-[20px] border border-outline-variant/10 shadow-sm">
<div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold mb-6 mx-auto lg:mx-0">01</div>
<h4 className="font-headline-md text-headline-md mb-3">Discovery</h4>
<p className="text-on-surface-variant">We dive deep into your requirements, business goals, and user needs to create a strategic project foundation.</p>
</div>
{/*  Step 2  */}
<div className="bg-white p-8 rounded-[20px] border border-outline-variant/10 shadow-sm">
<div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold mb-6 mx-auto lg:mx-0">02</div>
<h4 className="font-headline-md text-headline-md mb-3">Design</h4>
<p className="text-on-surface-variant">Crafting intuitive user interfaces and architecting robust systems that prioritize performance and aesthetics.</p>
</div>
{/*  Step 3  */}
<div className="bg-white p-8 rounded-[20px] border border-outline-variant/10 shadow-sm">
<div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold mb-6 mx-auto lg:mx-0">03</div>
<h4 className="font-headline-md text-headline-md mb-3">Development</h4>
<p className="text-on-surface-variant">Agile engineering where we turn designs into functional, high-quality digital products with clean, scalable code.</p>
</div>
{/*  Step 4  */}
<div className="bg-white p-8 rounded-[20px] border border-outline-variant/10 shadow-sm">
<div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold mb-6 mx-auto lg:mx-0">04</div>
<h4 className="font-headline-md text-headline-md mb-3">Launch</h4>
<p className="text-on-surface-variant">Rigorous testing followed by seamless deployment and continuous monitoring to ensure a successful release.</p>
</div>
</div>
</div>
</div>
</section>
{/*  CTA Section  */}
<section className="py-section-padding-lg px-8">
<div className="max-w-container-max mx-auto bg-primary-container rounded-[40px] p-12 md:p-24 text-center text-on-primary-container relative overflow-hidden">
<div className="absolute inset-0 opacity-10">

</div>
<div className="relative z-10">
<h2 className="font-display-lg text-display-lg mb-8">Ready to Build Something <br className="hidden md:block"/> Extraordinary?</h2>
<p className="font-body-lg text-body-lg mb-12 max-w-2xl mx-auto opacity-90">
                        Let's collaborate to transform your vision into a high-impact digital reality. Our experts are ready to guide your journey.
                    </p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
<Link className="inline-block bg-white text-primary-container px-10 py-5 rounded-xl font-bold text-lg hover:bg-soft-highlight transition-all active:scale-95" to="/contact">
                            Start Your Project
                        </Link>
<a className="text-white font-bold border-b-2 border-white/30 pb-1 hover:border-white transition-colors" href="mailto:rogerexindia@gmail.com">
                            rogerexindia@gmail.com
                        </a>
</div>
</div>
</div>
</section>
</main>
    </>
  );
};

export default Services;
