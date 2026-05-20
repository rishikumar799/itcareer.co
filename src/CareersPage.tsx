// src/CareersPage.tsx
import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronRight,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Users,
  Heart,
  DollarSign,
  Coffee,
  GraduationCap,
  Shield,
  X,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Code2,
} from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: string) => void;
  onTalkToCounselor: () => void;
}

interface Role {
  title: string;
  type: string;
  dept: string;
  location: string;
  exp: string;
  tags: string[];
  responsibilities: string[];
}

const cultureItems = [
  {
    icon: <Lightbulb size={20} />,
    title: 'Innovative Projects',
    desc: 'Work on real-world impactful projects.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Growth & Learning',
    desc: 'Continuous learning and self-development.',
  },
  {
    icon: <Users size={20} />,
    title: 'Great Environment',
    desc: 'Collaborative, inclusive and supportive culture.',
  },
];

const openRoles: Role[] = [
  {
    title: 'Senior Full Stack Developer',
    type: 'Full Time',
    dept: 'Development',
    location: 'Hyderabad, India',
    exp: '3+ years of experience in scalable web applications using modern technologies.',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    responsibilities: [
      'Build and maintain scalable web applications',
      'Collaborate with cross-functional teams',
      'Code reviews and best practices enforcement',
      'Mentor junior developers',
    ],
  },
  {
    title: 'Backend Developer (Node.js)',
    type: 'Full Time',
    dept: 'Development',
    location: 'Bangalore, India',
    exp: '3+ years of experience in developing RESTful APIs and microservices.',
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'AWS'],
    responsibilities: [
      'Design and develop robust RESTful APIs',
      'Optimize database queries and performance',
      'Integrate third-party services',
      'Ensure security best practices',
    ],
  },
  {
    title: 'Frontend Developer (React)',
    type: 'Full Time',
    dept: 'Development',
    location: 'Remote',
    exp: '2-4 years of experience in building responsive and interactive user interfaces.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    responsibilities: [
      'Build pixel-perfect, responsive UIs',
      'Optimize application for speed and scale',
      'Collaborate with designers and backend teams',
      'Write clean, maintainable code',
    ],
  },
  {
    title: 'UI/UX Designer',
    type: 'Full Time',
    dept: 'Design',
    location: 'Hyderabad, India',
    exp: '2-4 years of experience in designing user-friendly and visually appealing interfaces.',
    tags: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping'],
    responsibilities: [
      'Create wireframes and high-fidelity mockups',
      'Conduct user research and usability testing',
      'Design responsive layouts for web and mobile',
      'Maintain and evolve the design system',
    ],
  },
];

const whyJoin = [
  { icon: <DollarSign size={18} />, label: 'Competitive Salary' },
  { icon: <Coffee size={18} />, label: 'Work Life Balance' },
  { icon: <GraduationCap size={18} />, label: 'Career Growth' },
  { icon: <Users size={18} />, label: 'Inclusive Culture' },
  { icon: <Shield size={18} />, label: 'Health & Wellness' },
];

// ── Job Application Modal ──────────────────────────────────────────────────────
const JobApplyModal = ({
  role,
  onClose,
}: {
  role: Role;
  onClose: () => void;
}) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name');
    const phone = fd.get('phone');
    const email = fd.get('email');
    const linkedin = fd.get('linkedin') || 'Not provided';

    const waText =
      `💼 *New Job Application – ${role.title}*\n\n` +
      `🏢 *Department:* ${role.dept}\n` +
      `📍 *Location:* ${role.location}\n` +
      `🕐 *Type:* ${role.type}\n` +
      `🛠 *Skills Required:* ${role.tags.join(', ')}\n\n` +
      `─────────────────────\n` +
      `👤 *Applicant Details*\n` +
      `─────────────────────\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*LinkedIn:* ${linkedin}\n\n` +
      `📌 *Role Description:*\n${role.exp}\n\n` +
      `🌐 Source: itcareer.co/careers`;

    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/19457329000?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-[2.5rem] w-full max-w-lg shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-[#0057FF] to-[#00C4CC] p-8 text-white">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={16} />
            </button>
            <div className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-2">
              {role.dept} · {role.type}
            </div>
            <h2 className="text-xl font-heading font-black mb-1 leading-snug pr-10">
              {role.title}
            </h2>
            <div className="flex items-center gap-1.5 text-[11px] font-bold opacity-80">
              <MapPin size={11} /> {role.location}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/20 text-white text-[10px] font-black uppercase tracking-wide px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Body */}
          {submitted ? (
            <div className="p-8 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                <CheckCircle2 size={32} className="text-green-500" />
              </div>
              <h3 className="font-heading font-black text-slate-900 text-lg">Application Sent!</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Your application for <strong>{role.title}</strong> has been submitted via WhatsApp.
                Our team will reach out to you soon.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-8 py-3 bg-gradient-to-r from-[#0057FF] to-[#00C4CC] text-white rounded-2xl font-black text-sm hover:scale-105 transition-transform"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <p className="text-slate-500 text-xs font-medium leading-relaxed">
                Fill in a few quick details and we'll receive your application instantly via WhatsApp.
              </p>

              {/* Name */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3">
                  <select
                    name="countryCode"
                    className="w-20 px-3 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-900 appearance-none text-center focus:outline-none"
                  >
                    <option>+1</option>
                    <option>+91</option>
                    <option>+44</option>
                    <option>+61</option>
                  </select>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone number"
                    className="flex-1 px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                />
              </div>

              {/* LinkedIn (optional) */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest">
                  LinkedIn Profile{' '}
                  <span className="text-slate-400 font-medium normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  name="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#0057FF] to-[#00C4CC] text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-500/20"
              >
                <Send size={16} /> Submit Application via WhatsApp
              </button>
              <p className="text-center text-[10px] text-slate-400 font-medium">
                Your application will be sent directly to our team via WhatsApp.
              </p>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ── Main Page ──────────────────────────────────────────────────────────────────
export const CareersPage = ({ onNavigate, onTalkToCounselor }: CareersPageProps) => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  return (
    <div className="bg-white">
      {/* Modal */}
      {selectedRole && (
        <JobApplyModal role={selectedRole} onClose={() => setSelectedRole(null)} />
      )}

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0057FF]/10 rounded-full blur-[100px] -z-10 -translate-x-1/4" />

        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-left order-2 lg:order-1"
            >
              <div className="inline-block bg-blue-50 border border-blue-100 text-[#0057FF] font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Careers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 leading-tight mb-6">
                Join Our{' '}
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC] italic pb-1 pr-2">
                  Development Team
                </span>
              </h1>
              <p className="text-slate-500 text-base md:text-lg font-medium mb-10 leading-relaxed max-w-xl">
                Build the future with us. We're a team of innovators, learners and problem-solvers
                working together to create impactful solutions.
              </p>

              {/* Culture pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {cultureItems.map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-2"
                  >
                    <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center text-[#0057FF] shadow-sm border border-blue-50">
                      {item.icon}
                    </div>
                    <h4 className="font-heading font-black text-slate-900 text-[12px] leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('open-positions');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#0057FF] to-[#00C4CC] text-white rounded-xl font-black text-sm flex items-center gap-2 shadow-lg shadow-cyan-100 group"
                >
                  Explore Roles{' '}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onTalkToCounselor}
                  className="px-8 py-3.5 bg-white text-[#0057FF] border border-blue-100 rounded-xl font-black text-sm hover:bg-blue-50 transition-all flex items-center gap-2 shadow-sm"
                >
                  Talk to Us <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>

            {/* Right – image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-slate-50 aspect-[4/3] shadow-2xl shadow-blue-900/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="Our Team Working"
                  className="w-full h-full object-cover"
                />
                {/* Floating badge – far right of image */}
                <div className="absolute top-5 right-4 bg-gradient-to-r from-[#0057FF]/90 to-[#00C4CC]/90 backdrop-blur-md text-white text-[11px] font-black px-4 py-2 rounded-2xl shadow-lg z-20 max-w-[180px] text-center leading-tight">
                  🚀 Let's build something amazing together!
                </div>
              </div>

              {/* 20+ badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-6 -right-4 md:-right-8 bg-white p-5 rounded-3xl shadow-xl shadow-blue-500/10 z-20 border border-slate-50"
              >
                <div className="text-2xl font-heading font-black text-[#0057FF]">20+</div>
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-tight">Open Roles</div>
              </motion.div>

              {/* 100% remote */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-5 rounded-3xl shadow-xl shadow-blue-500/10 z-20 border border-slate-50"
              >
                <div className="text-2xl font-heading font-black text-[#00C4CC]">100%</div>
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-tight">Remote Friendly</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Open Positions ────────────────────────────────────── */}
      <section id="open-positions" className="py-20 bg-slate-50/60 border-t border-slate-100">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-50 border border-blue-100 text-[#0057FF] font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Open Positions
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">
              Explore exciting career opportunities and{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC]">
                find the perfect role
              </span>{' '}
              for you.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openRoles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-slate-100 rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col gap-4 group"
              >
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="font-heading font-black text-slate-900 text-base md:text-lg leading-tight mb-1">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold text-slate-400">
                      <span className="flex items-center gap-1">
                        <Briefcase size={11} /> {role.dept}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={11} /> {role.location}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-blue-50 border border-blue-100 text-[#0057FF] font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shrink-0">
                    <Clock size={10} /> {role.type}
                  </span>
                </div>

                <p className="text-slate-500 text-[12px] font-medium leading-relaxed">{role.exp}</p>

                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-50 border border-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-wide px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedRole(role)}
                  className="mt-auto self-start px-6 py-2.5 bg-gradient-to-r from-[#0057FF] to-[#00C4CC] text-white rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform shadow-md shadow-cyan-100 group-hover:shadow-lg"
                >
                  Apply Now <ArrowRight size={13} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Cards ─────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-[2rem] p-8 flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0057FF] shadow-sm border border-blue-100">
                <Users size={22} />
              </div>
              <h3 className="font-heading font-black text-slate-900 text-lg">
                I'm a Great Fit for Another Role
              </h3>
              <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
                Don't see a role that matches your skills? Share your profile with us and we'll
                consider you for future opportunities.
              </p>
              <button
                onClick={() => onNavigate('Apply Now')}
                className="self-start px-6 py-2.5 bg-gradient-to-r from-[#0057FF] to-[#00C4CC] text-white rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform shadow-md shadow-cyan-100"
              >
                Apply for a Different Role <ArrowRight size={13} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-100 rounded-[2rem] p-8 flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#00C4CC] shadow-sm border border-cyan-100">
                <Briefcase size={22} />
              </div>
              <h3 className="font-heading font-black text-slate-900 text-lg">
                Request a New Job Requirement
              </h3>
              <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
                Have a specific role in mind? Let us know what you're looking for and we'll work
                together to find the right match.
              </p>
              <button
                onClick={onTalkToCounselor}
                className="self-start px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm"
              >
                Request a New Role <ChevronRight size={13} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Join ──────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-100">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-3 tracking-tight">
              Why Join{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC]">
                ITCareer.co?
              </span>
            </h2>
            <p className="text-slate-400 text-sm font-medium max-w-lg mx-auto">
              We offer a culture that values innovation, collaboration and growth.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {whyJoin.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="bg-white border border-slate-100 rounded-2xl px-6 py-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center text-[#0057FF]">
                  {item.icon}
                </div>
                <span className="font-black text-slate-700 text-[13px]">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Big blue CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0057FF] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00C4CC]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-heading font-black mb-3">
                Ready to Build Your Career with Us?
              </h2>
              <p className="text-blue-100 text-sm font-medium mb-8 max-w-md mx-auto leading-relaxed opacity-90">
                Join a team that values innovation, collaboration and growth.
              </p>
              <button
                onClick={() => {
                  const el = document.getElementById('open-positions');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0057FF] rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-blue-900/10"
              >
                Explore Open Roles <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
