import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Circle, Cloud, Lightbulb, BadgeCheck, Eye, Users, Gavel, GraduationCap, Send } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <>
      
{/*  Hero Section  */}
<header className="relative min-h-[85vh] flex items-center overflow-hidden pt-section-padding-sm md:pt-0">
<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-gradient-to-b from-background-bone/0 via-background-bone/50 to-background-bone"></div>
</div>
<div className="relative z-10 max-w-container-max mx-auto px-8 w-full">
<div className="max-w-3xl">
<span className="font-label-caps text-label-caps text-primary mb-6 block uppercase tracking-[0.2em]">Crafting the Future</span>
<h1 className="font-display-lg text-display-lg md:text-[84px] text-on-surface leading-tight mb-8">
                    Building <span className="text-gradient">Digital</span> Excellence
                </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-12 leading-relaxed max-w-2xl">
                    Empowering businesses with innovative, scalable, and reliable digital solutions tailored to navigate the complexities of the modern tech landscape.
                </p>
<div className="flex flex-wrap gap-stack-gap">
<Link className="px-8 py-4 bg-primary text-white rounded-[12px] font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg active:scale-95" to="/contact">
                        Get Started
                    </Link>
<Link className="px-8 py-4 border-2 border-primary text-primary rounded-[12px] font-semibold text-lg transition-all hover:bg-soft-highlight/10 active:scale-95 flex items-center gap-2" to="/services">
                        Our Services
                        <ArrowRight className="w-6 h-6 text-current" />
</Link>
</div>
</div>
</div>
</header>
{/*  About Snippet  */}
<section className="py-section-padding-lg bg-background-bone" id="about">
<div className="max-w-container-max mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
<div className="rounded-[20px] overflow-hidden ambient-glow aspect-square relative">
<img className="w-full h-full object-cover" data-alt="A clean, minimalist high-tech office interior for a modern SaaS agency. The space features large floor-to-ceiling windows, sleek architectural lines, and neutral warm tones consistent with a bone-colored palette. Natural soft light illuminates polished surfaces and minimalist furniture, creating an atmosphere of professional technical expertise and quiet ambition." src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"/>
<div className="absolute inset-0 bg-primary/5"></div>
</div>
<div className="md:pl-12">
<span className="font-label-caps text-label-caps text-primary mb-4 block uppercase">Our Identity</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Innovative IT Consulting for the Global Market</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                        Rogerex India is a premier IT services company dedicated to transforming complex business challenges into elegant digital solutions. We combine technical rigor with creative strategy to deliver high-impact software, cloud, and AI products.
                    </p>
<div className="grid grid-cols-2 gap-gutter">
<div className="flex flex-col gap-2">
<span className="text-4xl font-bold text-primary">10+</span>
<span className="text-sm font-label-caps text-text-muted">Years Experience</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl font-bold text-primary">250+</span>
<span className="text-sm font-label-caps text-text-muted">Projects Delivered</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Services Grid  */}
<section className="py-section-padding-lg bg-surface" id="services">
<div className="max-w-container-max mx-auto px-8 text-center mb-16">
<span className="font-label-caps text-label-caps text-primary mb-4 block uppercase">Specialized Solutions</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Our Core Expertise</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                We provide a comprehensive suite of digital services designed to scale your operations and enhance your competitive edge.
            </p>
</div>
<div className="max-w-container-max mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/*  Software Development  */}
<ServiceCard 
  variant="home"
  icon={<Code className="w-6 h-6 text-current" />}
  title="Software Development"
  description="Custom-built enterprise software that streamlines workflows and powers complex business logic with precision."
/>
{/*  Full Stack Development  */}
<ServiceCard 
  variant="home"
  icon={<Circle className="w-6 h-6 text-current" />}
  title="Full Stack Development"
  description="End-to-end web applications built with modern frameworks to ensure seamless performance from frontend to backend."
/>
{/*  Mobile App Development  */}
<ServiceCard 
  variant="home"
  icon={<Circle className="w-6 h-6 text-current" />}
  title="Mobile App Development"
  description="Intuitive, high-performance iOS and Android applications that keep your users engaged on every device."
/>
{/*  UI/UX Design  */}
<ServiceCard 
  variant="home"
  icon={<Circle className="w-6 h-6 text-current" />}
  title="UI/UX Design"
  description="User-centric design systems that prioritize clarity, aesthetics, and effortless interaction across digital interfaces."
/>
{/*  AI & Automation  */}
<ServiceCard 
  variant="home"
  icon={<Circle className="w-6 h-6 text-current" />}
  title="AI & Automation"
  description="Leveraging machine learning and RPA to automate manual tasks and unlock data-driven insights for your business."
/>
{/*  Cloud Solutions  */}
<ServiceCard 
  variant="home"
  icon={<Cloud className="w-6 h-6 text-current" />}
  title="Cloud Solutions"
  description="Secure, scalable, and cost-effective cloud infrastructure migration and management for modern enterprises."
/>
</div>
</section>
{/*  Core Values Section  */}
<section className="py-section-padding-lg bg-background-bone">
<div className="max-w-container-max mx-auto px-8">
<div className="text-center mb-16">
<span className="font-label-caps text-label-caps text-primary mb-4 block uppercase">Our DNA</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Values that Drive Excellence</h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-gutter">
<div className="flex flex-col items-center text-center">
<Lightbulb className="w-6 h-6 text-current" />
<h4 className="font-headline-md text-xl mb-2">Innovation</h4>
<p className="text-sm text-text-muted max-w-[240px]">Pushing boundaries with forward-thinking tech solutions.</p>
</div>
<div className="flex flex-col items-center text-center">
<BadgeCheck className="w-6 h-6 text-current" />
<h4 className="font-headline-md text-xl mb-2">Quality</h4>
<p className="text-sm text-text-muted max-w-[240px]">Uncompromising standards in every line of code.</p>
</div>
<div className="flex flex-col items-center text-center">
<Eye className="w-6 h-6 text-current" />
<h4 className="font-headline-md text-xl mb-2">Transparency</h4>
<p className="text-sm text-text-muted max-w-[240px]">Open communication and clear project visibility.</p>
</div>
<div className="flex flex-col items-center text-center">
<Users className="w-6 h-6 text-current" />
<h4 className="font-headline-md text-xl mb-2">Customer Success</h4>
<p className="text-sm text-text-muted max-w-[240px]">Our partners' growth is our primary metric.</p>
</div>
<div className="flex flex-col items-center text-center">
<Gavel className="w-6 h-6 text-current" />
<h4 className="font-headline-md text-xl mb-2">Integrity</h4>
<p className="text-sm text-text-muted max-w-[240px]">Building trust through ethical and honest practices.</p>
</div>
<div className="flex flex-col items-center text-center">
<GraduationCap className="w-6 h-6 text-current" />
<h4 className="font-headline-md text-xl mb-2">Continuous Learning</h4>
<p className="text-sm text-text-muted max-w-[240px]">Always evolving with the latest technological trends.</p>
</div>
</div>
</div>
</section>
{/*  CTA Section  */}
<CallToAction
  title="Ready to transform your business?"
  description="Let's collaborate to build the digital future of your company. Contact our experts today for a consultation."
  sectionClassName="max-w-container-max mx-auto px-8 mb-section-padding-lg"
  containerClassName="relative overflow-hidden rounded-[24px] bg-inverse-surface p-12 md:p-20 text-center"
  hasAnimatedBg={false}
  buttonNode={
    <Link className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-[12px] font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-xl" to="/contact">
      Contact Us Today
      <Send className="w-6 h-6 text-current" />
    </Link>
  }
/>
    </>
  );
};

export default Home;
