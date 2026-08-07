import React from 'react';
import { Link } from 'react-router-dom';
import { Circle, Users, GraduationCap, MapPin } from 'lucide-react';

const Careers = () => {
  return (
    <>
      
<main>
{/*  Hero Section  */}
<section className="relative py-section-padding-lg overflow-hidden">

<div className="max-w-container-max mx-auto px-8 relative z-10 text-center">
<span className="font-label-caps text-label-caps text-primary tracking-widest mb-6 block">JOIN THE TEAM</span>
<h1 className="font-display-lg text-display-lg md:text-display-lg text-on-surface mb-8 max-w-4xl mx-auto leading-tight">
                    Help Us Build <span className="text-primary italic">Digital Excellence</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
                    At RogerEx, we transform ideas into reliable technology solutions. We're looking for passionate individuals who value innovation, quality, and continuous learning.
                </p>
<a className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-[12px] font-body-md font-bold transition-all hover:shadow-lg hover:-translate-y-1" href="#openings">
                    View Open Positions
                    <Circle className="w-6 h-6 text-current" />
</a>
</div>
</section>
{/*  Life at Rogerex (Culture Bento Grid)  */}
<section className="py-section-padding-lg bg-surface">
<div className="max-w-container-max mx-auto px-8">
<div className="mb-16">
<h2 className="font-headline-lg text-headline-lg mb-4">Life at Rogerex</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">A culture driven by innovation and customer success.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[700px]">
{/*  Main Image Card  */}
<div className="md:col-span-8 relative overflow-hidden rounded-[20px] ambient-shadow group">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A collaborative team of diverse tech professionals working in a sunlit, minimalist high-tech office in India. The environment features warm wooden accents, ergonomic furniture, and large windows. People are engaged in brainstorming with whiteboards and modern laptops. The lighting is soft and natural, emphasizing a professional yet approachable SaaS agency aesthetic with a palette of bone white and soft orange." style={{"backgroundImage":"url('https"}}></div>
<div className="absolute bottom-8 left-8 z-20 text-white">
<h3 className="font-headline-md text-headline-md mb-2">Our Collaborative Workspace</h3>
<p className="font-body-md opacity-90">Where ideas meet execution in a high-performance environment.</p>
</div>
</div>
{/*  Vertical Card  */}
<div className="md:col-span-4 grid grid-rows-2 gap-8">
<div className="relative overflow-hidden rounded-[20px] ambient-shadow group bg-white p-8 border border-outline-variant/10">
<div className="mb-4">
<Users className="w-6 h-6 text-current" />
</div>
<h3 className="font-headline-md text-headline-md mb-2">Innovation First</h3>
<p className="font-body-md text-on-surface-variant">We empower our teams to experiment with AI, Cloud, and the latest stack to solve real-world problems.</p>
</div>
<div className="relative overflow-hidden rounded-[20px] ambient-shadow group">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="Close up of a programmer's hands typing on a mechanical keyboard with soft orange ambient backlighting. On the desk is a steaming cup of artisanal coffee and a notebook filled with technical diagrams. The background is a blurred high-end IT consultancy office with minimalist decor. The overall mood is focused, professional, and technologically advanced." style={{"backgroundImage":"url('https"}}></div>
<div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
</div>
</div>
</div>
</div>
</section>
{/*  Benefits Section  */}
<section className="py-section-padding-lg bg-background-bone">
<div className="max-w-container-max mx-auto px-8">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg mb-4">Why Work With Us?</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Designed for growth, flexibility, and well-being.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Benefit 1  */}
<div className="bg-white p-10 rounded-[20px] ambient-shadow border border-outline-variant/10 hover:bg-soft-highlight/5 transition-all group">
<div className="w-16 h-16 bg-soft-highlight/20 rounded-[12px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<Circle className="w-6 h-6 text-current" />
</div>
<h3 className="font-headline-md text-headline-md mb-4">Remote work</h3>
<p className="font-body-md text-on-surface-variant">Work from anywhere. We value results over clock-ins, providing the flexibility you need for a healthy work-life balance.</p>
</div>
{/*  Benefit 2  */}
<div className="bg-white p-10 rounded-[20px] ambient-shadow border border-outline-variant/10 hover:bg-soft-highlight/5 transition-all group">
<div className="w-16 h-16 bg-soft-highlight/20 rounded-[12px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<GraduationCap className="w-6 h-6 text-current" />
</div>
<h3 className="font-headline-md text-headline-md mb-4">Learning</h3>
<p className="font-body-md text-on-surface-variant">Access to premium courses, certifications, and internal workshops to keep you at the edge of IT innovation.</p>
</div>
{/*  Benefit 3  */}
<div className="bg-white p-10 rounded-[20px] ambient-shadow border border-outline-variant/10 hover:bg-soft-highlight/5 transition-all group">
<div className="w-16 h-16 bg-soft-highlight/20 rounded-[12px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<Circle className="w-6 h-6 text-current" />
</div>
<h3 className="font-headline-md text-headline-md mb-4">Health</h3>
<p className="font-body-md text-on-surface-variant">Comprehensive health insurance and wellness programs to ensure you and your family are always taken care of.</p>
</div>
</div>
</div>
</section>
{/*  Open Positions Section  */}
<section className="py-section-padding-lg bg-surface" id="openings">
<div className="max-w-container-max mx-auto px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg mb-4">Open Opportunities</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Find your next challenge in our growing team.</p>
</div>
<div className="flex gap-2">
<span className="bg-soft-highlight/20 text-on-secondary-container px-4 py-2 rounded-full font-label-caps text-label-caps">4 OPENINGS</span>
</div>
</div>
<div className="space-y-6">
{/*  Job Card 1  */}
<div className="bg-white p-8 rounded-[20px] ambient-shadow border border-outline-variant/10 flex flex-col md:flex-row items-center justify-between group hover:border-primary/30 transition-all">
<div className="mb-6 md:mb-0">
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">Frontend Developer</h3>
<div className="flex flex-wrap gap-4 text-on-surface-variant font-body-md">
<span className="flex items-center gap-1"><Circle className="w-6 h-6 text-current" /> Full-time</span>
<span className="flex items-center gap-1"><MapPin className="w-6 h-6 text-current" /> Remote / India</span>
<span className="flex items-center gap-1"><Circle className="w-6 h-6 text-current" /> Competitive</span>
</div>
</div>
<Link className="inline-block w-full text-center md:w-auto bg-primary text-on-primary px-8 py-4 rounded-[12px] font-body-md font-bold transition-all hover:bg-primary-container active:scale-95" to="/contact">
                            Apply Now
                        </Link>
</div>
{/*  Job Card 2  */}
<div className="bg-white p-8 rounded-[20px] ambient-shadow border border-outline-variant/10 flex flex-col md:flex-row items-center justify-between group hover:border-primary/30 transition-all">
<div className="mb-6 md:mb-0">
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">UI Designer</h3>
<div className="flex flex-wrap gap-4 text-on-surface-variant font-body-md">
<span className="flex items-center gap-1"><Circle className="w-6 h-6 text-current" /> Full-time</span>
<span className="flex items-center gap-1"><MapPin className="w-6 h-6 text-current" /> Remote</span>
<span className="flex items-center gap-1"><Circle className="w-6 h-6 text-current" /> Performance Based</span>
</div>
</div>
<Link className="inline-block w-full text-center md:w-auto bg-primary text-on-primary px-8 py-4 rounded-[12px] font-body-md font-bold transition-all hover:bg-primary-container active:scale-95" to="/contact">
                            Apply Now
                        </Link>
</div>
{/*  Job Card 3  */}
<div className="bg-white p-8 rounded-[20px] ambient-shadow border border-outline-variant/10 flex flex-col md:flex-row items-center justify-between group hover:border-primary/30 transition-all">
<div className="mb-6 md:mb-0">
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">Backend Engineer</h3>
<div className="flex flex-wrap gap-4 text-on-surface-variant font-body-md">
<span className="flex items-center gap-1"><Circle className="w-6 h-6 text-current" /> Full-time</span>
<span className="flex items-center gap-1"><MapPin className="w-6 h-6 text-current" /> Hub (Gurgaon)</span>
<span className="flex items-center gap-1"><Circle className="w-6 h-6 text-current" /> High-Growth</span>
</div>
</div>
<Link className="inline-block w-full text-center md:w-auto bg-primary text-on-primary px-8 py-4 rounded-[12px] font-body-md font-bold transition-all hover:bg-primary-container active:scale-95" to="/contact">
                            Apply Now
                        </Link>
</div>
{/*  Job Card 4  */}
<div className="bg-white p-8 rounded-[20px] ambient-shadow border border-outline-variant/10 flex flex-col md:flex-row items-center justify-between group hover:border-primary/30 transition-all">
<div className="mb-6 md:mb-0">
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">Intern</h3>
<div className="flex flex-wrap gap-4 text-on-surface-variant font-body-md">
<span className="flex items-center gap-1"><Circle className="w-6 h-6 text-current" /> 6 Months</span>
<span className="flex items-center gap-1"><MapPin className="w-6 h-6 text-current" /> Remote</span>
<span className="flex items-center gap-1"><Circle className="w-6 h-6 text-current" /> PPO Potential</span>
</div>
</div>
<Link className="inline-block w-full text-center md:w-auto bg-primary text-on-primary px-8 py-4 rounded-[12px] font-body-md font-bold transition-all hover:bg-primary-container active:scale-95" to="/contact">
                            Apply Now
                        </Link>
</div>
</div>
</div>
</section>
{/*  Newsletter / CTA  */}
<section className="py-section-padding-lg bg-primary-container text-on-primary-container">
<div className="max-w-container-max mx-auto px-8 text-center">
<h2 className="font-headline-lg text-headline-lg mb-6 text-white">Don't see a fit right now?</h2>
<p className="font-body-lg text-body-lg mb-10 text-white/90 max-w-2xl mx-auto">
                    We're always looking for exceptional talent. Send your resume to <span className="underline font-bold">rogerexindia@gmail.com</span> and we'll reach out when the right role opens up.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<input className="w-full max-w-sm h-[56px] px-6 rounded-[16px] bg-background-bone text-on-surface border-none focus:ring-2 focus:ring-soft-highlight outline-none" placeholder="Your Email Address" type="email"/>
<button className="h-[56px] px-8 rounded-[16px] bg-on-background text-white font-bold hover:scale-105 transition-all">
                        Get Job Alerts
                    </button>
</div>
</div>
</section>
</main>
    </>
  );
};

export default Careers;
