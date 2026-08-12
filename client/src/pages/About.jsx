import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Eye, BadgeCheck, Lightbulb, Gavel, ArrowRight, ArrowLeft, Globe, TrendingUp, Users, GraduationCap, ExternalLink } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const About = () => {
  return (
    <>

      <main>
        {/*  Hero Section  */}
        <section className="relative pt-24 pb-section-padding-sm overflow-hidden">
          <div className="max-w-container-max mx-auto px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="font-label-caps text-label-caps text-primary bg-primary-fixed/30 px-3 py-1 rounded-full inline-block mb-6">Who We Are</span>
              <h1 className="font-display-lg text-display-lg mb-8 leading-tight">
                Building <span className="text-primary">Digital Excellence</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 leading-relaxed">
                RogerEx is a modern IT services company focused on building innovative digital solutions for startups, businesses, and enterprises. We transform ideas into reliable technology solutions.
              </p>
            </div>
          </div>
          {/*  Decorative Element  */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">

          </div>
        </section>
        {/*  Our Story Section (Asymmetric Bento)  */}
        <section className="py-section-padding-lg bg-surface">
          <div className="max-w-container-max mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
              <div className="md:col-span-7 bg-white rounded-[20px] p-10 ambient-shadow flex flex-col justify-center">
                <h2 className="font-headline-lg text-headline-lg mb-6">Our Story</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  We specialize in custom software development, web and mobile applications, UI/UX design, cloud solutions, AI-powered automation, and scalable digital products. Our journey began with a simple goal: to help businesses navigate the complex landscape of technology while delivering exceptional quality, performance, and long-term value.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Today, Rogerex India stands as a beacon of technical precision and creative innovation, bridging the gap between visionary concepts and functional reality.
                </p>
              </div>
              <div className="md:col-span-5 relative min-h-[400px]">
                <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                  <img className="w-full h-full object-cover" data-alt="A professional, high-end office environment in Bangalore, India, featuring modern architectural lines, warm natural lighting, and a diverse team of software engineers collaborating on transparent glass walls. The color palette emphasizes warm ivory, deep copper, and soft beige tones, reflecting a premium SaaS agency aesthetic. The atmosphere is focused, innovative, and sophisticated." src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Mission & Vision  */}
        <section className="py-section-padding-lg bg-background-bone">
          <div className="max-w-container-max mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/*  Mission Card  */}
              <div className="p-12 rounded-[20px] bg-primary-container text-on-primary-container flex flex-col gap-6 ambient-shadow">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-current" />
                </div>
                <h3 className="font-headline-lg text-headline-lg">Mission</h3>
                <p className="font-body-lg text-body-lg opacity-90">
                  To empower businesses with innovative, scalable, and reliable digital solutions.
                </p>
              </div>
              {/*  Vision Card  */}
              <div className="p-12 rounded-[20px] bg-secondary-container text-on-secondary-container flex flex-col gap-6 ambient-shadow">
                <div className="w-16 h-16 rounded-full bg-white/40 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-current" />
                </div>
                <h3 className="font-headline-lg text-headline-lg">Vision</h3>
                <p className="font-body-lg text-body-lg opacity-90">
                  To become a globally trusted technology partner known for innovation, quality, and digital excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*  Global Expertise (Why Choose Us)  */}
        <section className="py-section-padding-lg bg-white">
          <div className="max-w-container-max mx-auto px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest block mb-4">GLOBAL CONSULTING</span>
              <h2 className="font-headline-lg text-headline-lg mb-4">Why Choose Us</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">We combine local passion with global standards to deliver world-class IT consultancy.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/*  Item 1  */}
              <div className="p-8 rounded-[20px] glass-card transition-all duration-300 hover:bg-soft-highlight/10">
                <Globe className="w-6 h-6 text-primary" />
                <h4 className="font-headline-md text-headline-md mb-3">Global Expertise</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Serving clients across borders with a deep understanding of international tech standards and markets.</p>
              </div>
              {/*  Item 2  */}
              <div className="p-8 rounded-[20px] glass-card transition-all duration-300 hover:bg-soft-highlight/10 border-primary/20">
                <BadgeCheck className="w-6 h-6 text-current" />
                <h4 className="font-headline-md text-headline-md mb-3">Certified Quality</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Rigorous QA processes ensuring every line of code meets the highest benchmarks for performance.</p>
              </div>
              {/*  Item 3  */}
              <div className="p-8 rounded-[20px] glass-card transition-all duration-300 hover:bg-soft-highlight/10">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h4 className="font-headline-md text-headline-md mb-3">Agile Scale</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Dynamic team structures that scale rapidly to meet the evolving demands of growing enterprises.</p>
              </div>
            </div>
          </div>
        </section>
        {/*  Values Section  */}
        <section className="py-section-padding-lg bg-background-bone">
          <div className="max-w-container-max mx-auto px-8">
            <div className="mb-16">
              <h2 className="font-headline-lg text-headline-lg mb-2">Our Core Values</h2>
              <div className="w-24 h-1 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="flex flex-col items-center p-6 bg-white rounded-[20px] ambient-shadow group hover:bg-primary transition-all duration-300">
                <Lightbulb className="w-6 h-6 text-current" />
                <span className="font-body-md font-semibold text-on-surface group-hover:text-white transition-colors">Innovation</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-[20px] ambient-shadow group hover:bg-primary transition-all duration-300">
                <BadgeCheck className="w-6 h-6 text-current" />
                <span className="font-body-md font-semibold text-on-surface group-hover:text-white transition-colors">Quality</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-[20px] ambient-shadow group hover:bg-primary transition-all duration-300">
                <Eye className="w-6 h-6 text-current" />
                <span className="font-body-md font-semibold text-on-surface group-hover:text-white transition-colors">Transparency</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-[20px] ambient-shadow group hover:bg-primary transition-all duration-300">
                <Users className="w-6 h-6 text-current" />
                <span className="font-body-md font-semibold text-on-surface group-hover:text-white transition-colors">Customer Success</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-[20px] ambient-shadow group hover:bg-primary transition-all duration-300">
                <GraduationCap className="w-6 h-6 text-current" />
                <span className="font-body-md font-semibold text-on-surface group-hover:text-white transition-colors">Continuous Learning</span>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-[20px] ambient-shadow group hover:bg-primary transition-all duration-300">
                <Gavel className="w-6 h-6 text-current" />
                <span className="font-body-md font-semibold text-on-surface group-hover:text-white transition-colors">Integrity</span>
              </div>
            </div>
          </div>
        </section>
        {/*  Leadership Section  */}
        <section className="py-section-padding-lg bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="font-headline-lg text-headline-lg mb-4">Leadership Team</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">The minds behind Rogerex India, dedicated to transforming your vision into digital reality.</p>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"><ArrowLeft className="w-6 h-6 text-current" /></button>
                <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"><ArrowRight className="w-6 h-6 text-current" /></button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/*  Leader 1  */}
              <div className="group">
                <div className="aspect-[3/4] rounded-[20px] overflow-hidden mb-6 relative">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A professional studio portrait of a technology executive, mid-40s, with a confident and friendly expression. The person is dressed in modern business casual attire. The background is a soft, blurred office interior with warm wooden accents and ivory lighting, maintaining the premium brand aesthetic of Rogerex India. High-quality editorial lighting." src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-4">
                      <a className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors" href="#"><ExternalLink className="w-5 h-5 text-white" /></a>
                    </div>
                  </div>
                </div>
                <h5 className="font-headline-md text-[24px] mb-1">Rohan Gupta</h5>
                <p className="font-label-caps text-label-caps text-primary">Chief Technology Officer</p>
              </div>
              {/*  Leader 2  */}
              <div className="group">
                <div className="aspect-[3/4] rounded-[20px] overflow-hidden mb-6 relative">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A cinematic portrait of a female creative director, late 30s, in a brightly lit studio environment. She wears a minimalist beige blazer. The lighting is soft and diffused, creating a luxurious and approachable feel. Behind her, subtle geometric patterns hint at digital design. The image uses soft ivory and copper highlights consistent with the UI design." src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-4">
                      <a className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors" href="#"><ExternalLink className="w-5 h-5 text-white" /></a>
                    </div>
                  </div>
                </div>
                <h5 className="font-headline-md text-[24px] mb-1">Ananya Sharma</h5>
                <p className="font-label-caps text-label-caps text-primary">Head of UX Design</p>
              </div>
              {/*  Leader 3  */}
              <div className="group">
                <div className="aspect-[3/4] rounded-[20px] overflow-hidden mb-6 relative">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A portrait of an AI solutions lead, early 40s, standing in front of a window with a city view of a tech hub. The lighting is golden hour, casting a warm glow that matches the ivory and copper palette of the website. The mood is one of quiet ambition and deep expertise. Sharp focus, professional photography style." src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-4">
                      <a className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors" href="#"><ExternalLink className="w-5 h-5 text-white" /></a>
                    </div>
                  </div>
                </div>
                <h5 className="font-headline-md text-[24px] mb-1">Vikram Singh</h5>
                <p className="font-label-caps text-label-caps text-primary">Head of AI &amp; Automation</p>
              </div>
              {/*  Leader 4  */}
              <div className="group">
                <div className="aspect-[3/4] rounded-[20px] overflow-hidden mb-6 relative">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A professional photo of a operations director, 40s, in a clean, minimalist boardroom setting. The image is bright and airy with high-key lighting. The color palette is composed of soft whites, bone ivory, and subtle copper accents. The expression is professional and welcoming. Editorial style portrait." src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-4">
                      <a className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary transition-colors" href="#"><ExternalLink className="w-5 h-5 text-white" /></a>
                    </div>
                  </div>
                </div>
                <h5 className="font-headline-md text-[24px] mb-1">Siddharth Rao</h5>
                <p className="font-label-caps text-label-caps text-primary">Director of Operations</p>
              </div>
            </div>
          </div>
        </section>
        {/*  CTA Section  */}
        <CallToAction
          title="Ready to transform your ideas?"
          description="Partner with Rogerex India and leverage our expertise in custom software development and digital strategy."
          buttonNode={
            <Link className="inline-block bg-soft-highlight text-on-secondary-fixed px-10 py-4 rounded-[12px] font-body-lg font-bold hover:brightness-110 transition-all active:scale-95" to="/contact">
              Consult Our Experts
            </Link>
          }
        />
      </main>
    </>
  );
};

export default About;
