import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Circle, Users, GraduationCap, MapPin, Send, FileText, UploadCloud } from 'lucide-react';
import toast from 'react-hot-toast';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    role: '',
    coverLetter: ''
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(file.type)) {
      toast.error('Only PDF, DOC, or DOCX files are allowed.');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error('File size must be under 10MB.');
      return;
    }
    setResumeFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.college || !formData.role || !formData.coverLetter) {
      toast.error('All fields are required!');
      return;
    }
    if (!resumeFile) {
      toast.error('Please upload your resume.');
      return;
    }

    // Use FormData to send file + text fields together
    const payload = new FormData();
    Object.entries(formData).forEach(([key, val]) => payload.append(key, val));
    payload.append('resume', resumeFile);

    setIsLoading(true);
    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        // Do NOT set Content-Type — browser sets multipart/form-data automatically
        body: payload,
      });
      const data = await response.json();

      if (data.success) {
        toast.success('Application submitted! We will review and get back to you.');
        setFormData({ name: '', email: '', phone: '', college: '', role: '', coverLetter: '' });
        setResumeFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        toast.error(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };
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
{/*  Application Form Section  */}
<section className="py-section-padding-lg bg-background-bone" id="apply">
<div className="max-w-3xl mx-auto px-8">
<div className="text-center mb-12">
<span className="font-label-caps text-label-caps text-primary mb-4 block">READY TO JOIN?</span>
<h2 className="font-headline-lg text-headline-lg mb-4">Submit Your Application</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Fill out the form below and we'll review your application within 3-5 business days.</p>
</div>
<div className="bg-white rounded-[20px] p-8 md:p-10 ambient-shadow border border-outline-variant/10">
<form className="space-y-6" onSubmit={handleSubmit}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">FULL NAME</label>
<input name="name" value={formData.name} onChange={handleChange} className="h-[56px] px-6 rounded-xl bg-background-bone border-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body-md placeholder:text-text-muted" placeholder="John Doe" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">EMAIL ADDRESS</label>
<input name="email" value={formData.email} onChange={handleChange} className="h-[56px] px-6 rounded-xl bg-background-bone border-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body-md placeholder:text-text-muted" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">PHONE NUMBER</label>
<input name="phone" value={formData.phone} onChange={handleChange} className="h-[56px] px-6 rounded-xl bg-background-bone border-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body-md placeholder:text-text-muted" placeholder="+91 98765 43210" type="tel"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">COLLEGE / UNIVERSITY</label>
<input name="college" value={formData.college} onChange={handleChange} className="h-[56px] px-6 rounded-xl bg-background-bone border-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body-md placeholder:text-text-muted" placeholder="ABC College, Bangalore" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">APPLYING FOR ROLE</label>
<select name="role" value={formData.role} onChange={handleChange} className="h-[56px] px-6 rounded-xl bg-background-bone border-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body-md">
<option value="">Select a role...</option>
<option value="Frontend Developer">Frontend Developer</option>
<option value="UI Designer">UI Designer</option>
<option value="Backend Engineer">Backend Engineer</option>
<option value="Intern">Intern</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">RESUME / CV</label>
{/* Hidden real file input */}
<input
  ref={fileInputRef}
  id="resume-upload"
  type="file"
  name="resume"
  accept=".pdf,.doc,.docx"
  className="hidden"
  onChange={handleFileChange}
/>
{/* Clickable styled upload area */}
<div
  onClick={() => fileInputRef.current?.click()}
  className={`flex items-center gap-4 h-[64px] px-6 rounded-xl cursor-pointer transition-all duration-200 border-2 border-dashed
    ${resumeFile
      ? 'bg-primary/5 border-primary/40'
      : 'bg-background-bone border-outline-variant/30 hover:border-primary/40 hover:bg-primary/5'
    }`}
>
  {resumeFile ? (
    <FileText className="w-6 h-6 text-primary shrink-0" />
  ) : (
    <UploadCloud className="w-6 h-6 text-on-surface-variant shrink-0" />
  )}
  <span className={`font-body-md truncate ${resumeFile ? 'text-primary font-semibold' : 'text-text-muted'}`}>
    {resumeFile ? resumeFile.name : 'Click to upload PDF, DOC or DOCX (max 10MB)'}
  </span>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps text-on-surface-variant">COVER LETTER / WHY US?</label>
<textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} className="p-6 rounded-xl bg-background-bone border-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body-md placeholder:text-text-muted resize-none" placeholder="Tell us about yourself and why you want to join Rogerex..." rows="6"></textarea>
</div>
<button
  className="w-full bg-primary text-on-primary py-4 rounded-xl font-body-lg font-bold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
  type="submit"
  disabled={isLoading}
>
  {isLoading ? 'Submitting...' : 'Submit Application'}
  {!isLoading && <Send className="w-6 h-6 text-current" />}
</button>
</form>
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
