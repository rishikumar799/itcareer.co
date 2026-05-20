// src/CareersPage.tsx
import { useState } from 'react';
import { motion } from 'motion/react';
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
} from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: string) => void;
  onTalkToCounselor: () => void;
}

const cultureItems = [
  {
    icon: <Lightbulb size={22} />,
    title: 'Innovative Projects',
    desc: 'Work on real-world impactful projects.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Growth & Learning',
    desc: 'Continuous learning and self-development.',
  },
  {
    icon: <Users size={22} />,
    title: 'Great Environment',
    desc: 'Collaborative, inclusive and supportive culture.',
  },
];

const openRoles = [
  {
    title: 'Senior Full Stack Developer',
    type: 'Full Time',
    dept: 'Development',
    location: 'Hyderabad, India',
    exp: '3+ years of experience in scalable web applications using modern technologies.',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
  },
  {
    title: 'Backend Developer (Node.js)',
    type: 'Full Time',
    dept: 'Development',
    location: 'Bangalore, India',
    exp: '3+ years of experience in developing RESTful APIs and microservices.',
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Frontend Developer (React)',
    type: 'Full Time',
    dept: 'Development',
    location: 'Remote',
    exp: '2-4 years of experience in building responsive and interactive user interfaces.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'UI/UX Designer',
    type: 'Full Time',
    dept: 'Design',
    location: 'Hyderabad, India',
    exp: '2-4 years of experience in designing user-friendly and visually appealing interfaces.',
    tags: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping'],
  },
];

const whyJoin = [
  { icon: <DollarSign size={20} />, label: 'Competitive Salary' },
  { icon: <Coffee size={20} />, label: 'Work Life Balance' },
  { icon: <GraduationCap size={20} />, label: 'Career Growth' },
  { icon: <Users size={20} />, label: 'Inclusive Culture' },
  { icon: <Shield size={20} />, label: 'Health & Wellness' },
];

export const CareersPage = ({ onNavigate, onTalkToCounselor }: CareersPageProps) => {
  return (
    <div className="bg-white">
      {/* ── Hero ── */}
      <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden bg-white">
        {/* Background glows – same pattern as About / Services */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0057FF]/10 rounded-full blur-[100px] -z-10 -translate-x-1/4" />

        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-left"
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
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#0057FF] shadow-sm border border-blue-50">
                      {item.icon}
                    </div>
                    <h4 className="font-heading font-black text-slate-900 text-[12px] leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium leading-snug">
                      {item.desc}
                    </p>
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
                  Explore Roles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onTalkToCounselor}
                  className="px-8 py-3.5 bg-white text-[#0057FF] border border-blue-100 rounded-xl font-black text-sm hover:bg-blue-50 transition-all flex items-center gap-2 shadow-sm"
                >
                  Talk to Us <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-slate-50 aspect-[4/3] shadow-2xl shadow-blue-900/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="Our Team Working"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-6 -right-6 bg-white p-5 rounded-3xl shadow-xl shadow-blue-500/10 z-20 border border-slate-50"
              >
                <div className="text-2xl font-heading font-black text-[#0057FF]">20+</div>
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-tight">Open Roles</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl shadow-blue-500/10 z-20 border border-slate-50"
              >
                <div className="text-2xl font-heading font-black text-[#00C4CC]">100%</div>
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-tight">Remote Friendly</div>
              </motion.div>

              {/* Floating card at top right with text */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-[#0057FF]/90 to-[#00C4CC]/90 backdrop-blur-md text-white text-[11px] font-black px-4 py-2.5 rounded-2xl z-20 shadow-lg">
                Let's build something amazing together! 🚀
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section id="open-positions" className="py-20 bg-slate-50/60 border-t border-slate-100">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-50 border border-blue-100 text-[#0057FF] font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Open Positions
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">
              Explore exciting career opportunities{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC]">
                and find the perfect role
              </span>{' '}
              for you.
            </h2>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {openRoles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-slate-100 rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col gap-4"
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
                  <span className="inline-flex items-center gap-1 bg-blue-50 border border-blue-100 text-[#0057FF] font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
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
                  onClick={() => onNavigate('Apply Now')}
                  className="mt-auto self-start px-6 py-2.5 bg-gradient-to-r from-[#0057FF] to-[#00C4CC] text-white rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform shadow-md shadow-cyan-100"
                >
                  Apply Now <ArrowRight size={13} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Row (Don't see right role + Request new) ── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-[2rem] p-8 flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0057FF] shadow-sm border border-blue-100">
                <Users size={22} />
              </div>
              <div>
                <h3 className="font-heading font-black text-slate-900 text-lg mb-2">
                  I'm a Great Fit for Another Role
                </h3>
                <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-5">
                  Don't see a role that matches your skills? Share your profile with us and we'll
                  consider you for future opportunities.
                </p>
              </div>
              <button
                onClick={() => onNavigate('Apply Now')}
                className="self-start px-6 py-2.5 bg-gradient-to-r from-[#0057FF] to-[#00C4CC] text-white rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform shadow-md shadow-cyan-100"
              >
                Apply for a Different Role <ArrowRight size={13} />
              </button>
            </motion.div>

            {/* Card 2 */}
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
              <div>
                <h3 className="font-heading font-black text-slate-900 text-lg mb-2">
                  Request a New Job Requirement
                </h3>
                <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-5">
                  Have a specific role in mind? Let us know what you're looking for and we'll work
                  together.
                </p>
              </div>
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

      {/* ── Why Join ITCareer ── */}
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

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {whyJoin.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-slate-100 rounded-2xl px-6 py-4 flex items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center text-[#0057FF]">
                  {item.icon}
                </div>
                <span className="font-black text-slate-700 text-[13px]">{item.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA banner */}
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
