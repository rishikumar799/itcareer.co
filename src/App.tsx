import { useState, useEffect, FormEvent } from 'react';
import {
  Code2,
  ArrowRight,
  Star,
  Menu,
  X,
  CheckCircle2,
  Monitor,
  Users,
  Globe,
  Award,
  Briefcase,
  Sparkles,
  Terminal,
  Layout,
  Database,
  BarChart,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  BookOpen,
  Trophy,
  UserCheck,
  PencilLine,
  Clock,
  Cloud,
  Cpu,
  Layers,
  Building,
  Send,
  MessageSquare,
  ChevronDown,
  GraduationCap,
  MessageCircle,
  Shield,
  FileText,
  Moon,
  Sun
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from './images/logo.png';
import amazonLogo from './images/amazon.webp';
import capgeminiLogo from './images/capgemini.webp';
import hclLogo from './images/hcl.png';
import tcsLogo from './images/tcs logo.png';
import techMahindraLogo from './images/techmahindra.png';
import wiproLogo from './images/wiprologo.png';
import { CareersPage } from './CareersPage';
import homeImg from './images/home.png';
import aboutImg from './images/about.png';
import servicesImg from './images/services.png';
import applyNowImg from './images/applynow.png';
import placementsImg from './images/placements.png';
import coursesImg from './images/courses.png';
import contactUsImg from './images/contactus.png';
import careersImg from './images/careers.png';
import whoweareImg from './images/whoweare.png';
// --- Navbar ---
const Navbar = ({ activePage, setActivePage, onTalkToCounselor, isDarkMode, toggleDarkMode }: { activePage: string, setActivePage: (page: string) => void, onTalkToCounselor: () => void, isDarkMode: boolean, toggleDarkMode: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About Us', 'Services', 'Courses', 'Placements', 'Contact Us', 'Careers'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (isDarkMode ? 'bg-slate-900/95 shadow-lg' : 'bg-white/95 shadow-sm') : 'bg-transparent'} backdrop-blur-md py-2 md:py-3`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <button onClick={() => setActivePage('Home')} className="flex items-center group transition-transform hover:scale-105 active:scale-95">
          <img src={logo} alt="ITCareer Logo" className="w-32 h-12 md:w-40 md:h-16 object-contain" />
        </button>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => setActivePage(link)}
              className={`text-[13px] font-bold tracking-tight transition-all relative py-2 px-4 rounded-xl ${activePage === link
                ? 'text-white bg-gradient-to-r from-[#0057FF] to-[#00C4CC] shadow-lg shadow-cyan-500/20'
                : (isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-[#0057FF]')
                }`}
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setActivePage('Apply Now')}
            className={`hidden sm:block px-8 py-3 bg-gradient-to-r from-[#0057FF] to-[#00C4CC] text-white rounded-xl text-[13px] font-black uppercase tracking-widest hover:scale-[1.05] transition-all shadow-lg shadow-cyan-500/10 ${activePage === 'Apply Now' ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
          >
            Apply Now
          </button>

          <button className={`lg:hidden p-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`absolute top-full left-0 right-0 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'} border-t shadow-2xl overflow-hidden lg:hidden`}
          >
            <div className="p-6 flex flex-col gap-2">
              {links.map(link => (
                <button
                  key={link}
                  onClick={() => { setActivePage(link); setIsMobileMenuOpen(false); }}
                  className={`text-base font-bold text-left px-5 py-3 rounded-2xl transition-all ${activePage === link
                    ? 'text-white bg-gradient-to-r from-[#0057FF] to-[#00C4CC]'
                    : (isDarkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-900 hover:bg-slate-50')
                    }`}
                >
                  {link}
                </button>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => { setActivePage('Apply Now'); setIsMobileMenuOpen(false); }}
                  className="w-full py-4 bg-gradient-to-r from-[#0057FF] to-[#00C4CC] text-white rounded-2xl font-black text-sm uppercase tracking-widest text-center shadow-lg"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- About Us Specific Components ---

const AboutHero = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <section className="relative pt-12 md:pt-20 pb-12 overflow-hidden bg-white">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0057FF]/10 rounded-full blur-[100px] -z-10 -translate-x-1/4"></div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-left"
          >
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC] font-black text-xs uppercase tracking-widest mb-6 px-4 py-1.5 bg-blue-50/50 rounded-full inline-block border border-blue-100">About ITCareer</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 leading-tight mb-8">
              Building Future Tech Professionals & <br />
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC] italic pb-1 pr-2">Enterprise Solutions</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg font-medium mb-10 leading-relaxed max-w-xl">
              Empowering students and businesses through world-class software training, placement assistance, and innovative application development services.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => onNavigate('Courses')}
                className="px-8 py-3.5 bg-gradient-to-r from-[#0057FF] to-[#00C4CC] text-white rounded-xl font-black text-sm flex items-center gap-2 shadow-lg shadow-cyan-100 group"
              >
                Explore Courses <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('Contact Us')}
                className="px-8 py-3.5 bg-white text-[#0057FF] border border-blue-100 rounded-xl font-black text-sm hover:bg-blue-50 transition-all flex items-center gap-2 shadow-sm"
              >
                Contact Us <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>

          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-slate-50 aspect-[4/3]">
              <img
                src={aboutImg}
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-10 -right-4 md:-right-10 bg-white p-6 rounded-3xl shadow-xl shadow-blue-500/10 z-20 border border-slate-50"
            >
              <div className="text-2xl md:text-3xl font-heading font-black text-[#0057FF]">500+</div>
              <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-tight">Students Trained</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-1/2 -right-8 md:-right-16 bg-white p-6 rounded-3xl shadow-xl shadow-blue-500/10 z-20 border border-slate-50"
            >
              <div className="text-2xl md:text-3xl font-heading font-black text-[#0057FF]">200+</div>
              <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-tight">Placements</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute -bottom-10 right-0 bg-white p-6 rounded-3xl shadow-xl shadow-blue-500/10 z-20 border border-slate-50"
            >
              <div className="text-2xl md:text-3xl font-heading font-black text-[#0057FF]">500+</div>
              <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-tight">MNC Placements</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-8 border-white group aspect-[4/3]">
              <img
                src={whoweareImg}
                alt="Who We Are"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-10 left-10 py-3 px-6 bg-slate-900/90 backdrop-blur-md rounded-2xl text-white font-black text-lg flex items-center gap-3">
              <div className="w-8 h-8 bg-[#0057FF] rounded-lg flex items-center justify-center">
                <Code2 size={20} />
              </div>
              ITCareer
            </div>
          </div>

          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-heading font-black text-slate-900 mb-6 px-4 py-2 bg-slate-50 rounded-2xl w-fit">
              Who We Are
            </h2>
            <p className="text-slate-500 font-medium mb-8 leading-relaxed text-sm md:text-base">
              ITCareer is a modern IT training and software development company focused on transforming careers and helping businesses build scalable digital solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                'Industry-focused training',
                'Placement assistance',
                'Enterprise application development',
                'Real-world project experience',
                'Career mentorship'
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-slate-800 font-bold text-xs uppercase tracking-tight">
                  <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50/50 p-6 rounded-[2rem] border border-blue-100/50">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#0057FF] shadow-sm mb-4">
                  <Sparkles size={20} />
                </div>
                <h4 className="text-blue-900 font-black text-[11px] uppercase tracking-widest mb-3">Our Mission</h4>
                <p className="text-slate-500 text-[11px] font-medium leading-relaxed">
                  To deliver industry-aligned training and career support that transforms students into skilled professionals and empowers businesses with innovative digital solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-blue-50 text-[#0057FF] rounded-xl flex items-center justify-center shadow-sm mb-4">
                  <Monitor size={20} />
                </div>
                <h4 className="text-slate-900 font-black text-[11px] uppercase tracking-widest mb-3">Our Vision</h4>
                <p className="text-slate-500 text-[11px] font-medium leading-relaxed">
                  To be a global leader in technology education and enterprise solutions, creating impact through knowledge, innovation, and career transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SpecializedCareerPrograms = ({ onOpenCourse }: { onOpenCourse: (c: any) => void }) => {
  const programs = [
    {
      name: 'Java Development',
      desc: 'Master Core Java, OOPs, Collections, Spring, Hibernate and build enterprise applications.',
      dur: '4-6 Months',
      level: 'Beginner to Advanced',
      icon: <Terminal size={22} />,
      color: 'blue'
    },
    {
      name: 'Data Engineering',
      desc: 'Learn to build scalable data pipelines, work with big data technologies and modern cloud tools.',
      dur: '4-6 Months',
      level: 'Intermediate to Advanced',
      icon: <Database size={22} />,
      color: 'indigo'
    },
    {
      name: 'Forward Deployed Engineering',
      desc: 'Work on client projects, solve real-world problems and gain hands-on field engineering experience.',
      dur: '4-8 Months',
      level: 'Intermediate',
      icon: <ArrowRight size={22} />,
      color: 'cyan'
    },
    {
      name: 'Automation Testing',
      desc: 'Learn Selenium, TestNG, JUnit and advanced automation testing frameworks.',
      dur: '3-6 Months',
      level: 'Beginner to Advanced',
      icon: <Sparkles size={22} />,
      color: 'emerald'
    },
    {
      name: 'SAP Technologies',
      desc: 'Get trained in SAP modules including FI, CO, MM, SD and build a strong career in SAP.',
      dur: '4-6 Months',
      level: 'Intermediate',
      icon: <Cpu size={22} />,
      color: 'indigo'
    },
    {
      name: 'Healthcare Data Engineering',
      desc: 'Specialized program on healthcare data, ETL, analytics and real-world healthcare solutions.',
      dur: '4-6 Months',
      level: 'Intermediate',
      icon: <Briefcase size={22} />,
      color: 'rose'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-black text-slate-900 mb-4 tracking-tight">Specialized Training Programs</h2>
          <p className="text-slate-500 text-sm font-medium">Industry-aligned courses designed to build in-demand skills and accelerate your career.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-50 text-[#0057FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                {p.icon}
              </div>
              <h3 className="text-xl font-heading font-black text-slate-900 mb-4">{p.name}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 flex-grow">{p.desc}</p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase leading-none">Duration: {p.dur}</p>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase leading-none">Level: {p.level}</p>
                </div>
                <button
                  onClick={() => onOpenCourse({ ...p, title: p.name, description: p.desc, icon: p.icon })}
                  className="text-[11px] font-black text-[#0057FF] uppercase tracking-wider flex items-center gap-1.5 group/btn"
                >
                  Learn More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const EnterpriseSoftwareDevelopmentServices = ({ onOpenCourse }: { onOpenCourse: (c: any) => void }) => {
  const services = [
    { title: 'Web Applications', icon: <Monitor size={24} />, desc: 'Modern and responsive web application development.' },
    { title: 'Enterprise Solutions', icon: <Layers size={24} />, desc: 'Scalable enterprise platforms to grow your business.' },
    { title: 'Automation Solutions', icon: <Sparkles size={24} />, desc: 'Workflow automation and process optimization.' },
    { title: 'Healthcare Applications', icon: <Briefcase size={24} />, desc: 'HIPAA-compliant healthcare software solutions.' },
    { title: 'Data Engineering Solutions', icon: <Database size={24} />, desc: 'Big data pipelines, analytics and cloud integration.' },
    { title: 'Custom Business Software', icon: <Code2 size={24} />, desc: 'Custom software solutions tailored to your requirements.' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-black text-slate-900 mb-4 tracking-tight">Software Development Services (For Businesses)</h2>
          <p className="text-slate-500 text-sm font-medium">We build innovative, scalable and secure in-house applications tailored to your business needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-slate-50 p-6 md:p-8 rounded-[2.5rem] border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group h-full flex flex-col">
              <div className="w-14 h-14 bg-white text-[#0057FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0057FF] group-hover:text-white transition-all shadow-sm">
                {s.icon}
              </div>
              <h3 className="font-heading font-black text-slate-900 text-sm mb-3 leading-tight uppercase tracking-tight">{s.title}</h3>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed mb-6">{s.desc}</p>
              <button
                onClick={() => onOpenCourse({ title: s.title, description: s.desc, icon: s.icon })}
                className="mt-auto text-[10px] font-black text-[#0057FF] uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Get Details <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Mentors = () => {
  const mentors = [
    { name: 'Rahul Mehta', role: 'Tech Lead', exp: '10+ Years Exp.', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&eyebrows=default&eyes=default&mouth=smile' },
    { name: 'Priya Nair', role: 'Data Architect', exp: '8+ Years Exp.', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka&eyebrows=default&eyes=default&mouth=smile' },
    { name: 'Arjun Rao', role: 'SAP Consultant', exp: '9+ Years Exp.', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&eyebrows=default&eyes=default&mouth=smile' },
    { name: 'Sneha Iyer', role: 'QA Lead', exp: '7+ Years Exp.', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara&eyebrows=default&eyes=default&mouth=smile' },
    { name: 'Karan Malhotra', role: 'DevOps Engineer', exp: '8+ Years Exp.', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karan&eyebrows=default&eyes=default&mouth=smile' },
    { name: 'Meera Joshi', role: 'Data Engineer', exp: '7+ Years Exp.', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera&eyebrows=default&eyes=default&mouth=smile' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-slate-900 tracking-tight">Meet Our Mentors</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10">
          {mentors.map((m, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-50 border-4 border-white shadow-md mb-5 grayscale hover:grayscale-0 transition-all duration-500 group-hover:-translate-y-2">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-heading font-black text-slate-900 text-[13px] mb-1">{m.name}</h4>
              <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">{m.role}</p>
              <p className="text-[9px] text-blue-500 font-black uppercase tracking-[0.2em]">{m.exp}</p>
              <div className="flex gap-4 mt-5">
                <Linkedin size={14} className="text-slate-300 hover:text-[#0057FF] cursor-pointer transition-colors" />
                <Twitter size={14} className="text-slate-300 hover:text-[#00C4CC] cursor-pointer transition-colors" />
                <Globe size={14} className="text-slate-300 hover:text-emerald-500 cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OfficeSection = ({ onTalkToCounselor }: { onTalkToCounselor: () => void }) => {
  return (
    <section className="py-16 bg-white border-t border-slate-50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-heading font-black text-slate-900 text-[11px] uppercase tracking-widest mb-2">Address</h4>
                <p className="text-slate-500 font-bold text-sm leading-relaxed">
                  3401 Cluster Road <br /> Suite #164, <br /> Plano, Texas 75023
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#00C4CC] flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="font-heading font-black text-slate-900 text-[11px] uppercase tracking-widest mb-2">Call Us</h4>
                <button
                  onClick={onTalkToCounselor}
                  className="text-slate-500 hover:text-blue-600 transition-colors font-extrabold text-base md:text-lg text-left"
                >
                  +1 (945) 732-9000
                </button>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0057FF] flex items-center justify-center shrink-0 shadow-sm border border-blue-100">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-heading font-black text-slate-900 text-[11px] uppercase tracking-widest mb-2">Email</h4>
                <a
                  href="mailto:info@itcareer.co?subject=Inquiry%20about%20IT%20Training%20%26%20Services&body=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20IT%20training%20programs%20and%20services.%20Please%20contact%20me%20with%20more%20information.%20Thank%20you!"
                  className="text-slate-500 hover:text-blue-600 transition-colors font-extrabold text-base md:text-lg text-left inline-block"
                >
                  info@itcareer.co
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-100 rounded-[3rem] aspect-square md:aspect-video overflow-hidden shadow-2xl relative border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&q=80&w=1200"
                alt="Map Location"
                className="w-full h-full object-cover opacity-60 grayscale"
              />
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-multiply"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-10 h-10 bg-primary rounded-full animate-ping absolute -inset-0 opacity-20"></div>
                  <div className="w-5 h-5 bg-primary rounded-full relative z-10 border-4 border-white shadow-lg"></div>
                </div>
              </div>
              <div className="absolute top-8 right-8 p-5 bg-white rounded-2xl shadow-xl border border-slate-50 max-w-[180px]">
                <h5 className="font-black text-[10px] text-slate-900 mb-1.5 uppercase tracking-tight">Headquarters</h5>
                <p className="text-[9px] text-slate-500 font-bold leading-tight">3401 Cluster Road, Suite #164, Plano, Texas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Services Page Components ---

const ServicesHero = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-[#0057FF]/5 rounded-full blur-[80px] -z-10"></div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-left"
          >
            <div className="bg-cyan-50 text-[#00C4CC] font-black text-[10px] uppercase tracking-widest mb-6 px-4 py-1.5 rounded-full inline-block border border-cyan-100">Our Services</div>
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-heading font-black text-slate-900 leading-[1.1] mb-8">
              Comprehensive Training, Placement Assistance & Software <span className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-[#0057FF] to-[#00C4CC] py-1">Solutions</span>
            </h1>
            <p className="text-slate-500 text-sm md:text-base font-medium mb-10 leading-relaxed max-w-xl">
              At ITCareer, we empower individuals and businesses with industry-focused training, career support, and innovative software development services.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('Courses')}
                className="px-8 py-3.5 bg-gradient-to-br from-[#0057FF] to-[#00C4CC] text-white rounded-xl font-black text-sm flex items-center gap-2 shadow-lg shadow-cyan-100 group"
              >
                Explore Courses <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('Contact Us')}
                className="px-8 py-3.5 bg-white text-[#0057FF] border border-blue-100 rounded-xl font-black text-sm hover:bg-blue-50 transition-all flex items-center gap-2 shadow-sm"
              >
                Contact Us <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>

          <div className="relative">
            {/* Dots Grid Decoration */}
            <div className="absolute -top-10 -right-10 grid grid-cols-6 gap-2 opacity-20 hidden md:grid">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-[#0057FF] rounded-full"></div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-slate-50 aspect-[4/3] shadow-2xl shadow-blue-900/10">
                <img src={servicesImg} alt="Our Services" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesWhyChoose = () => {
  const reasons = [
    { title: 'Industry Expert Trainers', icon: <Users size={20} />, desc: 'Learn from certified professionals with real-world experience.' },
    { title: 'Real-world Projects', icon: <Code2 size={20} />, desc: 'Work on live projects and build your portfolio.' },
    { title: 'Updated Curriculum', icon: <BookOpen size={20} />, desc: 'Industry-aligned curriculum updated regularly.' },
    { title: 'Flexible Learning Options', icon: <Clock size={20} />, desc: 'Online & offline classes to fit your schedule.' },
    { title: 'Placement Support', icon: <Trophy size={20} />, desc: '100% placement assistance and career guidance.' },
    { title: 'Affordable Pricing', icon: <Sparkles size={20} />, desc: 'High-quality training at cost-effective prices.' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-black text-slate-900 mb-4 tracking-tight">Why Choose ITCareer?</h2>
          <p className="text-slate-500 text-sm font-medium">We are committed to your success with quality training and real-world experience.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="flex flex-col items-center text-center group cursor-default">
              <div className="w-14 h-14 bg-blue-50 text-[#0057FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm border border-blue-100">
                {r.icon}
              </div>
              <h4 className="font-heading font-black text-slate-900 text-[11px] mb-3 uppercase tracking-tight">{r.title}</h4>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const ServicesPage = ({ onNavigate, onTalkToCounselor, onOpenCourse }: { onNavigate: (page: string) => void, onTalkToCounselor: () => void, onOpenCourse: (c: any) => void }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ServicesHero onNavigate={onNavigate} />
      <TechnologySuite />
      <SpecializedCareerPrograms onOpenCourse={onOpenCourse} />
      <MethodologySection onOpenCourse={onOpenCourse} onTalkToCounselor={onTalkToCounselor} />
      <EnterpriseSoftwareDevelopmentServices onOpenCourse={onOpenCourse} />
      <GlobalReach />
      <ServicesWhyChoose />
      <CTA onNavigate={onNavigate} onTalkToCounselor={onTalkToCounselor} />
    </motion.div>
  );
};

const TechnologySuite = () => {
  const techStacks = [
    { name: 'Backend', techs: ['Java', 'Spring Boot', 'Node.js', 'Python'], icon: <Database size={20} /> },
    { name: 'Frontend', techs: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'], icon: <Layout size={20} /> },
    { name: 'Cloud & DevOps', techs: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'], icon: <Cloud size={20} /> },
    { name: 'Data & AI', techs: ['BigQuery', 'Spark', 'TensorFlow', 'PowerBI'], icon: <BarChart size={20} /> }
  ];

  return (
    <section className="py-20 bg-slate-50/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-black text-slate-900 mb-4 tracking-tight">Our Technology Suite</h2>
          <p className="text-slate-500 text-sm font-medium">We leverage the most modern and scalable technology stacks to deliver excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStacks.map((stack, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-50 text-[#0057FF] rounded-xl flex items-center justify-center mb-6">
                {stack.icon}
              </div>
              <h4 className="font-heading font-black text-slate-900 mb-4">{stack.name}</h4>
              <div className="flex flex-wrap gap-2">
                {stack.techs.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-500 text-[10px] font-black uppercase rounded-full border border-slate-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MethodologySection = ({ onOpenCourse, onTalkToCounselor }: { onOpenCourse: (c: any) => void, onTalkToCounselor: () => void }) => {
  const points = [
    { title: 'Agile Delivery', desc: 'Frequent updates and iterative improvements for software solutions.' },
    { title: 'Learn-by-Doing', desc: 'Practical, hands-on training methodology for student success.' },
    { title: 'Quality First', desc: 'Rigorous testing and peer reviews for all development projects.' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="bg-[#0057FF] rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <Terminal size={400} className="translate-x-1/2" />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-black mb-6">Our Delivery <br /> Methodology</h2>
              <p className="text-blue-100 font-medium mb-10 leading-relaxed">
                Whether it's training or software development, we follow a strictly outcome-based methodology ensuring quality and speed.
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => onOpenCourse({ title: 'Our Methodology', description: ' outcome-based methodology ensuring quality and speed.', icon: <Terminal size={24} /> })}
                  className="px-8 py-3.5 bg-white text-[#0057FF] rounded-xl font-black text-sm hover:scale-105 transition-all shadow-xl"
                >
                  Learn More
                </button>
                <button
                  onClick={onTalkToCounselor}
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-xl"
                >
                  <Phone size={20} />
                </button>
              </div>
            </div>
            <div className="space-y-6">
              {points.map((p, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1">{p.title}</h4>
                    <p className="text-sm text-blue-100 opacity-80">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GlobalReach = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-heading font-black text-slate-900 mb-6 tracking-tight">Global Reach, <br /> Local Expertise</h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              Based in Plano, Texas, we serve individuals and businesses worldwide, bridging the gap between talent and opportunity.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Active Regions', value: 'North America, Asia' },
                { label: 'Top MNC Placements', value: '500+ Success' },
                { label: 'Success Rate', value: '98% Client Satisfaction' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-[11px] font-black uppercase text-slate-400 tracking-widest">{item.label}</span>
                  <span className="text-sm font-black text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square bg-slate-50 rounded-[3rem] border-8 border-white shadow-2xl overflow-hidden relative group">
              <img
                src={homeImg}
                alt="Global Office"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-multiply"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 bg-[#0057FF] rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white"
                >
                  <Globe size={32} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CoursesHero = () => {
  return (
    <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -z-10 translate-x-1/4 -translate-y-1/4"></div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-left"
          >
            <div className="bg-blue-50 text-[#0057FF] font-black text-[10px] uppercase tracking-widest mb-6 px-4 py-1.5 rounded-full inline-block border border-blue-100">Our Courses</div>
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-heading font-black text-slate-900 leading-[1.1] mb-8">
              Industry-Focused Courses <br /> for Your <span className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-[#0057FF] to-[#00C4CC] py-1">Dream Career</span>
            </h1>
            <p className="text-slate-500 text-sm md:text-base font-medium mb-10 leading-relaxed max-w-xl">
              Explore our specialized training programs designed by industry experts to help you learn, build, and get placed in top companies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center sm:items-start gap-3">
                <div className="w-10 h-10 bg-cyan-50 text-[#00C4CC] rounded-xl flex items-center justify-center shadow-sm">
                  <BookOpen size={20} />
                </div>
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter text-center sm:text-left">Industry-Aligned Curriculum</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 text-[#0057FF] rounded-xl flex items-center justify-center shadow-sm">
                  <Terminal size={20} />
                </div>
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter text-center sm:text-left">Real-world Projects</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-3">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-500 rounded-xl flex items-center justify-center shadow-sm">
                  <Trophy size={20} />
                </div>
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter text-center sm:text-left">100% Placement Assistance</span>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-slate-50 aspect-[4/3] shadow-2xl shadow-blue-900/10">
                <img
                  src={coursesImg}
                  alt="IT Courses"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DetailedCoursesGrid = ({ onOpenCourse }: { onOpenCourse: (c: any) => void }) => {
  const courses = [
    {
      title: 'Java Development',
      desc: 'Master Core Java, OOPs, Collections, Spring, Hibernate and build enterprise applications.',
      points: ['Core Java & OOPs', 'Spring Framework', 'Hibernate & JPA', 'RESTful Web Services', 'Real-world Projects'],
      duration: '4-6 Months',
      level: 'Beginner to Advanced',
      icon: <Terminal size={24} />,
      color: 'from-blue-600 to-blue-400'
    },
    {
      title: 'Data Engineering',
      desc: 'Learn to build scalable data pipelines and work with big data technologies and cloud tools.',
      points: ['SQL & Database Design', 'ETL & Data Pipelines', 'Apache Spark', 'Big Data Technologies', 'Cloud Platforms'],
      duration: '4-6 Months',
      level: 'Intermediate to Advanced',
      icon: <Database size={24} />,
      color: 'from-cyan-500 to-cyan-300'
    },
    {
      title: 'Forward Deployed Engineering',
      desc: 'Work on client projects, solve real-world problems and gain hands-on field engineering experience.',
      points: ['On-site Problem Solving', 'System Deployment', 'Client Interaction', 'Troubleshooting', 'Field Engineering Skills'],
      duration: '4-6 Months',
      level: 'Intermediate',
      icon: <ArrowRight size={24} />,
      color: 'from-blue-700 to-indigo-500'
    },
    {
      title: 'Automation Testing',
      desc: 'Learn Selenium, TestNG, JUnit and advanced automation testing frameworks.',
      points: ['Selenium WebDriver', 'TestNG Framework', 'API Testing', 'CI/CD Integration', 'Automation Projects'],
      duration: '3-4 Months',
      level: 'Beginner to Advanced',
      icon: <Sparkles size={24} />,
      color: 'from-emerald-500 to-teal-400'
    },
    {
      title: 'SAP Technologies',
      desc: 'Get trained in SAP modules including FI, CO, MM, SD and build a strong career in SAP.',
      points: ['SAP FICO / MM / SD', 'SAP Configuration', 'Business Processes', 'SAP Reporting', 'Real-time Projects'],
      duration: '4-6 Months',
      level: 'Intermediate',
      icon: <Cpu size={24} />,
      color: 'from-indigo-600 to-purple-500'
    },
    {
      title: 'Healthcare Data Engineering',
      desc: 'Specialized program on healthcare data, ETL, analytics and real-world healthcare solutions.',
      points: ['Healthcare Data Models', 'ETL for Healthcare', 'Data Analytics', 'HIPAA Compliance', 'Healthcare Projects'],
      duration: '4-6 Months',
      level: 'Intermediate',
      icon: <Briefcase size={24} />,
      color: 'from-rose-500 to-orange-400'
    }
  ];

  return (
    <section className="py-20 bg-slate-50/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-black text-slate-900 mb-4 tracking-tight">Our <span className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-[#0057FF] to-[#00C4CC] py-1">Specialized</span> Courses</h2>
          <p className="text-slate-500 text-sm font-medium">Choose from our industry-leading training programs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((c, i) => (
            <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all group flex flex-col h-full overflow-hidden relative">
              {/* Top accent icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {c.icon}
              </div>

              <h3 className="text-xl font-heading font-black text-slate-900 mb-4">{c.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{c.desc}</p>

              <ul className="space-y-4 mb-8 flex-grow">
                {c.points.map((p, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[11px] font-bold text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C4CC]"></div>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50 mt-auto">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-black uppercase">
                    <Clock size={12} /> {c.duration}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 font-black uppercase">
                    <Monitor size={12} /> {c.level}
                  </div>
                </div>
                <button
                  onClick={() => onOpenCourse({ ...c, description: c.desc })}
                  className="px-6 py-2.5 bg-white text-[#0057FF] border border-blue-100 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-50 transition-all flex items-center gap-2 group/btn"
                >
                  View Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-slate-100">
          {[
            { icon: <Monitor size={20} />, label: 'Expert Mentors', sub: 'Learn from industry professionals', color: 'text-blue-600 bg-blue-50' },
            { icon: <Code2 size={20} />, label: 'Hands-on Projects', sub: 'Build real-world applications', color: 'text-cyan-500 bg-cyan-50' },
            { icon: <Trophy size={20} />, label: 'Placement Support', sub: '100% placement assistance', color: 'text-indigo-500 bg-indigo-50' },
            { icon: <Clock size={20} />, label: 'Flexible Learning', sub: 'Online & offline training options', color: 'text-emerald-500 bg-emerald-50' }
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
              <div className={`w-10 h-10 ${f.color} rounded-xl flex items-center justify-center shadow-sm`}>
                {f.icon}
              </div>
              <div>
                <p className="text-[11px] font-black text-slate-900 uppercase tracking-tighter mb-1">{f.label}</p>
                <p className="text-[10px] font-medium text-slate-400 leading-none">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhatYouWillLearn = () => {
  const points = [
    { title: 'Strong Fundamentals', desc: 'Build a solid foundation with core concepts', icon: <Layers size={22} />, pos: 'lg:top-10 lg:left-0' },
    { title: 'Practical Learning', desc: 'Work on real-world projects and case studies', icon: <Code2 size={22} />, pos: 'lg:top-1/2 lg:-left-16 lg:-translate-y-1/2' },
    { title: 'Industry Tools', desc: 'Master modern tools and technologies', icon: <Monitor size={22} />, pos: 'lg:bottom-10 lg:left-0' },
    { title: 'Expert Guidance', desc: 'Learn from experienced industry professionals', icon: <Users size={22} />, pos: 'lg:top-10 lg:right-0' },
    { title: 'Career Preparation', desc: 'Interview prep, resume and soft skills training', icon: <Briefcase size={22} />, pos: 'lg:top-1/2 lg:-right-16 lg:-translate-y-1/2' },
    { title: 'Placement Support', desc: 'Get placed in top companies', icon: <Trophy size={22} />, pos: 'lg:bottom-10 lg:right-0' }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-heading font-black text-slate-900 mb-4 tracking-tight">What You'll Learn</h2>
          <p className="text-slate-500 text-sm font-medium">Our courses are designed to make you industry-ready</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Circle */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-slate-100 items-center justify-center">
            <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center p-8 border border-slate-50">
              <div className="w-full h-full bg-gradient-to-br from-[#0057FF] to-[#00C4CC] rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Code2 size={32} />
              </div>
            </div>
          </div>

          {/* Points Mapping */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:block relative min-h-[400px] lg:min-h-[500px] gap-12">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className={`flex flex-col items-center lg:items-start lg:absolute ${p.pos} max-w-[240px] text-center lg:text-left group`}
              >
                <div className="w-12 h-12 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm border border-slate-100">
                  {p.icon}
                </div>
                <h4 className="font-heading font-black text-slate-900 text-sm mb-2 uppercase tracking-tight">{p.title}</h4>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseCourses = () => {
  const reasons = [
    { title: 'Updated Curriculum', desc: 'Industry-relevant content updated regularly', icon: <Layout size={20} /> },
    { title: 'Real-world Projects', desc: 'Hands-on projects to build strong portfolio', icon: <Code2 size={20} /> },
    { title: 'Certification', desc: 'Industry-recognized completion certificates', icon: <Trophy size={20} /> },
    { title: 'Career Support', desc: 'End-to-end career guidance and support', icon: <Users size={20} /> },
    { title: 'Affordable Fees', desc: 'Quality education at affordable prices', icon: <Sparkles size={20} /> },
    { title: 'Lifetime Access', desc: 'Access learning resources anytime', icon: <Clock size={20} /> }
  ];

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-black text-slate-900 mb-4 tracking-tight">Why Choose ITCareer Courses?</h2>
          <p className="text-slate-500 text-sm font-medium">We provide the best learning experience to kickstart your career</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {reasons.map((r, i) => (
            <div key={i} className="flex flex-col items-center group cursor-default">
              <div className="w-12 h-12 bg-white text-[#0057FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all shadow-sm border border-slate-100">
                {r.icon}
              </div>
              <h4 className="font-heading font-black text-slate-900 text-[10px] mb-2 uppercase tracking-tight">{r.title}</h4>
              <p className="text-[9px] text-slate-400 font-medium leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoursesPage = ({ onOpenCourse, onNavigate, onTalkToCounselor }: { onOpenCourse: (c: any) => void, onNavigate: (page: string) => void, onTalkToCounselor: () => void }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <CoursesHero />
      <DetailedCoursesGrid onOpenCourse={onOpenCourse} />
      <WhatYouWillLearn />
      <WhyChooseCourses />
      <CTA onNavigate={onNavigate} onTalkToCounselor={onTalkToCounselor} />
    </motion.div>
  );
};

const PlacementsHero = () => {
  return (
    <section className="relative pt-16 md:pt-24 pb-20 overflow-hidden bg-white">
      {/* Background elements - Abstract shapes from image */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-100 rounded-full"></div>
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-blue-50 rounded-full"></div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="bg-blue-50 text-[#0057FF] font-black text-[10px] uppercase tracking-[0.2em] mb-8 px-5 py-2 rounded-full inline-block border border-blue-100 shadow-sm">Placements</div>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-heading font-black text-slate-900 leading-[1.05] mb-10 tracking-tight">
              Your Success, <br />
              Our <span className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-[#0057FF] to-[#00C4CC] py-1">Commitment</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg font-medium mb-12 leading-relaxed max-w-xl">
              We don't just train you, we help you build a career. <br />
              <span className="text-slate-900 font-bold">100% Placement Assistance</span> to help you land your dream job.
            </p>

            <div className="grid grid-cols-3 gap-8 md:gap-12">
              {[
                { val: '500+', label: 'Students Trained', icon: <Users size={20} />, color: 'blue' },
                { val: '200+', label: 'Successful Placements', icon: <Trophy size={20} />, color: 'cyan' },
                { val: '98%', label: 'Placement Rate', icon: <BarChart size={20} />, color: 'indigo' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2 text-slate-400">
                    {stat.icon}
                  </div>
                  <span className="text-3xl md:text-4xl font-heading font-black text-slate-900 tracking-tighter">{stat.val}</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="relative rounded-[4rem] overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.15)] group">
                <img
                  src={placementsImg}
                  alt="Success Professionals"
                  className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Placed Badge - Matching Image */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute top-10 right-10 bg-white p-5 rounded-3xl shadow-2xl flex flex-col items-center gap-2 border border-slate-50"
                >
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-inner">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-sm font-black text-slate-900 uppercase tracking-widest">Placed!</span>
                </motion.div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-12 -left-12 grid grid-cols-6 gap-3 opacity-10 hidden md:grid">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                ))}
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PlacementProcess = () => {
  const steps = [
    { title: 'Training', desc: 'Industry-focused training and skill building', icon: <Terminal size={24} /> },
    { title: 'Profile Building', desc: 'Resume, LinkedIn & portfolio development', icon: <PencilLine size={24} /> },
    { title: 'Interview Preparation', desc: 'Mock interviews, aptitude & technical training', icon: <Users size={24} /> },
    { title: 'Job Opportunities', desc: 'Access to 100+ hiring partners and job openings', icon: <Monitor size={24} /> },
    { title: 'Get Placed', desc: 'End-to-end support until you get placed', icon: <Trophy size={24} /> }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">Our <span className="text-[#0057FF]">Placement</span> Process</h2>
          <p className="text-slate-500 text-sm font-medium">A proven process designed to get you hired</p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">
          {/* No more dotted line, using arrows instead */}

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center relative z-10 w-full md:w-1/5 group shrink-0"
            >
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-white text-[#0057FF] border border-slate-100 rounded-[1.8rem] flex items-center justify-center shadow-md group-hover:bg-[#0057FF] group-hover:text-white group-hover:scale-110 transition-all duration-500 relative z-10">
                  {step.icon}
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border border-slate-100 text-slate-500 text-[10px] font-black w-7 h-7 rounded-full flex items-center justify-center shadow-sm z-20">
                  0{i + 1}
                </div>
              </div>
              <h4 className="font-heading font-black text-slate-900 text-sm mb-3 uppercase tracking-tight leading-tight">{step.title}</h4>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed px-2">{step.desc}</p>

              {/* Desktop Arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-[15%] text-slate-200">
                  <ArrowRight size={24} strokeWidth={1} />
                </div>
              )}

              {/* Mobile Connection Line */}
              {i < steps.length - 1 && (
                <div className="md:hidden mt-8 text-slate-200">
                  <ArrowRight size={24} className="rotate-90" strokeWidth={1} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HiringPartnersSection = () => {
  const partners = [
    { name: 'Google', logo: 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg' },
    { name: 'Amazon', logo: amazonLogo },
    { name: 'TCS', logo: tcsLogo },
    { name: 'Wipro', logo: wiproLogo },
    { name: 'Capgemini', logo: capgeminiLogo },
    { name: 'HCL', logo: hclLogo },
    { name: 'Tech Mahindra', logo: techMahindraLogo },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-6 tracking-tight">Get Placed In <span className="text-[#0057FF]">Top MNCs</span> With Help Of ITCareer</h2>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">Our students have successfully cracked interviews and landed roles in leading technology companies worldwide.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-center p-10 bg-white rounded-2xl border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group h-28 relative overflow-hidden"
            >
              <img src={p.logo} alt={p.name} className="max-h-8 md:max-h-10 w-auto transition-all" />
            </motion.div>
          ))}
        </div>

        {/* Button removed as per request */}
        {/* 
                <div className="text-center mt-16">
                     <button className="px-10 py-4 bg-white text-[#0057FF] border-2 border-blue-50 rounded-2xl font-black text-[12px] uppercase tracking-widest hover:bg-blue-50 transition-all flex items-center gap-2 mx-auto shadow-sm group">
                        View All Partners <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                </div>
                */}
      </div>
    </section>
  );
};

const PlacementHighlightsBanner = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#0057FF] rounded-[3.5rem] p-12 md:p-16 text-white overflow-hidden"
        >
          {/* Decorative abstract pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>

          <div className="relative z-10 text-center mb-16">
            <h2 className="text-3xl font-heading font-black tracking-tight uppercase tracking-[0.2em]">Placement Highlights</h2>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {[
              { val: '500+', label: 'Students Trained', icon: <Users size={36} strokeWidth={2.5} /> },
              { val: '200+', label: 'Successful Placements', icon: <Trophy size={36} strokeWidth={2.5} /> },
              { val: '500+', label: 'Successful Placements', icon: <Building size={36} strokeWidth={2.5} /> },
              { val: '98%', label: 'Placement Rate', icon: <CheckCircle2 size={36} strokeWidth={2.5} /> }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-5 group"
              >
                <div className="text-white/80 group-hover:scale-110 group-hover:text-white transition-all duration-500">
                  {stat.icon}
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl font-heading font-black mb-2 tracking-tighter">{stat.val}</span>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-100/70 text-center">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StudentSuccessStories = () => {
  const stories = [
    {
      name: 'Gamya D',
      role: 'Software Engineer',
      company: 'Walmart',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gamya&mouth=smile&backgroundColor=b6e3f4',
      quote: 'The training and placement support at ITCareer were exceptional. Secured a role at Walmart!'
    },
    {
      name: 'Dinesh V',
      role: 'DevOps Engineer',
      company: 'American Airlines',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/American_Airlines_logo_2013.svg',
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dinesh&mouth=smile&backgroundColor=ffdfbf',
      quote: 'Securing a job at American Airlines was a dream come true. The mock interviews were extremely helpful.'
    },
    {
      name: 'Doniya J',
      role: 'Java Developer',
      company: 'Cognizant',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg',
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Doniya&mouth=smile&backgroundColor=c0afef',
      quote: 'The hands-on project experience helped me clear the interviews at Cognizant easily.'
    },
    {
      name: '',
      role: 'Software Engineer',
      company: 'Workday',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Workday_Logo.svg',
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Workday&mouth=smile&backgroundColor=d1d4f9',
      quote: 'Secured a placement at Workday. The curriculum is highly aligned with industry standards.'
    },
    {
      name: '',
      role: 'Data Engineer',
      company: 'Elevance Health',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Elevance_Health_Logo.svg/512px-Elevance_Health_Logo.svg.png',
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elevance&mouth=smile&backgroundColor=ffd5dc',
      quote: 'Secured a placement at Elevance Health. Great mentors and outstanding career guidance.'
    },
    {
      name: '',
      role: 'Cloud Engineer',
      company: 'UBS Bank',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/UBS_logo.svg',
      img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=UBS&mouth=smile&backgroundColor=b6e3f4',
      quote: 'Secured a placement at UBS Bank. The practice labs and mock tests build solid foundation.'
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">Student <span className="text-[#0057FF]">Success</span> Stories</h2>
          <p className="text-slate-500 text-sm font-medium">Real learners, real success</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {stories.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-50 border-2 border-white shadow-sm ring-1 ring-slate-100">
                    <img src={s.img} alt={s.name || s.company} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-black text-slate-900 text-[13px] leading-tight mb-1">{s.name || '\u00A0'}</h4>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{s.role}</p>
                    <div className="h-4 flex items-center">
                      <img src={s.logo} alt={s.company} className="h-full w-auto" />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-[1.8] flex-grow italic mb-8">"{s.quote}"</p>
                <div className="flex gap-1 pt-6 border-t border-slate-50">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={11} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Button removed as per request */}
        {/* 
                <div className="text-center mt-16">
                     <button className="px-10 py-4 bg-white text-[#0057FF] border-2 border-blue-50 rounded-2xl font-black text-[12px] uppercase tracking-widest hover:bg-blue-50 transition-all flex items-center gap-2 mx-auto shadow-sm group">
                        View More Success Stories <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                </div>
                */}
      </div>
    </section>
  );
};

const ComprehensiveCareerSupport = () => {
  const supports = [
    { title: 'Resume Building', desc: 'ATS-friendly resume creation support.', icon: <PencilLine size={24} /> },
    { title: 'LinkedIn Profile', desc: 'Professional profile optimization.', icon: <Linkedin size={24} /> },
    { title: 'Mock Interviews', desc: 'Real-time mock interviews.', icon: <Monitor size={24} /> },
    { title: 'Aptitude Training', desc: 'Quantitative & logical reasoning.', icon: <Layers size={24} /> },
    { title: 'Soft Skills Training', desc: 'Communication & personality development.', icon: <Sparkles size={24} /> },
    { title: 'Placement Assistance', desc: 'End-to-end placement support.', icon: <Trophy size={24} /> }
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="section-container">
        <div className="text-center mb-20 px-4">
          <h2 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-4 tracking-tight">Comprehensive <span className="text-[#0057FF]">Career</span> Support</h2>
          <p className="text-slate-500 text-sm font-medium">We support you at every step of your career journey</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center px-4 md:px-0">
          {supports.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="w-16 h-16 bg-white text-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm border border-slate-100">
                {s.icon}
              </div>
              <h4 className="font-heading font-black text-slate-900 text-[11px] mb-3 uppercase tracking-tight leading-tight">{s.title}</h4>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed px-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TopPlacedRoles = () => {
  const roles = [
    { name: 'Software Developer', icon: <Code2 size={16} /> },
    { name: 'Java Developer', icon: <Terminal size={16} /> },
    { name: 'Data Engineer', icon: <Database size={16} /> },
    { name: 'QA Engineer', icon: <Monitor size={16} /> },
    { name: 'Business Analyst', icon: <Briefcase size={16} /> },
    { name: 'DevOps Engineer', icon: <Layers size={16} /> }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-black text-slate-900 mb-4 tracking-tight">Top <span className="text-blue-600">Placed</span> Roles</h2>
          <p className="text-slate-500 text-sm font-medium">Explore the top roles our students are placed in</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {roles.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-4 px-8 py-4 bg-slate-50 text-slate-900 text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-default"
            >
              <span className="text-[#0057FF]">{r.icon}</span>
              {r.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const PlacementsPage = ({ onNavigate, onTalkToCounselor }: { onNavigate: (page: string) => void, onTalkToCounselor: () => void }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <PlacementsHero />
      <PlacementProcess />
      <HiringPartnersSection />
      <PlacementHighlightsBanner />
      <StudentSuccessStories />
      <ComprehensiveCareerSupport />
      <TopPlacedRoles />
      <CTA onNavigate={onNavigate} onTalkToCounselor={onTalkToCounselor} />
    </motion.div>
  );
};

const AboutPage = ({ onNavigate, onTalkToCounselor, onOpenCourse }: { onNavigate: (page: string) => void, onTalkToCounselor: () => void, onOpenCourse: (c: any) => void }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <AboutHero onNavigate={onNavigate} />
      <WhoWeAre />
      <SpecializedCareerPrograms onOpenCourse={onOpenCourse} />
      <PlacementSuccess />
      <Testimonials />
      <Mentors />
      <OfficeSection onTalkToCounselor={onTalkToCounselor} />
      <CTA onNavigate={onNavigate} onTalkToCounselor={onTalkToCounselor} />
    </motion.div>
  );
};

const HomePage = ({ onNavigate, onOpenCourse, onTalkToCounselor }: { onNavigate: (page: string) => void, onOpenCourse: (c: any) => void, onTalkToCounselor: () => void }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Hero onNavigate={onNavigate} onTalkToCounselor={onTalkToCounselor} />
      <IndustryAlignment />
      <WhyChoose />
      <PopularCourses onOpenCourse={onOpenCourse} onNavigate={onNavigate} />
      <PlacementSuccess />
      <Testimonials />
      <LearningProcess />
      <CTA onNavigate={onNavigate} onTalkToCounselor={onTalkToCounselor} />
    </motion.div>
  );
};

// --- Hero ---
const Hero = ({ onNavigate, onTalkToCounselor }: { onNavigate: (page: string) => void, onTalkToCounselor: () => void }) => {
  return (
    <section className="relative pt-16 md:pt-20 pb-10 overflow-hidden bg-white">
      {/* Background Orbs matches the image gradient atmosphere */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[140px] -z-10 translate-x-1/4 -translate-y-1/4"></div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#0057FF] border border-blue-100 rounded-full text-[11px] font-black uppercase tracking-wider mb-8">
              🚀 Your Future in Tech Starts Here
            </div>

            <h1 className="text-[42px] sm:text-[54px] md:text-[64px] lg:text-[72px] font-heading font-black text-slate-900 leading-[1.1] mb-8">
              Learn. Build. <br />
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-[#0057FF] to-[#00C4CC] italic pb-1 pr-2">Get Placed.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Industry-focused training programs with real-world projects and 100% placement assistance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={() => onNavigate('Apply Now')}
                className="w-full sm:w-auto px-10 py-4.5 bg-gradient-to-br from-[#0057FF] to-[#00C4CC] text-white rounded-xl font-black text-base flex items-center justify-center gap-2 hover:scale-[1.05] transition-all shadow-xl shadow-cyan-500/20 group uppercase tracking-widest text-xs"
              >
                Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('Courses')}
                className="w-full sm:w-auto px-10 py-4.5 bg-white text-[#0057FF] border-2 border-blue-50 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all flex items-center justify-center shadow-lg"
              >
                Explore Courses
              </button>
              <button
                onClick={onTalkToCounselor}
                className="w-full sm:w-auto px-10 py-4.5 bg-slate-50 text-slate-700 border-2 border-slate-100 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center justify-center shadow-sm"
              >
                Talk to Counselor
              </button>
            </div>

            {/* Statistics Bar - Exactly as per user-provided images (Desktop) */}
            <div className="hidden lg:grid grid-cols-3 bg-white border border-slate-100 rounded-[2rem] py-8 px-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <div className="text-center">
                <div className="text-5xl font-heading font-black bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC] mb-2 line-height-none tracking-tight">500+</div>
                <div className="text-[11px] text-slate-500 font-black uppercase tracking-widest leading-none">Students Trained</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-12 w-[1px] bg-slate-100"></div>
                <div className="flex-1 text-center">
                  <div className="text-5xl font-heading font-black bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC] mb-2 line-height-none tracking-tight">200+</div>
                  <div className="text-[11px] text-slate-500 font-black uppercase tracking-widest leading-none">Successful Placements</div>
                </div>
                <div className="h-12 w-[1px] bg-slate-100"></div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-heading font-black bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC] mb-2 line-height-none tracking-tight">500+</div>
                <div className="text-[11px] text-slate-500 font-black uppercase tracking-widest leading-none">MNC Placements</div>
              </div>
            </div>

            {/* Statistics - Mobile Only Card Layout matching image exactly */}
            <div className="lg:hidden w-full max-w-sm mx-auto mb-10">
              <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col items-center">
                <div className="w-full text-center py-6">
                  <div className="text-4xl font-heading font-black text-primary mb-2 tracking-tight">500+</div>
                  <div className="text-[11px] text-slate-500 font-black uppercase tracking-widest leading-none">Students Trained</div>
                </div>

                <div className="w-full h-[1px] bg-slate-100 my-2"></div>

                <div className="w-full text-center py-6">
                  <div className="text-4xl font-heading font-black text-primary mb-2 tracking-tight">200+</div>
                  <div className="text-[11px] text-slate-500 font-black uppercase tracking-widest leading-none">Successful Placements</div>
                </div>

                <div className="w-full h-[1px] bg-slate-100 my-2"></div>

                <div className="w-full text-center py-6">
                  <div className="text-4xl font-heading font-black text-primary mb-2 tracking-tight">500+</div>
                  <div className="text-[11px] text-slate-500 font-black uppercase tracking-widest leading-none">MNC Placements</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Illustration - Improved to match image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[580px] aspect-square flex items-center justify-center">
              {/* Central Banner Image */}
              <div className="relative z-10 w-full rounded-[3rem] overflow-hidden border-8 border-slate-50 aspect-[4/3] shadow-2xl shadow-blue-900/10">
                <img src={homeImg} alt="Learn and Build" className="w-full h-full object-cover" />
              </div>

              {/* Floating Elements from Image */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-[5%] right-[10%] w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center text-amber-500 text-2xl font-black border border-slate-50 z-20"
              >
                JS
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute top-[40%] right-[-5%] w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center text-indigo-600 z-20 border border-slate-50"
              >
                <Code2 size={40} strokeWidth={2.5} />
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute bottom-[20%] right-[5%] w-18 h-18 bg-white rounded-2xl shadow-2xl flex items-center justify-center text-blue-500 z-20 border border-slate-50"
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                  <Briefcase size={32} />
                </motion.div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
                className="absolute top-[25%] left-0 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center text-cyan-500 z-20 border border-slate-50"
              >
                <Layout size={44} strokeWidth={2.5} />
              </motion.div>

              {/* Graduation Cap/Books Representation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-[5%] left-[10%] bg-white rounded-[2rem] p-6 shadow-2xl border border-slate-50 z-20"
              >
                <Trophy size={48} className="text-primary" />
              </motion.div>

              {/* Back Decoration circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/30 rounded-full blur-[100px] -z-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Industry Alignment (Previously Trusted By) ---
const IndustryAlignment = () => {
  const sectors = [
    { name: 'Global Tech', icon: <Globe size={24} />, color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'Cloud Systems', icon: <Cloud size={24} />, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { name: 'Product Labs', icon: <Layers size={24} />, color: 'text-cyan-500', bg: 'bg-cyan-50' },
    { name: 'Consulting', icon: <Briefcase size={24} />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { name: 'FinTech', icon: <Cpu size={24} />, color: 'text-amber-500', bg: 'bg-amber-50' },
    { name: 'Data Sci', icon: <Database size={24} />, color: 'text-rose-500', bg: 'bg-rose-50' },
  ];

  return (
    <section className="pb-4 md:pb-6 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-100 rounded-[3rem] md:rounded-[4rem] py-12 md:py-16 px-8 relative overflow-hidden shadow-[0_20px_80px_-15px_rgba(0,0,0,0.02)]"
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-[10px] md:text-[11px] font-black bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC] uppercase tracking-[0.4em] mb-4">
              Career-Focused Learning
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-slate-900 leading-tight">
              Master the Skills Demanded by <br /> <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC] italic pb-1 pr-2">Global Tech Leaders</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-4 md:gap-8">
            {sectors.map(sector => (
              <div
                key={sector.name}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-slate-50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 group/sector"
              >
                <div className={`w-12 h-12 ${sector.bg} ${sector.color} rounded-2xl flex items-center justify-center mb-4 group-hover/sector:scale-110 transition-transform`}>
                  {sector.icon}
                </div>
                <span className="text-[12px] font-black text-slate-800 tracking-tight whitespace-nowrap">
                  {sector.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Why Choose ---
const WhyChoose = () => {
  const features = [
    {
      title: "Real Projects",
      description: "Work on real-world projects and build your portfolio.",
      icon: <Code2 className="text-cyan-600" size={22} />,
      bgColor: "bg-cyan-50"
    },
    {
      title: "Placement Assistance",
      description: "Dedicated placement support until you get placed.",
      icon: <Trophy className="text-emerald-600" size={22} />,
      bgColor: "bg-emerald-50"
    },
    {
      title: "Online & Offline Training",
      description: "Choose between online or classroom training.",
      icon: <Monitor className="text-blue-600" size={22} />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Industry Mentors",
      description: "Learn from experienced professionals.",
      icon: <Users className="text-cyan-600" size={22} />,
      bgColor: "bg-cyan-50"
    },
    {
      title: "Internship Opportunities",
      description: "Get internship opportunities with our partners.",
      icon: <Briefcase className="text-emerald-600" size={22} />,
      bgColor: "bg-emerald-50"
    },
    {
      title: "Career Support",
      description: "Resume building, mock interviews & career guidance.",
      icon: <UserCheck className="text-blue-600" size={22} />,
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <section className="pt-4 pb-10 md:pt-6 md:pb-12 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-4">
            Why Choose <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC] italic pb-1 pr-2">ITCareer?</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium">
            We provide everything you need to kickstart your tech career.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-4 md:p-6 lg:p-7 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all group flex flex-col items-center text-center cursor-default"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all flex-shrink-0`}>
                {feature.icon}
              </div>
              <h3 className="text-[13px] md:text-[14px] font-heading font-black text-slate-900 mb-2 leading-tight h-10 flex items-center justify-center">
                {feature.title}
              </h3>
              <p className="text-[10px] md:text-[11px] text-slate-500 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Popular Courses ---
const PopularCourses = ({ onOpenCourse, onNavigate }: { onOpenCourse: (c: any) => void, onNavigate: (page: string) => void }) => {
  const courses = [
    {
      title: 'Full Stack Development',
      category: 'MERN Stack',
      rating: 4.8,
      reviews: 120,
      duration: '6 Months',
      level: 'Beginner to Advanced',
      icon: <Terminal className="text-[#0057FF]" size={24} />,
      bgColor: 'bg-blue-50'
    },
    {
      title: 'React Development',
      category: 'Build modern web apps',
      rating: 4.7,
      reviews: 98,
      duration: '3 Months',
      level: 'Beginner to Advanced',
      icon: <Layout className="text-[#00C4CC]" size={24} />,
      bgColor: 'bg-cyan-50'
    },
    {
      title: 'Python Programming',
      category: 'Python for Everyone',
      rating: 4.8,
      reviews: 110,
      duration: '4 Months',
      level: 'Beginner to Advanced',
      icon: <Database className="text-[#0057FF]" size={24} />,
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Data Structures & Algorithms',
      category: 'Master DSA',
      rating: 4.9,
      reviews: 95,
      duration: '3 Months',
      level: 'Advanced',
      icon: <Layers className="text-[#00C4CC]" size={24} />,
      bgColor: 'bg-cyan-50'
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div>
            <h2 className="text-3xl font-heading font-black text-slate-900 mb-4">Popular Courses</h2>
            <p className="text-slate-500 text-base font-medium">Industry in-demand courses designed for your success.</p>
          </div>
          <button
            onClick={() => onNavigate('Courses')}
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC] font-black text-[11px] uppercase tracking-widest flex items-center gap-2 group hover:gap-3 transition-all"
          >
            View All Courses <ArrowRight size={16} className="text-[#00C4CC]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 ${course.bgColor} rounded-xl flex items-center justify-center`}>
                  {course.icon}
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star size={12} fill="currentColor" />
                  <span className="text-xs font-black text-slate-900">{course.rating}</span>
                  <span className="text-[10px] text-slate-400 font-bold">({course.reviews})</span>
                </div>
              </div>

              <h4 className="text-lg font-heading font-black text-slate-900 mb-1 leading-tight">{course.title}</h4>
              <p className="text-xs text-slate-400 font-bold mb-6">{course.category}</p>

              <div className="space-y-2 mb-8 pt-6 border-t border-slate-50">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{course.duration}</p>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{course.level}</p>
              </div>

              <button
                onClick={() => onOpenCourse({ ...course, description: course.title })}
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC] text-[11px] font-black uppercase tracking-widest flex items-center gap-2 group/btn mt-auto"
              >
                Explore Course <ArrowRight size={14} className="text-[#00C4CC] group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Placement Success ---
const PlacementSuccess = () => {
  const stats = [
    { label: 'Students Trained', value: '500+', icon: <Users size={32} /> },
    { label: 'Success Stories', value: '200+', icon: <Award size={32} /> },
    { label: 'MNC Placements', value: '500+', icon: <Briefcase size={32} /> },
    { label: 'Placement Rate', value: '98%', icon: <Sparkles size={32} /> },
  ];

  return (
    <section className="mx-6 md:mx-12 mb-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#0057FF] via-[#0089ff] to-[#00C4CC] rounded-[2.5rem] md:rounded-[3.5rem] py-10 md:py-12 px-8 relative overflow-hidden shadow-2xl shadow-cyan-500/10">
        {/* Subtle starry background elements */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full blur-[1px]"></div>
        <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full blur-[2px]"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/30 rounded-full blur-[1px]"></div>
        <div className="absolute top-16 right-1/3 w-1 h-1 bg-white/50 rounded-full"></div>
        <div className="absolute bottom-10 left-1/2 w-1 h-1 bg-white/20 rounded-full"></div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-center text-2xl md:text-3xl font-heading font-black text-white mb-10 tracking-tight">Our Placement Success</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 md:gap-x-12 w-full max-w-6xl">
            {stats.map((stat, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="text-white mb-6 opacity-90 drop-shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2 tracking-tighter drop-shadow-md">
                  {stat.value}
                </div>
                <p className="text-[10px] md:text-[11px] font-black text-cyan-50/70 uppercase tracking-[0.3em] px-2 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials ---
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Gamya D',
      role: 'Placed at Walmart',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gamya&mouth=smile&backgroundColor=b6e3f4',
      text: 'ITCareer gave me the skills and confidence to crack my dream job. Extremely grateful for the training and guidance that led to my role at Walmart!'
    },
    {
      name: 'Dinesh V',
      role: 'Placed at American Airlines',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dinesh&mouth=smile&backgroundColor=ffdfbf',
      text: 'The real-world projects and placement support are top-notch. Secured a position at American Airlines, highly recommend their programs!'
    },
    {
      name: 'Doniya J',
      role: 'Placed at Cognizant',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Doniya&mouth=smile&backgroundColor=c0afef',
      text: 'From learning to placement, the entire journey was smooth and well-guided. Placed at Cognizant as a Java Developer!'
    },
    {
      name: '',
      role: 'Placed at Workday',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Workday&mouth=smile&backgroundColor=d1d4f9',
      text: 'Outstanding support and learning resources. Placed at Workday thanks to the guidance of the mentors here.'
    },
    {
      name: '',
      role: 'Placed at Elevance Health',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elevance&mouth=smile&backgroundColor=ffd5dc',
      text: 'The career guidance and preparation labs are outstanding. Secured my placement at Elevance Health.'
    },
    {
      name: '',
      role: 'Placed at UBS Bank',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=UBS&mouth=smile&backgroundColor=b6e3f4',
      text: 'Solid foundation and deep practical understanding. Secured a role at UBS Bank.'
    }
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Group items into pages
  const realPages: (typeof testimonials)[] = [];
  for (let i = 0; i < testimonials.length; i += itemsPerPage) {
    realPages.push(testimonials.slice(i, i + itemsPerPage));
  }

  // Infinite Cloning: [Last Page] [Page 1...N] [First Page]
  const extendedPages = [
    realPages[realPages.length - 1],
    ...realPages,
    realPages[0]
  ];

  useEffect(() => {
    if (isAnimating) return;
    const timer = setInterval(() => handleNext(), 7000);
    return () => clearInterval(timer);
  }, [currentPage, isAnimating, isMobile]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage(prev => prev - 1);
  };

  const onAnimationComplete = () => {
    if (currentPage >= totalPages + 1) {
      setCurrentPage(1);
    } else if (currentPage <= 0) {
      setCurrentPage(totalPages);
    }
    setIsAnimating(false);
  };

  const displayDotIndex = (currentPage - 1 + totalPages) % totalPages;

  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-slate-900 mb-4">What Our Students Say</h2>
          <p className="text-slate-500 text-lg font-medium">Real stories from real success.</p>
        </div>

        <div className="relative group">
          {/* Enhanced Navigation Arrows */}
          <div className="absolute top-1/2 -left-4 xl:-left-20 -translate-y-1/2 z-30 flex items-center">
            <button
              onClick={handlePrev}
              className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center text-slate-400 hover:text-primary transition-all hover:scale-110 active:scale-95 border border-slate-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="lg:w-7 lg:h-7" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 xl:-right-20 -translate-y-1/2 z-30 flex items-center">
            <button
              onClick={handleNext}
              className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center text-slate-400 hover:text-primary transition-all hover:scale-110 active:scale-95 border border-slate-50"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="lg:w-7 lg:h-7" />
            </button>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ width: `${extendedPages.length * 100}%` }}
              animate={{ x: `-${currentPage * (100 / extendedPages.length)}%` }}
              transition={isAnimating ? { duration: 0.8, ease: [0.32, 0.72, 0, 1] } : { duration: 0 }}
              onAnimationComplete={onAnimationComplete}
            >
              {extendedPages.map((page, pIdx) => (
                <div key={pIdx} className="flex gap-6 lg:gap-8" style={{ width: `${100 / extendedPages.length}%` }}>
                  {page.map((t, idx) => (
                    <div key={idx} className="flex-1 min-w-0">
                      <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-[0_10px_40px_rgba(37,99,235,0.04)] h-full flex flex-col justify-between">
                        <div className="mb-10 text-[15px] md:text-[17px] leading-relaxed text-slate-600 font-medium">
                          "{t.text}"
                        </div>

                        <div className="flex flex-col gap-5">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-105">
                              <img src={t.image} alt={t.name || t.role} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-0">
                              <h5 className="font-heading font-black text-slate-900 text-base leading-none mb-1.5 truncate">{t.name || '\u00A0'}</h5>
                              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest truncate">{t.role}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, s) => (
                              <Star key={s} size={14} className="fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Precise Dota Logic */}
          <div className="flex justify-center gap-4 mt-16">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => { if (!isAnimating) { setIsAnimating(true); setCurrentPage(i + 1); } }}
                className={`h-2 rounded-full transition-all duration-500 ${displayDotIndex === i ? 'bg-primary w-10' : 'bg-slate-200 w-2 hover:bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>


  );
};

// --- Learning Process ---
const LearningProcess = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [lineProgress, setLineProgress] = useState<{ [key: number]: number }>({});
  const [hasStarted, setHasStarted] = useState(false);

  const steps = [
    { title: 'Enroll', desc: 'Choose your course and enroll easily.', icon: <PencilLine size={24} /> },
    { title: 'Learn', desc: 'Learn from experts and gain skills.', icon: <BookOpen size={24} /> },
    { title: 'Build', desc: 'Work on real projects and build portfolio.', icon: <Code2 size={24} /> },
    { title: 'Crack Interviews', desc: 'Get trained for interviews.', icon: <UserCheck size={24} /> },
    { title: 'Get Placed', desc: 'Get placed in top companies.', icon: <Briefcase size={24} /> },
  ];

  const handleViewportEnter = () => {
    if (!hasStarted) {
      setHasStarted(true);
      setActiveStep(0);
    }
  };

  useEffect(() => {
    if (!hasStarted || activeStep < 0 || activeStep >= steps.length) return;

    // 1. Progress Current Circle
    let currentProgress = 0;
    const circleInterval = setInterval(() => {
      currentProgress += 2.5;
      if (currentProgress <= 100) {
        setProgress(currentProgress);
      } else {
        clearInterval(circleInterval);

        // 2. Start Line Animation if not the last step
        if (activeStep < steps.length - 1) {
          let currentLineProgress = 0;
          const lineInterval = setInterval(() => {
            currentLineProgress += 5;
            if (currentLineProgress <= 100) {
              setLineProgress(prev => ({ ...prev, [activeStep]: currentLineProgress }));
            } else {
              clearInterval(lineInterval);
              // 3. Move to Next Circle
              setActiveStep(prev => prev + 1);
              setProgress(0);
            }
          }, 20);
        } else {
          // Final state: everything finishes
          setActiveStep(steps.length);
        }
      }
    }, 25);

    return () => clearInterval(circleInterval);
  }, [activeStep, hasStarted, steps.length]);

  return (
    <section id="process" className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900 mb-4">Our Learning Process</h2>
          <p className="text-slate-500 text-lg font-medium opacity-60">A path powered by <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0057FF] to-[#00C4CC] font-black">Innovation</span>.</p>
        </div>

        <motion.div
          onViewportEnter={handleViewportEnter}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Main Container: Mobile = Column with items aligned left, Desktop = Row */}
          <div className="flex flex-col lg:flex-row justify-between relative gap-y-16 lg:gap-y-0">
            {steps.map((step, i) => {
              const isCompleted = activeStep > i;
              const isCurrent = activeStep === i;

              return (
                <div key={i} className="flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center relative w-full lg:w-auto lg:flex-1">

                  {/* PC Connector: High-density dashed bridge between circles */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-[48px] md:top-[56px] lg:top-[64px] left-[calc(50%+55px)] w-[calc(100%-110px)] h-[4px] hidden lg:block -z-10 -translate-y-1/2">
                      <svg className="w-full h-full overflow-visible">
                        {/* Gray base line */}
                        <line
                          x1="0" y1="2" x2="100%" y2="2"
                          stroke="#cbd5e1"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          strokeLinecap="round"
                          opacity="0.5"
                        />
                        {/* Animated blue path reveal */}
                        <motion.line
                          x1="0" y1="2" x2="100%" y2="2"
                          stroke="#0057FF"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{
                            pathLength: isCompleted ? 1 : (isCurrent ? (lineProgress[i] || 0) / 100 : 0)
                          }}
                          transition={{ type: "tween", ease: "linear" }}
                        />
                      </svg>
                    </div>
                  )}

                  {/* Circle & Connectors Node */}
                  <div className="relative shrink-0 z-10 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center lg:mb-10 mr-8 lg:mr-0">

                    {/* PC Connector removed from here as it's moved up to parent for full-width access */}

                    {/* Mobile Connector: Precise vertical dashed line reveal */}
                    {i < steps.length - 1 && (
                      <div className="absolute top-[calc(50%+45px)] left-1/2 -translate-x-1/2 w-[2px] h-[75px] lg:hidden -z-10">
                        {/* Gray base line */}
                        <div className="absolute inset-0 border-l-2 border-dashed border-slate-100" />
                        {/* Animated blue path reveal */}
                        <motion.div
                          className="absolute inset-x-0 top-0 border-l-2 border-dashed border-primary"
                          initial={{ height: 0 }}
                          animate={{
                            height: isCompleted ? '100%' : (isCurrent ? `${lineProgress[i] || 0}%` : '0%')
                          }}
                          transition={{ type: "tween", ease: "linear" }}
                        />
                      </div>
                    )}

                    {/* Circle Loader Wrapper */}
                    <div className="relative w-full h-full flex items-center justify-center p-2.5">
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle
                          cx="50%" cy="50%" r="43%"
                          fill="none"
                          stroke="#f8fafc"
                          strokeWidth="3"
                        />
                        <motion.circle
                          cx="50%" cy="50%" r="43%"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          className={isCompleted || isCurrent ? "text-primary" : "text-slate-100"}
                          initial={{ pathLength: 0 }}
                          animate={{
                            pathLength: isCompleted ? 1 : (isCurrent ? progress / 100 : 0)
                          }}
                          transition={{
                            type: "tween",
                            ease: "linear",
                            duration: 0.1
                          }}
                        />
                      </svg>

                      {isCurrent && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primary/5"
                          animate={{ scale: [0.95, 1.25, 0.95], opacity: [0.3, 0.1, 0.3] }}
                          transition={{ repeat: Infinity, duration: 2.5 }}
                        />
                      )}

                      <div className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center relative z-10 transition-all duration-700 shadow-xl ${isCompleted || isCurrent ? 'bg-gradient-to-br from-[#0057FF] to-[#00C4CC] text-white' : 'bg-slate-50 text-slate-300'}`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Step Description Content */}
                  <div className="flex-1">
                    <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] mb-2 block transition-all duration-700 ${isCompleted || isCurrent ? 'bg-clip-text text-transparent bg-gradient-to-br from-[#0057FF] to-[#00C4CC]' : 'text-slate-200'}`}>Step 0{i + 1}</span>
                    <h4 className={`text-base md:text-xl font-heading font-black mb-1.5 transition-all duration-700 ${isCompleted || isCurrent ? 'text-slate-900' : 'text-slate-400'}`}>{step.title}</h4>
                    <p className={`text-[11px] md:text-sm font-medium leading-relaxed max-w-[280px] lg:max-w-[210px] transition-all duration-700 ${isCompleted || isCurrent ? 'text-slate-500' : 'text-slate-200'}`}>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- CTA ---
const CTA = ({ onNavigate, onTalkToCounselor }: { onNavigate: (page: string) => void, onTalkToCounselor: () => void }) => {
  return (
    <section className="mx-6 md:mx-12 mb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto rounded-[2rem] md:rounded-[3rem] py-12 md:py-16 lg:py-20 px-8 md:px-16 text-white relative overflow-hidden shadow-2xl shadow-blue-900/10">
        {/* Modern Deep Blue Background */}
        <div className="absolute inset-0 bg-[#0057FF]"></div>

        {/* Abstract Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00C4CC] opacity-20 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-left"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 leading-tight tracking-tight">
              Let's Build Your <br className="hidden md:block" />
              <span className="italic">Successful Career</span> Together
            </h2>
            <p className="text-blue-50 text-lg md:text-xl font-medium max-w-xl mb-10">
              Join thousands of students and professionals who transformed their careers with ITCareer
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('Apply Now')}
                className="group px-10 py-4 bg-white text-[#0057FF] rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-blue-500/10 flex items-center justify-center gap-3"
              >
                Apply Now <ArrowRight size={18} />
              </button>
              <button
                onClick={onTalkToCounselor}
                className="group px-10 py-4 bg-transparent border-2 border-white/20 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-3"
              >
                Talk to Counselor
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative shrink-0 flex items-center justify-center"
          >
            <div className="w-56 h-56 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/10 relative">
              <Trophy size={100} className="text-white drop-shadow-2xl" strokeWidth={1} />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl"
              >
                <Star size={24} fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Terms & Privacy Pages ---
const PrivacyPolicyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-32 pb-24 bg-white"
    >
      <div className="section-container max-w-4xl">
        <div className="bg-blue-50 text-[#0057FF] font-black text-[10px] uppercase tracking-widest mb-6 px-4 py-1.5 rounded-full inline-block border border-blue-100">Legal</div>
        <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-8 tracking-tight">Privacy Policy</h1>
        <p className="text-slate-500 text-xs font-bold mb-12">Last Updated: May 20, 2024</p>

        <div className="prose prose-slate max-w-none space-y-10 text-slate-600">
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black">01</span>
              Introduction
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Welcome to ITCareer. This Privacy Policy describes how ITCareer ("we," "our," or "us") collects, uses, and shares your personal information when you use our website (https://itcareer.co) and services.
            </p>
            <p className="text-sm leading-relaxed text-slate-500 font-medium">
              By using our services, you agree to the collection and use of information in accordance with this policy. We are dedicated to providing transparency about our data practices and protecting the privacy of our students and corporate partners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black">02</span>
              Information Collection
            </h2>
            <p className="text-sm leading-relaxed mb-6 font-bold text-slate-800"> We collect several different types of information for various purposes: </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#0057FF]">Personal Data</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Full Name and Contact Information</li>
                  <li>Email Address and Phone Number</li>
                  <li>Professional and Academic Background</li>
                  <li>Resume and Career Interests</li>
                  <li>Government-issued ID (when required for verification)</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-cyan-500">Usage Data</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>IP Address and Browser Type</li>
                  <li>Pages visited on our platform</li>
                  <li>Time spent on pages and date of visit</li>
                  <li>Device Information and operating system</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black">03</span>
              How We Use Data
            </h2>
            <div className="space-y-6">
              <p className="text-sm leading-relaxed">ITCareer uses the collected data for various purposes, including but not limited to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'To provide and maintain our Service',
                  'To notify you about changes to our Service',
                  'To allow you to participate in interactive features',
                  'To provide customer support and counseling',
                  'To gather analysis or valuable information',
                  'To monitor the usage of our Service',
                  'To detect, prevent and address technical issues',
                  'To send promotional emails and newsletters',
                  'To coordinate placement interviews with partners',
                  'To process payments and course enrollments'
                ].map((point, i) => (
                  <div key={i} className="flex gap-3 items-start p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                    <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-xs font-bold text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black">04</span>
              Data Retention & Security
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
            <div className="p-6 bg-blue-50/30 rounded-2xl border border-blue-100/50 mt-8">
              <h4 className="text-xs font-black text-blue-700 uppercase tracking-[0.2em] mb-4">Security Measures Include:</h4>
              <ul className="grid sm:grid-cols-2 gap-4 text-xs font-bold text-slate-600">
                <li className="flex items-center gap-2 tracking-tight"><Shield size={14} className="text-blue-500" /> SSL Data Encryption</li>
                <li className="flex items-center gap-2 tracking-tight"><Shield size={14} className="text-blue-500" /> Regular Security Audits</li>
                <li className="flex items-center gap-2 tracking-tight"><Shield size={14} className="text-blue-500" /> Restricted Data Access</li>
                <li className="flex items-center gap-2 tracking-tight"><Shield size={14} className="text-blue-500" /> Secure Server Hosting</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black">05</span>
              Transfer of Data
            </h2>
            <p className="text-sm leading-relaxed">
              Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black">06</span>
              Your Privacy Rights
            </h2>
            <p className="text-sm leading-relaxed mb-4">You have the right to request access to the personal information we hold about you, to request that we correct any inaccuracies, and to request that we delete your data in certain circumstances.</p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
              <p className="text-xs font-bold text-slate-500 flex-1">To exercise any of these rights, please contact our data protection officer at <span className="text-blue-600">privacy@itcareer.co</span>.</p>
              <button className="px-6 py-3 bg-[#0057FF] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">Submit Request</button>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black">07</span>
              Cookies Policy
            </h2>
            <p className="text-sm leading-relaxed">
              Our website uses cookies to enhance user experience. Cookies are small text files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black">08</span>
              Links to Other Sites
            </h2>
            <p className="text-sm leading-relaxed">
              Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black">09</span>
              Changes to This Policy
            </h2>
            <p className="text-sm leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black">10</span>
              Contact Us
            </h2>
            <p className="text-sm leading-relaxed mb-6">If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="space-y-3 text-sm font-bold">
              <li className="flex items-center gap-3 text-slate-700">
                <Mail size={16} className="text-blue-500" />
                <a
                  href="mailto:info@itcareer.co?subject=Inquiry%20about%20IT%20Training%20%26%20Services&body=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20IT%20training%20programs%20and%20services.%20Please%20contact%20me%20with%20more%20information.%20Thank%20you!"
                  className="hover:text-blue-600 transition-colors"
                >
                  info@itcareer.co
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-700"><Phone size={16} className="text-blue-500" /> +1 (945) 732-9000</li>
              <li className="flex items-center gap-3 text-slate-700"><MapPin size={16} className="text-blue-500" /> Plano, Texas, USA</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black">11</span>
              Behavioral Remarketing
            </h2>
            <p className="text-sm leading-relaxed">
              ITCareer uses remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimize and serve ads based on your past visits to our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black">12</span>
              Service Providers
            </h2>
            <p className="text-sm leading-relaxed">
              We may employ third party companies and individuals to facilitate our Service ("Service Providers"), provide the Service on our behalf, perform Service-related services or assist us in analyzing how our Service is used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black">13</span>
              Children's Privacy
            </h2>
            <p className="text-sm leading-relaxed">
              Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-xs font-black">14</span>
              Legal Requirements
            </h2>
            <p className="text-sm leading-relaxed">
              ITCareer may disclose your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of ITCareer, or prevent or investigate possible wrongdoing in connection with the Service.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

const TermsConditionsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-32 pb-24 bg-white"
    >
      <div className="section-container max-w-4xl">
        <div className="bg-blue-50 text-[#0057FF] font-black text-[10px] uppercase tracking-widest mb-6 px-4 py-1.5 rounded-full inline-block border border-blue-100">Legal</div>
        <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-8 tracking-tight">Terms & Conditions</h1>
        <p className="text-slate-500 text-xs font-bold mb-12">Last Updated: May 20, 2024</p>

        <div className="prose prose-slate max-w-none space-y-10 text-slate-600">
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">1. Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed mb-4">
              By accessing, browsing, or using the services of ITCareer, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These terms apply to all visitors, students, and corporate clients using the platform.
            </p>
            <p className="text-sm leading-relaxed text-slate-500 font-medium">
              If you do not agree with any part of these terms, you should immediately cease all use of our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">2. Enrollment and Admission</h2>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed">Admission to our courses is subject to meeting the specified eligibility criteria for each program. ITCareer reserves the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Verify academic credentials and professional background.</li>
                <li>Conduct entrance assessments or interviews.</li>
                <li>Refuse admission to any candidate based on evaluation results.</li>
                <li>Modify course start dates or batch timings.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">3. Course Content & Intellectual Property</h2>
            <p className="text-sm leading-relaxed mb-4">
              All course materials, including videos, documents, code snippets, and presentations, are the exclusive intellectual property of ITCareer.
            </p>
            <div className="p-5 bg-red-50 border border-red-100 rounded-2xl text-xs font-bold text-red-600 leading-relaxed uppercase tracking-wider">
              Unauthorized sharing, recording, distribution, or reproduction of course materials is strictly prohibited and will lead to legal action and immediate termination of access without refund.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">4. Fees and Payment Terms</h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>Course fees must be paid in full or according to the agreed-upon installment plan before the commencement of the course. Fees paid are non-refundable except in specific cases outlined in our refund policy.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All payments must be made through authorized channels only.</li>
                <li>Delay in installment payments may lead to suspension of access to course resources.</li>
                <li>Taxes will be applicable as per local government regulations.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">5. Placement Assistance Program</h2>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed">While ITCareer is committed to providing 100% placement support, please note the following:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Placement is dependent on student performance and interview clearing.',
                  'Students must maintain 90% attendance to be eligible.',
                  'Participation in mock interviews and resume workshops is mandatory.',
                  'ITCareer does not guarantee a specific salary package.',
                  'Placement support is valid for a specified duration post-course completion.',
                  'Students must adhere to the recruitment policies of hiring partners.'
                ].map((p, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-xl flex gap-3">
                    <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 text-[10px] font-black">{i + 1}</div>
                    <p className="text-xs font-bold text-slate-600 leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">6. Code of Conduct</h2>
            <p className="text-sm leading-relaxed mb-4">
              We maintain a high standard of professional behavior. Any student or user found engaging in misconduct, harassment, or disruption of training will face disciplinary action.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">7. Software Development Services</h2>
            <p className="text-sm leading-relaxed">
              For business clients, the scope of software development services will be governed by the specific Service Level Agreement (SLA) signed between ITCareer and the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">8. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed">
              ITCareer shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">9. Privacy and Data Usage</h2>
            <p className="text-sm leading-relaxed mb-4">
              Our use of your personal information is governed by our Privacy Policy. By agreeing to these terms, you also agree to the practices outlined in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">10. Governing Law</h2>
            <p className="text-sm leading-relaxed">
              These Terms and Conditions are governed by and construed in accordance with the laws of the State of Texas, USA, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">11. Termination</h2>
            <p className="text-sm leading-relaxed">
              ITCareer reserves the right to terminate your access to our platform or services without prior notice if you are found in violation of these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">12. Contact for Legal Matters</h2>
            <p className="text-sm leading-relaxed mb-6">
              For any legal inquiries or concerns regarding these terms, please contact our legal department at <span className="text-blue-600 font-bold">legal@itcareer.co</span>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">13. Force Majeure</h2>
            <p className="text-sm leading-relaxed">
              ITCareer shall not be liable for any failure to perform its obligations hereunder where such failure results from any cause beyond ITCareer's reasonable control, including, without limitation, mechanical, electronic or communications failure or degradation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">14. Assignment</h2>
            <p className="text-sm leading-relaxed">
              These Terms and Conditions, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by ITCareer without restriction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">15. Entire Agreement & Severability</h2>
            <p className="text-sm leading-relaxed">
              These Terms and Conditions, together with our Privacy Policy and any other legal notices published by ITCareer on the Service, shall constitute the entire agreement between you and ITCareer. If any provision is deemed invalid, the invalidity of such provision shall not affect the validity of the remaining provisions.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

const WhatsAppButton = () => {
  const phoneNumber = "19457329000";
  const message = encodeURIComponent("Hello! I wanna know more about the courses and services at ITCareer.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 left-8 z-[9999] bg-[#25D366] text-white p-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)] flex items-center justify-center group border-2 border-white/20"
    >
      <MessageCircle size={28} fill="currentColor" className="transition-transform group-hover:rotate-12" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] group-hover:ml-3 transition-all duration-500 whitespace-nowrap text-xs font-black uppercase tracking-widest pb-0.5">
        Chat with Us
      </span>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
    </motion.a>
  );
};

// --- Footer ---
const Footer = ({ onNavigate, isDarkMode, onTalkToCounselor }: { onNavigate: (page: string) => void, isDarkMode: boolean, onTalkToCounselor: () => void }) => {
  return (
    <footer className={`${isDarkMode ? 'bg-slate-950 text-slate-400 border-slate-900' : 'bg-[#020817] text-slate-400 border-slate-900'} pt-20 pb-10 border-t`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start cursor-pointer group mb-10" onClick={() => onNavigate('Home')}>
              <div className="bg-white px-6 py-2 rounded-full shadow-lg transition-transform group-hover:scale-105">
                <img src={logo} alt="ITCareer Logo" className="w-32 h-16 object-contain" />
              </div>
            </div>
            <p className="text-[11px] font-medium leading-relaxed mb-8 text-slate-500 max-w-xs">
              Empowering students and businesses through quality training, placement assistance, and innovative software solutions.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#0057FF] hover:text-white transition-all text-slate-500">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-[11px] uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4 text-[12px] font-bold">
              {['Home', 'About Us', 'Services', 'Courses', 'Placements', 'Contact Us'].map(link => (
                <li key={link}><button onClick={() => onNavigate(link)} className="hover:text-white transition-colors text-left">{link}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-[11px] uppercase tracking-widest mb-8">Our Courses</h4>
            <ul className="space-y-4 text-[12px] font-bold">
              {[
                'Java Development',
                'Data Engineering',
                'Forward Deployed Engineering',
                'Automation Testing',
                'SAP Technologies',
                'Healthcare Data Engineering'
              ].map(course => (
                <li key={course}><button onClick={() => onNavigate('Courses')} className="hover:text-white transition-colors text-left">{course}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-[11px] uppercase tracking-widest mb-8">For Students</h4>
            <ul className="space-y-4 text-[12px] font-bold">
              {[
                { name: 'Career Services', page: 'Placements' },
                { name: 'Interview Prep', page: 'Placements' },
                { name: 'Placement Support', page: 'Placements' },
                { name: 'Apply Now', page: 'Apply Now' }
              ].map(item => (
                <li key={item.name}><button onClick={() => onNavigate(item.page)} className="hover:text-white transition-colors text-left">{item.name}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-[11px] uppercase tracking-widest mb-8">For Businesses</h4>
            <ul className="space-y-4 text-[12px] font-bold">
              {[
                'Development Services',
                'Web Applications',
                'Enterprise Solutions',
                'Data Engineering',
                'Custom Software'
              ].map(item => (
                <li key={item}><button onClick={() => onNavigate('Contact Us')} className="hover:text-white transition-colors text-left">{item}</button></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[10px] font-bold text-slate-600">
            <p>© 2024 ITCareer. All rights reserved.</p>
            <div className="flex gap-8 uppercase tracking-widest">
              <button onClick={() => onNavigate('Privacy Policy')} className="hover:text-white transition-all">Privacy Policy</button>
              <button onClick={() => onNavigate('Terms & Conditions')} className="hover:text-white transition-all">Terms & Conditions</button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <button
              onClick={onTalkToCounselor}
              className="flex items-center gap-3 text-[10px] font-bold text-slate-500 hover:text-white bg-slate-900/50 hover:bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 transition-all cursor-pointer"
            >
              <Phone size={12} className="text-[#0057FF]" />
              +1 (945) 732-9000
            </button>
            <a
              href="mailto:info@itcareer.co?subject=Inquiry%20about%20IT%20Training%20%26%20Services&body=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20IT%20training%20programs%20and%20services.%20Please%20contact%20me%20with%20more%20information.%20Thank%20you!"
              className="flex items-center gap-3 text-[10px] font-bold text-slate-500 hover:text-white bg-slate-900/50 hover:bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 transition-all"
            >
              <Mail size={12} className="text-[#00C4CC]" />
              info@itcareer.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Contact Page Components ---
const ContactHero = ({ onTalkToCounselor }: { onTalkToCounselor: () => void }) => {
  return (
    <section className="relative pt-12 md:pt-20 pb-20 overflow-hidden bg-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] bg-cyan-50/30 rounded-full blur-[100px] -z-10"></div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-left"
          >
            <div className="bg-blue-50 text-[#0057FF] font-black text-[10px] uppercase tracking-widest mb-6 px-4 py-1.5 rounded-full inline-block border border-blue-100">Contact Us</div>
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-heading font-black text-slate-900 leading-[1.1] mb-8">
              We're Here to Help You <span className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-[#0057FF] to-[#00C4CC] py-1">Start Your Journey</span> in IT
            </h1>
            <p className="text-slate-500 text-sm md:text-base font-medium mb-12 leading-relaxed max-w-xl">
              Have questions about our courses, placements, or services? Our team is ready to help you!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: <Phone size={20} />, label: 'Call Us', val: '+1 (945) 732-9000', onClick: onTalkToCounselor },
                { icon: <Mail size={20} />, label: 'Email Us', val: 'info@itcareer.co', onClick: () => window.location.href = 'mailto:info@itcareer.co?subject=Inquiry%20about%20IT%20Training%20%26%20Services&body=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20IT%20training%20programs%20and%20services.%20Please%20contact%20me%20with%20more%20information.%20Thank%20you!' },
                { icon: <Clock size={20} />, label: 'Office Hours', val: 'Mon - Sat: 9AM - 7PM' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  onClick={item.onClick}
                  className={`bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all ${
                    item.onClick ? 'cursor-pointer hover:border-blue-200' : ''
                  }`}
                >
                  <div className="text-blue-600 mb-3">{item.icon}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-[11px] font-bold text-slate-900">{item.val}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden">
              <img
                src={contactUsImg}
                alt="Support Representative"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating elements matching image style */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-blue-50 z-20"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <MessageSquare size={20} />
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/4 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-blue-50 z-20"
            >
              <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-white">
                <Mail size={20} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactFormSection = ({ onTalkToCounselor }: { onTalkToCounselor: () => void }) => {
  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const waText = `🌟 *New Contact Inquiry from itcareer.co* 🌟\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📱 *Phone:* ${phone}\n📌 *Subject:* ${subject}\n💬 *Message:* ${message}`;
    const encodedText = encodeURIComponent(waText);
    const whatsappUrl = `https://wa.me/19457329000?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm">
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-heading font-black text-slate-900 mb-3 tracking-tight">Send Us a Message</h2>
                <p className="text-slate-500 text-sm font-medium">Fill out the form and our team will get back to you as soon as possible.</p>
              </div>

              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-sm font-medium text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-sm font-medium text-slate-900"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest ml-1">Phone Number</label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-sm font-medium text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest ml-1">Subject</label>
                    <select name="subject" required className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-sm font-medium text-slate-900 appearance-none">
                      <option>General Inquiry</option>
                      <option>Course Information</option>
                      <option>Placement Support</option>
                      <option>Business Collaboration</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-sm font-medium text-slate-900 resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full sm:w-auto px-10 py-5 bg-[#0057FF] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-black text-slate-900 mb-10 tracking-tight">Get in Touch</h2>
                <div className="space-y-8">
                  {[
                    { icon: <Phone size={24} />, label: 'Phone', val: '+1 (945) 732-9000', onClick: onTalkToCounselor },
                    { icon: <Mail size={24} />, label: 'Email', val: 'info@itcareer.co', onClick: () => window.location.href = 'mailto:info@itcareer.co?subject=Inquiry%20about%20IT%20Training%20%26%20Services&body=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20IT%20training%20programs%20and%20services.%20Please%20contact%20me%20with%20more%20information.%20Thank%20you!' },
                    { icon: <MapPin size={24} />, label: 'Office Address', val: '3401 Cluster Road Suite #164, Plano, Texas 75023' }
                  ].map((item, i) => (
                    <div key={i} className={`flex gap-6 group ${item.onClick ? 'cursor-pointer' : ''}`} onClick={item.onClick}>
                      <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                        <div className={`text-sm font-bold text-slate-900 ${item.onClick ? 'group-hover:text-blue-600 transition-colors' : ''}`}>{item.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  {[Facebook, Linkedin, Instagram, Twitter].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center hover:bg-[#0057FF] hover:text-white transition-all text-slate-400 shadow-sm">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactLocation = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-black text-slate-900 mb-4 tracking-tight">Our <span className="text-[#0057FF]">Location</span></h2>
        </div>

        <div className="relative rounded-[3.5rem] overflow-hidden h-[500px] border border-slate-100 shadow-sm">
          {/* Using a placeholder map image */}
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
            alt="Map Location"
            className="w-full h-full object-cover grayscale opacity-20"
          />

          {/* Location Card Overlay */}
          <div className="absolute top-1/2 left-12 -translate-y-1/2 w-full max-w-sm">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-blue-50">
              <h4 className="font-heading font-black text-slate-900 mb-6">ITCareer</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-8">
                3401 Cluster Road Suite #164 <br />
                Plano, Texas 75023
              </p>
              <a href="#" className="text-blue-600 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                View on Google Maps <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Marker placeholder */}
          <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 text-red-500">
            <MapPin size={48} fill="currentColor" stroke="white" strokeWidth={3} />
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyContact = () => {
  const reasons = [
    { title: 'Course Guidance', desc: 'Get expert advice on choosing the right career path.', icon: <Terminal size={24} /> },
    { title: 'Admission Support', desc: 'Know about enrollment process, fees, batches and more.', icon: <Users size={24} /> },
    { title: 'Placement Assistance', desc: 'Learn how we help you get placed in top companies.', icon: <Trophy size={24} /> },
    { title: 'Corporate Inquiries', desc: 'For training partnerships, projects, and business collaborations.', icon: <Building size={24} /> },
    { title: 'General Support', desc: 'Have a question? We\'re just a message away.', icon: <MessageSquare size={24} /> }
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="section-container">
        <div className="text-center mb-16 mx-auto max-w-2xl">
          <h2 className="text-3xl font-heading font-black text-slate-900 mb-6 tracking-tight">Why Contact ITCareer?</h2>
          <p className="text-slate-500 text-sm font-medium">We're here to support you at every step of your career journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-[#0057FF] group-hover:text-white transition-all duration-500">
                {r.icon}
              </div>
              <h4 className="font-heading font-black text-slate-900 text-[11px] mb-3 uppercase tracking-tight leading-tight">{r.title}</h4>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed leading-[1.8]">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = ({ onTalkToCounselor }: { onTalkToCounselor: () => void }) => {
  const faqs = [
    { q: 'What courses do you offer?', a: 'We offer a wide range of IT courses including Java Development, Data Engineering, DevOps, and more.' },
    { q: 'Are the courses beginner-friendly?', a: 'Yes, our courses are designed to take you from absolute basics to advanced professional levels.' },
    { q: 'Do you provide placement assistance?', a: 'Absolutely! We offer 100% placement assistance including resume building and mock interviews.' },
    { q: 'Is there an option for online classes?', a: 'Yes, we provide both in-person and highly interactive online training sessions.' },
    { q: 'How do I enroll in a course?', a: 'You can apply through our website or contact our counselors for guidance on the enrollment process.' },
    { q: 'Can I visit your office?', a: 'Yes, you\'re welcome to visit our Plano office during business hours. Please call first to schedule a visit.' }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl font-heading font-black text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-xs font-black text-slate-900 uppercase tracking-widest">{faq.q}</span>
                <ChevronDown size={14} className={`text-slate-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-xs text-slate-500 font-medium leading-relaxed leading-[1.8]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-1 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="px-8 py-6 flex flex-col md:flex-row items-center gap-6">
              <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Still have questions?</h4>
              <div className="flex gap-4">
                <div className="text-[11px] font-bold text-slate-500">
                  Call us at <button onClick={onTalkToCounselor} className="text-blue-600 font-black hover:underline transition-colors">+1 (945) 732-9000</button>
                </div>
                <div className="w-px h-4 bg-slate-200 hidden md:block"></div>
                <div className="text-[11px] font-bold text-slate-500">
                  Email us at <a href="mailto:info@itcareer.co?subject=Inquiry%20about%20IT%20Training%20%26%20Services&body=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20IT%20training%20programs%20and%20services.%20Please%20contact%20me%20with%20more%20information.%20Thank%20you!" className="text-blue-600 font-black hover:underline transition-colors">info@itcareer.co</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCTA = ({ onNavigate, onTalkToCounselor }: { onNavigate: (page: string) => void, onTalkToCounselor: () => void }) => {
  return (
    <section className="mx-6 md:mx-12 mb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto rounded-[3.5rem] py-12 px-8 text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
        <div className="absolute inset-0 bg-[#0057FF]"></div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
            <Send size={32} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-6 leading-tight tracking-tight uppercase tracking-[0.2em]">
            Ready to Start Your IT Career?
          </h2>
          <p className="text-blue-50 text-sm md:text-base font-medium max-w-xl mb-10 opacity-80">
            Join thousands of students who transformed their careers with ITCareer
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => onNavigate('Courses')} className="px-10 py-5 bg-white text-[#0057FF] rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-blue-900/10 border-2 border-white">
              Explore Courses →
            </button>
            <button onClick={onTalkToCounselor} className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
              Talk to Counselor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Apply Now Page Components ---
const ApplyNowHero = () => {
  return (
    <section className="relative pt-16 md:pt-24 pb-20 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4"></div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="bg-blue-50 text-[#0057FF] font-black text-[10px] uppercase tracking-widest mb-8 px-5 py-2 rounded-full inline-block border border-blue-100 shadow-sm">Apply Now</div>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-heading font-black text-slate-900 leading-[1.05] mb-10 tracking-tight">
              Take the First Step Towards Your <span className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-[#0057FF] to-[#00C4CC] py-1">Dream Career</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg font-medium mb-12 leading-relaxed max-w-xl">
              Fill out the application form below and our admission team will get in touch with you shortly.
            </p>

            <div className="grid grid-cols-3 gap-8 md:gap-12">
              {[
                { val: 'Easy', label: 'Application', icon: <CheckCircle2 size={24} /> },
                { val: 'Quick', label: 'Response', icon: <Clock size={24} /> },
                { val: 'Secure', label: '& Safe', icon: <BarChart size={24} /> }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center shadow-sm border border-slate-50">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-slate-900 uppercase tracking-widest">{stat.val}</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-slate-50 aspect-[4/3] shadow-2xl shadow-blue-900/10">
                <img src={applyNowImg} alt="Apply Now" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ApplyNowForm = ({ onTalkToCounselor }: { onTalkToCounselor: () => void }) => {
  const handleApplySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const countryCode = formData.get('countryCode');
    const phone = formData.get('phone');
    const course = formData.get('course');
    const qualification = formData.get('qualification');
    const gradYear = formData.get('gradYear');
    const batchTime = formData.get('batchTime');

    const waText = `🎓 *New Student Application from itcareer.co* 🎓\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📱 *Phone:* ${countryCode} ${phone}\n📚 *Course:* ${course}\n🎓 *Qualification:* ${qualification}\n📅 *Graduation Year:* ${gradYear}\n⏰ *Batch Time:* ${batchTime}`;
    const encodedText = encodeURIComponent(waText);
    const whatsappUrl = `https://wa.me/19457329000?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="apply-form">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Form Component */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm">
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-heading font-black text-slate-900 mb-3 tracking-tight">Application Form</h2>
                <p className="text-slate-500 text-sm font-medium">Please fill in your details carefully</p>
              </div>

              <form className="space-y-8" onSubmit={handleApplySubmit}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest ml-1 flex items-center gap-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-sm font-medium text-slate-900"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest ml-1 flex items-center gap-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-sm font-medium text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest ml-1 flex items-center gap-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <select name="countryCode" required className="w-24 px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none text-sm font-medium text-slate-900 appearance-none text-center">
                      <option>+1</option>
                      <option>+91</option>
                      <option>+44</option>
                      <option>+61</option>
                      <option>+971</option>
                      <option>+65</option>
                      <option>+81</option>
                      <option>+49</option>
                      <option>+33</option>
                      <option>+1</option>
                    </select>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="Enter your phone number"
                      className="flex-1 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-sm font-medium text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest ml-1 flex items-center gap-1">
                    Select Course <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select name="course" required className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-sm font-medium text-slate-900 appearance-none">
                      <option value="">Select a course</option>
                      <option>Java Development</option>
                      <option>Data Engineering</option>
                      <option>DevOps & Cloud</option>
                      <option>Automation Testing</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest ml-1 flex items-center gap-1">
                      Education Qualification <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select name="qualification" required className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-sm font-medium text-slate-900 appearance-none">
                        <option value="">Select your qualification</option>
                        <option>Bachelor's Degree</option>
                        <option>Master's Degree</option>
                        <option>PhD</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest ml-1 flex items-center gap-1">
                      Year of Graduation
                    </label>
                    <div className="relative">
                      <select name="gradYear" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-sm font-medium text-slate-900 appearance-none">
                        <option value="">Select year</option>
                        {Array.from({ length: 10 }, (_, i) => 2026 - i).map(year => (
                          <option key={year}>{year}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest ml-1 flex items-center gap-1">
                      Preferred Batch Time
                    </label>
                    <div className="relative">
                      <select name="batchTime" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-sm font-medium text-slate-900 appearance-none">
                        <option value="">Select batch time</option>
                        <option>Morning (9AM - 1PM)</option>
                        <option>Afternoon (2PM - 6PM)</option>
                        <option>Evening (7PM - 10PM)</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest ml-1 flex items-center gap-1">
                      How did you hear about us?
                    </label>
                    <div className="relative">
                      <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-sm font-medium text-slate-900 appearance-none">
                        <option>Select an option</option>
                        <option>Social Media</option>
                        <option>Friend Referral</option>
                        <option>Search Engine</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-900 uppercase tracking-widest ml-1">Your Message (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-sm font-medium text-slate-900 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-3 py-2">
                  <input type="checkbox" id="agree" className="w-4 h-4 rounded border-slate-200 text-[#0057FF] focus:ring-[#0057FF]" />
                  <label htmlFor="agree" className="text-[11px] text-slate-500 font-medium">I agree to receive updates and information from ITCareer</label>
                </div>

                <button type="submit" className="w-full px-10 py-5 bg-[#0057FF] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3">
                  Submit Application <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-heading font-black text-slate-900 tracking-tight">Why Apply With ITCareer?</h2>
              <p className="text-slate-500 text-sm font-medium">We make your career journey simple and successful</p>

              <div className="space-y-6">
                {[
                  { title: 'Industry-Aligned Courses', desc: 'Learn in-demand skills designed by industry experts.', icon: <Code2 size={24} /> },
                  { title: '100% Placement Assistance', desc: 'Dedicated placement support until you get placed.', icon: <Trophy size={24} /> },
                  { title: 'Real-world Projects', desc: 'Work on live projects and build your portfolio.', icon: <Layers size={24} /> },
                  { title: 'Expert Mentors', desc: 'Learn from experienced professionals and industry experts.', icon: <Users size={24} /> },
                  { title: 'Flexible Learning', desc: 'Online & offline learning options to fit your schedule.', icon: <Monitor size={24} /> },
                  { title: 'Certification', desc: 'Earn industry-recognized certificates.', icon: <CheckCircle2 size={24} /> }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100/50 shadow-sm shrink-0 group-hover:scale-110 group-hover:bg-[#0057FF] group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-slate-900 text-[11px] mb-2 uppercase tracking-tight leading-tight">{item.title}</h4>
                      <p className="text-[10px] text-slate-400 font-medium leading-relaxed max-w-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-[#0057FF] rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
              {/* Abstract bg */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

              <h4 className="text-xl font-heading font-black mb-4">Need Help?</h4>
              <p className="text-blue-100 text-xs font-medium mb-8 leading-relaxed opacity-80">
                Our admission counselors are here to help you choose the right course.
              </p>
              <div className="space-y-6 mb-10">
                <button
                  onClick={onTalkToCounselor}
                  className="flex items-center gap-4 hover:opacity-80 transition-opacity text-left"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <span className="text-xs font-black">+1 (945) 732-9000</span>
                </button>
                <a
                  href="mailto:info@itcareer.co?subject=Inquiry%20about%20IT%20Training%20%26%20Services&body=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20IT%20training%20programs%20and%20services.%20Please%20contact%20me%20with%20more%20information.%20Thank%20you!"
                  className="flex items-center gap-4 hover:opacity-80 transition-opacity text-left"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <span className="text-xs font-black">info@itcareer.co</span>
                </a>
              </div>
              <button
                onClick={onTalkToCounselor}
                className="w-full py-4 bg-white text-[#0057FF] rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-blue-900/10"
              >
                Talk to Counselor →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatHappensAfterApply = () => {
  const steps = [
    { title: 'Application Submitted', desc: 'We receive your application', icon: <Send size={24} /> },
    { title: 'Counselor Connect', desc: 'Our expert will contact you', icon: <Users size={24} /> },
    { title: 'Guidance & Counseling', desc: 'Get the best career guidance', icon: <Briefcase size={24} /> },
    { title: 'Enroll & Learn', desc: 'Start your learning journey', icon: <GraduationCap size={24} /> }
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="section-container">
        <div className="text-center mb-20 px-4">
          <h2 className="text-3xl font-heading font-black text-slate-900 mb-4 tracking-tight">What Happens <span className="text-[#0057FF]">After You Apply</span>?</h2>
          <p className="text-slate-500 text-sm font-medium">Our team will guide you through the next steps</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-[1px] border-t border-slate-200 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center group"
              >
                <div className="w-20 h-20 bg-white text-blue-600 rounded-3xl flex items-center justify-center mb-8 border border-slate-100 shadow-sm group-hover:bg-[#0057FF] group-hover:text-white transition-all duration-500 relative ring-8 ring-slate-50">
                  {s.icon}
                </div>
                <div className="text-[10px] font-black text-[#0057FF] mb-4">0{i + 1}</div>
                <h4 className="font-heading font-black text-slate-900 text-[11px] mb-3 uppercase tracking-tight leading-tight">{s.title}</h4>
                <p className="text-[10px] text-slate-400 font-medium leading-relaxed px-4">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ApplyNowCTA = () => {
  return (
    <section className="mx-6 md:mx-12 mb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto rounded-[3.5rem] py-16 px-8 text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
        <div className="absolute inset-0 bg-[#0057FF]"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-8 leading-tight tracking-tight uppercase tracking-[0.2em]">
            Ready to Start Your <br className="hidden md:block" />
            <span className="italic">Successful Career</span> Together
          </h2>
          <p className="text-blue-50 text-sm md:text-base font-medium max-w-xl mb-12 opacity-80">
            Join thousands of students who transformed their careers with ITCareer
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-12 py-5 bg-white text-[#0057FF] rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-blue-900/10 border-2 border-white">
              Explore Courses →
            </button>
            <button className="px-12 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
              Talk to Counselor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactPage = ({ onNavigate, onTalkToCounselor }: { onNavigate: (page: string) => void, onTalkToCounselor: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ContactHero onTalkToCounselor={onTalkToCounselor} />
      <ContactFormSection onTalkToCounselor={onTalkToCounselor} />
      <ContactLocation />
      <WhyContact />
      <FAQSection onTalkToCounselor={onTalkToCounselor} />
      <CTA onNavigate={onNavigate} onTalkToCounselor={onTalkToCounselor} />
    </motion.div>
  );
};

const ApplyNowPage = ({ onNavigate, onTalkToCounselor }: { onNavigate: (page: string) => void, onTalkToCounselor: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ApplyNowHero />
      <ApplyNowForm onTalkToCounselor={onTalkToCounselor} />
      <WhatHappensAfterApply />
      <CTA onNavigate={onNavigate} onTalkToCounselor={onTalkToCounselor} />
    </motion.div>
  );
};


// --- App Root ---
// --- Course Detail Modal ---
const CourseDetailModal = ({ course, isOpen, onClose, onNavigate }: { course: any, isOpen: boolean, onClose: () => void, onNavigate: (page: string) => void }) => {
  if (!isOpen || !course) return null;

  const handleSubmitInquiry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const source = formData.get('source');

    const waText = `📚 *New Course Inquiry: ${course.title}* \n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📱 *Phone:* ${phone}\n🔍 *Heard from:* ${source}\n🏛 *Site:* itcareer.co`;
    const encodedText = encodeURIComponent(waText);
    window.open(`https://wa.me/19457329000?text=${encodedText}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] shadow-2xl shadow-blue-500/20 flex flex-col md:flex-row"
        >
          <div className="w-full md:w-5/12 bg-slate-50 p-8 md:p-12 border-r border-slate-100">
            <div className="mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/30">
                {course.icon}
              </div>
              <h2 className="text-3xl font-heading font-black text-slate-900 mb-4 leading-tight">{course.title}</h2>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{course.description}</p>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">What you'll learn</h4>
              <ul className="space-y-3">
                {['Industry standard curriculum', 'Hands-on projects', 'Expert mentorship', 'Placement support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-7/12 p-8 md:p-12">
            <div className="mb-10">
              <h3 className="text-xl font-black text-slate-900 mb-2">Get Full Syllabus & Details</h3>
              <p className="text-slate-500 text-xs font-medium">Fill in your details to receive the training plan.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmitInquiry}>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1">Full Name</label>
                <input name="name" required type="text" placeholder="Your Name" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1">Email</label>
                  <input name="email" required type="email" placeholder="email@example.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1">Phone Number</label>
                  <input name="phone" required type="tel" placeholder="+1..." className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest ml-1">How did you hear about us?</label>
                <select name="source" required className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm font-medium">
                  <option>Search Engine (Google)</option>
                  <option>Social Media (LinkedIn/Instagram)</option>
                  <option>Friend/Colleague Referral</option>
                  <option>Online Advertisement</option>
                  <option>University Portal</option>
                </select>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full py-5 bg-[#0057FF] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-500/20">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all">
            <X size={20} />
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const CallSelectionModal = ({ isOpen, onClose, isDarkMode }: { isOpen: boolean, onClose: () => void, isDarkMode: boolean }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className={`relative w-full max-w-md overflow-hidden rounded-[32px] shadow-2xl p-8 md:p-10 text-center border transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-slate-900 border-slate-800 text-white shadow-blue-900/20' 
              : 'bg-white border-slate-100 text-slate-900 shadow-blue-500/20'
          }`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute top-6 right-6 transition-colors ${
              isDarkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <X size={20} />
          </button>

          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md ${
            isDarkMode ? 'bg-blue-950 text-blue-400' : 'bg-blue-50 text-blue-600'
          }`}>
            <Phone size={28} />
          </div>

          <h3 className="text-2xl font-heading font-black mb-2">Connect With Us</h3>
          <p className={`text-sm font-medium mb-8 leading-relaxed ${
            isDarkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Please choose one of the numbers below to call our counselor.
          </p>

          <div className="space-y-4">
            {/* Primary Number */}
            <a
              href="tel:+19457329000"
              className="flex items-center justify-between p-5 bg-gradient-to-r from-[#0057FF] to-[#0089ff] text-white rounded-2xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-blue-100 uppercase tracking-widest leading-none mb-1">Primary Number</div>
                  <div className="text-base font-bold">+1 (945) 732-9000</div>
                </div>
              </div>
              <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Number */}
            <a
              href="tel:+14695189938"
              className={`flex items-center justify-between p-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all group border ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-750' 
                  : 'bg-slate-50 border-slate-100 text-slate-900 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-4 text-left">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-600'
                }`}>
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest leading-none mb-1 text-slate-400">Secondary Number</div>
                  <div className={`text-base font-bold ${
                    isDarkMode ? 'text-slate-200' : 'text-slate-800'
                  }`}>+1 (469) 518-9938</div>
                </div>
              </div>
              <ArrowRight size={18} className={`group-hover:translate-x-1 transition-transform ${
                isDarkMode ? 'text-slate-500' : 'text-slate-400'
              }`} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default function App() {
  const [activePage, setActivePage] = useState('Home');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const handleTalkToCounselor = () => {
    setIsCallModalOpen(true);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-slate-900 text-white selection:bg-blue-500/30 selection:text-white' : 'bg-white text-slate-900 selection:bg-cyan-100 selection:text-cyan-600'}`}>
      <Navbar activePage={activePage} setActivePage={setActivePage} onTalkToCounselor={handleTalkToCounselor} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="pt-20">
        {activePage === 'Home' && <HomePage onNavigate={setActivePage} onOpenCourse={setSelectedCourse} onTalkToCounselor={handleTalkToCounselor} />}
        {activePage === 'About Us' && <AboutPage onNavigate={setActivePage} onTalkToCounselor={handleTalkToCounselor} onOpenCourse={setSelectedCourse} />}
        {activePage === 'Services' && <ServicesPage onNavigate={setActivePage} onTalkToCounselor={handleTalkToCounselor} onOpenCourse={setSelectedCourse} />}
        {activePage === 'Courses' && <CoursesPage onOpenCourse={setSelectedCourse} onNavigate={setActivePage} onTalkToCounselor={handleTalkToCounselor} />}
        {activePage === 'Placements' && <PlacementsPage onNavigate={setActivePage} onTalkToCounselor={handleTalkToCounselor} />}
        {activePage === 'Contact Us' && <ContactPage onNavigate={setActivePage} onTalkToCounselor={handleTalkToCounselor} />}
        {activePage === 'Apply Now' && <ApplyNowPage onNavigate={setActivePage} onTalkToCounselor={handleTalkToCounselor} />}
        {activePage === 'Privacy Policy' && <PrivacyPolicyPage />}
        {activePage === 'Terms & Conditions' && <TermsConditionsPage />}
        {activePage === 'Careers' && <CareersPage onNavigate={setActivePage} onTalkToCounselor={handleTalkToCounselor} />}
      </main>

      <Footer onNavigate={setActivePage} isDarkMode={isDarkMode} onTalkToCounselor={handleTalkToCounselor} />
      <WhatsAppButton />
      <CourseDetailModal
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onNavigate={setActivePage}
      />
      <CallSelectionModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

