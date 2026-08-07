import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Circle } from 'lucide-react';

const Portfolio = () => {
  return (
    <>
      
<main>
{/*  Hero Section  */}
<section className="relative pt-section-padding-sm md:pt-section-padding-lg pb-16 px-8 max-w-container-max mx-auto overflow-hidden">
<div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/4 -translate-y-1/4">

</div>
<div className="max-w-3xl">
<span className="font-label-caps text-label-caps text-primary mb-4 block">Our Portfolio</span>
<h1 className="font-display-lg text-headline-lg md:text-display-lg text-on-background mb-6">
                    Showcasing our <span className="text-primary">Technical Craftsmanship</span>.
                </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Explore our journey of transforming ambitious ideas into scalable digital realities across Fintech, AI, and Enterprise solutions.
                </p>
</div>
</section>
{/*  Category Filter  */}
<section className="px-8 max-w-container-max mx-auto mb-12">
<div className="flex flex-wrap gap-4 items-center">
<button className="px-6 py-2 rounded-full bg-primary text-on-primary font-body-md transition-all">All Projects</button>
<button className="px-6 py-2 rounded-full bg-soft-highlight/10 text-on-surface hover:bg-soft-highlight/20 transition-all font-body-md border border-outline-variant/30">Fintech</button>
<button className="px-6 py-2 rounded-full bg-soft-highlight/10 text-on-surface hover:bg-soft-highlight/20 transition-all font-body-md border border-outline-variant/30">AI Solutions</button>
<button className="px-6 py-2 rounded-full bg-soft-highlight/10 text-on-surface hover:bg-soft-highlight/20 transition-all font-body-md border border-outline-variant/30">E-commerce</button>
<button className="px-6 py-2 rounded-full bg-soft-highlight/10 text-on-surface hover:bg-soft-highlight/20 transition-all font-body-md border border-outline-variant/30">Cloud Platforms</button>
</div>
</section>
{/*  Portfolio Bento Grid  */}
<section className="px-8 max-w-container-max mx-auto mb-section-padding-lg">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px]">
{/*  Project Card 1: Fintech (Large)  */}
<div className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-[32px] bg-white ambient-shadow transition-all duration-500">
<div className="absolute inset-0 z-10 bg-gradient-to-t from-on-background/80 via-on-background/20 to-transparent"></div>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A sophisticated Fintech dashboard UI displayed on a sleek laptop screen within a minimalist office setting. The interface features complex data visualizations, real-time stock charts, and a clean typography system using a palette of deep navy and crisp white. The surrounding environment is bright and airy with soft-focus plants and warm wood textures, emphasizing a premium professional atmosphere." style={{"backgroundImage":"url('https"}}></div>
<div className="absolute bottom-0 left-0 p-10 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 rounded-lg bg-primary-fixed/20 backdrop-blur-md text-primary font-label-caps text-[10px]">FINTECH</span>
<span className="px-3 py-1 rounded-lg bg-surface-container-lowest/20 backdrop-blur-md text-white font-label-caps text-[10px]">BLOCKCHAIN</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-white mb-2">VaultX Banking Core</h3>
<p className="text-white/80 font-body-md mb-6 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity">A high-performance digital core banking solution built for scalability and secure real-time transactions.</p>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-white font-semibold group/btn">
                                View Case Study <ArrowRight className="w-6 h-6 text-current" />
</button>
</div>
</div>
</div>
{/*  Project Card 2: AI Solution (Standard)  */}
<div className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-[32px] bg-white ambient-shadow">
<div className="absolute inset-0 z-10 bg-gradient-to-t from-on-background/60 to-transparent"></div>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Abstract digital representation of an AI neural network with glowing orange and gold particles connecting in a dark space. The aesthetic is high-tech and energetic, symbolizing machine learning and intelligent automation. The lighting is focused and dramatic, contrasting sharp glowing lines with a deep background, fitting the Rogerex premium brand identity." style={{"backgroundImage":"url('https"}}></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
<h4 className="font-headline-md text-white mb-1">Nexus AI</h4>
<p className="text-white/70 font-label-caps text-[11px]">AI &amp; AUTOMATION</p>
</div>
</div>
{/*  Project Card 3: E-commerce (Portrait)  */}
<div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-[32px] bg-white ambient-shadow">
<div className="absolute inset-0 z-10 bg-gradient-to-t from-on-background/80 to-transparent"></div>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A luxury e-commerce mobile application interface featuring high-end fashion photography. The screen shows a clean product page with elegant typography and large, high-resolution imagery. The background is a soft beige tone matching the Rogerex bone-colored palette, creating a seamless and sophisticated mobile shopping experience." style={{"backgroundImage":"url('https"}}></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
<h4 className="font-headline-md text-white mb-1">Aura Boutique</h4>
<p className="text-white/70 font-label-caps text-[11px] mb-4">E-COMMERCE</p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] text-white/60 font-label-caps px-2 py-1 border border-white/20 rounded">REACT NATIVE</span>
<span className="text-[10px] text-white/60 font-label-caps px-2 py-1 border border-white/20 rounded">NODE.JS</span>
</div>
</div>
</div>
{/*  Project Card 4: Cloud (Wide)  */}
<div className="md:col-span-8 md:row-span-1 group relative overflow-hidden rounded-[32px] bg-white ambient-shadow">
<div className="absolute inset-0 z-10 bg-gradient-to-r from-on-background/90 to-transparent"></div>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Modern server room with glowing blue and amber status lights, representing a secure cloud infrastructure. The image is captured with a shallow depth of field, highlighting the precision of the hardware. The color palette incorporates cool tech-blue and the warm primary orange of the Rogerex brand, suggesting reliability and speed." style={{"backgroundImage":"url('https"}}></div>
<div className="absolute inset-0 p-10 flex flex-col justify-center z-20 max-w-md">
<h4 className="font-headline-md text-white mb-2">SkyStack Cloud</h4>
<p className="text-white/70 font-body-md">Enterprise-grade cloud migration for a global logistics leader.</p>
</div>
</div>
</div>
</section>
{/*  Testimonials Section  */}
<section className="bg-surface-container py-section-padding-lg overflow-hidden">
<div className="px-8 max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
<div className="md:col-span-4 mb-12 md:mb-0">
<span className="font-label-caps text-label-caps text-primary mb-4 block">Testimonials</span>
<h2 className="font-headline-lg text-headline-lg text-on-background mb-6">Client Success Stories</h2>
<p className="text-on-surface-variant font-body-md mb-8">
                        Our commitment to "Customer Success" is at the heart of everything we build. Hear from the visionaries we've partnered with.
                    </p>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-white transition-all">
<Circle className="w-6 h-6 text-current" />
</button>
<button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-white transition-all">
<Circle className="w-6 h-6 text-current" />
</button>
</div>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
{/*  Testimonial 1  */}
<div className="bg-white p-8 rounded-[32px] ambient-shadow relative">
<Circle className="w-6 h-6 text-current" />
<p className="text-on-surface-variant font-body-md italic mb-8 leading-relaxed">
                            "Rogerex India transformed our legacy systems into a modern cloud-native powerhouse. Their technical depth and mission-driven approach are unmatched."
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Professional portrait of a middle-aged male executive in a neutral gray suit, smiling confidently against a soft-focus office background. The lighting is professional and warm, conveying trust and leadership, styled in a clean modern aesthetic for a testimonial section." src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"/>
</div>
<div>
<p className="font-bold text-on-surface">Marcus Chen</p>
<p className="text-xs text-text-muted font-label-caps">CTO, FINSYNC TECH</p>
</div>
</div>
</div>
{/*  Testimonial 2  */}
<div className="bg-white p-8 rounded-[32px] ambient-shadow relative mt-8 md:mt-12">
<Circle className="w-6 h-6 text-current" />
<p className="text-on-surface-variant font-body-md italic mb-8 leading-relaxed">
                            "The UI/UX design team at Rogerex has a rare eye for detail. They didn't just build an app; they crafted an experience that our users love."
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of a female entrepreneur with a creative and modern style, wearing stylish glasses and a neutral knit sweater. She has an approachable, intelligent expression. The background is a minimalist studio with warm lighting, maintaining the premium minimalist SaaS agency aesthetic." src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"/>
</div>
<div>
<p className="font-bold text-on-surface">Sarah Jenkins</p>
<p className="text-xs text-text-muted font-label-caps">FOUNDER, AURA RETAIL</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  CTA Section  */}
<section className="py-section-padding-lg px-8 max-w-container-max mx-auto text-center">
<div className="bg-on-background rounded-[48px] py-16 px-8 relative overflow-hidden">

<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="font-headline-lg text-headline-lg text-white mb-6">Ready to build your next big idea?</h2>
<p className="text-white/70 font-body-lg mb-10">Let's transform your vision into a scalable technology solution today.</p>
<Link className="inline-block bg-primary text-on-primary px-10 py-4 rounded-2xl font-bold text-body-md transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/20" to="/contact">
                        Start Your Project
                    </Link>
</div>
</div>
</section>
</main>
    </>
  );
};

export default Portfolio;
