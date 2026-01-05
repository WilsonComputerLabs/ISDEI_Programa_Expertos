
import React, { useState, useEffect, useCallback } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Award, 
  MapPin, 
  Target, 
  UserCheck, 
  ChevronRight, 
  ChevronLeft,
  ChevronDown, 
  Briefcase, 
  Zap, 
  Building2, 
  GraduationCap, 
  ArrowRight,
  Star,
  ShieldCheck,
  Smartphone,
  Users,
  LayoutGrid,
  Map as MapIcon,
  HardHat,
  BarChart3,
  TrendingUp,
  LineChart,
  Home as HomeIcon,
  Gavel,
  DollarSign,
  MonitorPlay,
  PlayCircle,
  BarChart,
  MessageSquare,
  Newspaper,
  Share2,
  Copy,
  Check,
  ClipboardCheck,
  CreditCard,
  UserPlus,
  Rocket
} from 'lucide-react';
import { ALL_PROGRAMS_DATA, MENU_PROGRAMAS } from './data';
import { ProgramData, CourseSyllabus } from './types';

// Imágenes para el slider principal de la sección INICIO
const HOME_SLIDER_IMAGES = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070", // Corporativo
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070", // Urbanismo
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072", // Finanzas/Negocios
  "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070", // Proyectos/Construcción
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070"  // Inmobiliario
];

// Mapeo exhaustivo de imágenes altamente relacionadas con las especialidades de cada programa
const PROGRAM_HERO_IMAGES: Record<string, string[]> = {
  empresarial: [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071"
  ],
  urbanismo: [
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070",
    "https://images.unsplash.com/photo-1506146332389-18140ed7217a?q=80&w=2070",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=2070",
    "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2070"
  ],
  negocios: [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072",
    "https://images.unsplash.com/photo-1573164067005-4165085bb816?q=80&w=2070",
    "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2070",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070"
  ],
  proyectos: [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070",
    "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070",
    "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2070",
    "https://images.unsplash.com/photo-1487958449913-d92799063815?q=80&w=2070",
    "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?q=80&w=2070"
  ],
  inmobiliario: [
    "https://images.unsplash.com/photo-1582408921715-18e7806365bb?q=80&w=2070",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070",
    "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070",
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2070",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070"
  ]
};

const SectionHeader: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className={`mb-12 text-center ${light ? 'text-white' : 'text-slate-800'}`}>
    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 tracking-tight uppercase">{title}</h2>
    {subtitle && <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>}
    <div className={`h-1.5 w-24 mx-auto mt-6 rounded-full ${light ? 'bg-cyan-400' : 'bg-cyan-600'}`}></div>
  </div>
);

const Navbar: React.FC<{ 
  activeProgram: string | null; 
  onProgramChange: (id: string | null) => void;
  onNavigateHomeSection: (sectionId: string) => void;
}> = ({ activeProgram, onProgramChange, onNavigateHomeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onProgramChange(null)}>
          <div className="bg-cyan-600 p-2 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
            <Building2 size={24} />
          </div>
          <span className={`font-bold text-2xl font-heading ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            ISDEI <span className="font-light text-cyan-600">Expertos</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-10 items-center">
          <button 
            onClick={() => onProgramChange(null)}
            className={`font-semibold text-sm uppercase tracking-widest transition-colors ${scrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-slate-100 hover:text-cyan-400'}`}
          >
            Inicio
          </button>
          
          <div className="relative group">
            <button 
              className={`font-semibold text-sm uppercase tracking-widest flex items-center gap-1 transition-colors ${scrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-slate-100 hover:text-cyan-400'}`}
              onMouseEnter={() => setMenuOpen(true)}
            >
              Cursos Expertos <ChevronDown size={14} />
            </button>
            
            <div 
              className={`absolute top-full left-0 mt-4 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 origin-top ${menuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <div className="p-3">
                {MENU_PROGRAMAS.map((prog) => (
                  <button
                    key={prog.id}
                    onClick={() => { onProgramChange(prog.id); setMenuOpen(false); window.scrollTo(0,0); }}
                    className={`w-full text-left px-5 py-4 rounded-xl text-xs font-bold uppercase tracking-tight transition-all flex items-center justify-between group ${activeProgram === prog.id ? 'bg-cyan-50 text-cyan-700' : 'text-slate-600 hover:bg-slate-50 hover:text-cyan-600'}`}
                  >
                    {prog.name}
                    <ChevronRight size={14} className={`transition-transform ${activeProgram === prog.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={() => onNavigateHomeSection('admision')}
            className={`font-semibold text-sm uppercase tracking-widest transition-colors ${scrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-slate-100 hover:text-cyan-400'}`}
          >
            Admisión
          </button>
          <button 
            onClick={() => onNavigateHomeSection('noticias')}
            className={`font-semibold text-sm uppercase tracking-widest transition-colors ${scrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-slate-100 hover:text-cyan-400'}`}
          >
            Blog
          </button>
          <button 
            onClick={() => onNavigateHomeSection('contacto')}
            className={`font-semibold text-sm uppercase tracking-widest transition-colors ${scrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-slate-100 hover:text-cyan-400'}`}
          >
            Nosotros
          </button>
          
          <div className="flex gap-4">
            <button className={`px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${scrolled ? 'text-cyan-600 border border-cyan-600 hover:bg-cyan-50' : 'text-white border border-white/30 hover:bg-white/10'}`}>
              Ingreso
            </button>
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all shadow-lg">
              Registro
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HomeLanding = ({ onNavigateToProgram }: { onNavigateToProgram: (id: string) => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HOME_SLIDER_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HOME_SLIDER_IMAGES.length) % HOME_SLIDER_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Home with 5-Image Slider */}
      <section id="inicio-home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
        
        {/* Full-width Background Slider */}
        <div className="absolute inset-0 z-0">
          {HOME_SLIDER_IMAGES.map((img, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-40' : 'opacity-0'}`}
            >
              <img src={img} className="w-full h-full object-cover" alt={`Slide ${idx + 1}`} />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in slide-in-from-left-20 duration-1000">
            <div className="inline-flex items-center gap-2 bg-cyan-600/20 backdrop-blur-md border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <Smartphone size={14} /> Comunicaciones Plataforma 100% Activa
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-heading text-white leading-[1.1] mb-8 uppercase tracking-tighter">
              <span className="text-cyan-400">Estudiar</span> Online es mas sencillo y eficiente en ISDEI
            </h1>
            <p className="text-slate-300 text-xl mb-12 max-w-xl leading-relaxed font-medium border-l-4 border-cyan-500 pl-6">
              ISDEI desarrolló una plataforma para mejorar la educación en el rubro inmobiliario y empresarial.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-cyan-600/30 flex items-center gap-3">
                REGISTRATE AHORA <ArrowRight size={18} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all backdrop-blur-xl border border-white/20 flex items-center gap-3">
                <PlayCircle size={20} /> VIDEO INTRO
              </button>
            </div>

            {/* Home Slider Controls */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex gap-2">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-600 transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-600 transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="flex gap-2">
                {HOME_SLIDER_IMAGES.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-cyan-400' : 'w-2 bg-white/30'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative animate-in zoom-in duration-1000 delay-300">
            <div className="relative z-10 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-4 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000" 
                className="rounded-[2.5rem] w-full aspect-[4/5] object-cover" 
                alt="Mag. Victor Pacheco"
              />
              <div className="absolute top-8 right-8 bg-cyan-600 text-white p-4 rounded-2xl shadow-xl animate-bounce">
                <span className="block font-black text-2xl">+250</span>
                <span className="text-[10px] uppercase font-bold opacity-80">Clases Online</span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-white"><Users size={20} /></div>
                <div>
                  <p className="text-white font-black text-sm">Usuarios ONLINE</p>
                  <p className="text-cyan-400 text-[10px] uppercase font-bold">Hoy a las 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-cyan-600 mb-4">Nuestras Estadísticas</h2>
            <p className="text-slate-500 font-medium">En ISDEI medimos nuestro desempeño en varias métricas y estadísticas para mejorar continuamente.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { val: "+250", label: "Alumnos" },
              { val: "85%", label: "Alumnos Satisfechos" },
              { val: "35", label: "Casos de Éxito" },
              { val: "26", label: "Cursos Y Programas" },
              { val: "06", label: "Años de Experiencia" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <p className="text-4xl md:text-5xl font-black text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">{stat.val}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">Cursos Especializados <span className="text-cyan-600">Derecho Inmobiliario</span></h2>
            <p className="text-slate-500 leading-relaxed">El curso presente ofrece a los participantes una comprensión integral de las leyes y procesos clave en el sector inmobiliario, preparándolos para gestionar transacciones y proteger los derechos de las partes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Información Actualizada por Especialistas", desc: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts." },
              { icon: Zap, title: "Metodología Práctica y Moderna", desc: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance." },
              { icon: Smartphone, title: "Plataforma 100% Online", desc: "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization." }
            ].map((feat, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all border border-slate-100 group">
                <div className="bg-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center text-cyan-600 mb-8 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-lg">
                  <feat.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Section (Replacing old Platform Preview) */}
      <section id="admision" className="py-32 bg-white overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Proceso de Admisión ISDEI" 
            subtitle="Únete a la próxima generación de expertos inmobiliarios. Un proceso ágil, digital y diseñado para profesionales." 
          />
          
          <div className="grid lg:grid-cols-4 gap-8 mb-24 relative">
            {/* Visual connector line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>
            
            {[
              { icon: UserPlus, step: "01", title: "Inscripción Online", desc: "Completa tu registro en nuestra plataforma digital con tus datos básicos." },
              { icon: ClipboardCheck, step: "02", title: "Evaluación de Perfil", desc: "Nuestro comité académico revisa tu CV y experiencia para asegurar el nivel del grupo." },
              { icon: CreditCard, step: "03", title: "Matrícula y Pago", desc: "Reserva tu vacante mediante nuestros diversos canales de pago y convenios." },
              { icon: Rocket, step: "04", title: "Acceso y Bienvenida", desc: "Recibe tus credenciales del Campus Virtual y comienza tu formación 360°." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100 relative z-10 hover:shadow-2xl transition-all group hover:-translate-y-2">
                <div className="bg-slate-900 text-cyan-400 w-12 h-12 rounded-xl flex items-center justify-center mb-8 shadow-xl group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <item.icon size={24} />
                </div>
                <span className="text-[10px] font-black text-cyan-600 tracking-widest uppercase mb-4 block">Paso {item.step}</span>
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase leading-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-950 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-3xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px]"></div>
              <h2 className="text-3xl font-black mb-8 uppercase leading-tight">Beca <span className="text-cyan-400">Excelencia Académica</span></h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">ISDEI otorga beneficios exclusivos para profesionales con trayectoria destacada y grupos corporativos. Solicita hoy una entrevista de evaluación para acceder a:</p>
              
              <ul className="space-y-6 mb-12">
                {[
                  "Descuentos de hasta el 25% por pago anticipado.",
                  "Convenios especiales para equipos de inmobiliarias.",
                  "Financiamiento directo sin intereses.",
                  "Becas parciales por mérito profesional."
                ].map((txt, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="bg-cyan-600/20 p-2 rounded-lg text-cyan-400"><CheckCircle2 size={18} /></div>
                    <span className="font-bold text-slate-200">{txt}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-cyan-600 hover:bg-cyan-500 text-white w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-cyan-600/20 flex items-center justify-center gap-3">
                POSTULAR A BECA <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: MonitorPlay, title: "Plataforma 24/7", text: "Acceso ilimitado a las sesiones grabadas y material complementario en alta resolución." },
                { icon: Users, title: "Networking Élite", text: "Interactúa con los profesionales más influyentes del sector inmobiliario peruano." },
                { icon: ShieldCheck, title: "Certificación Oficial", text: "Diplomas modulares y final con respaldo del instituto líder en derecho empresarial." },
                { icon: LayoutGrid, title: "Syllabus Moderno", text: "Contenido alineado a la realidad del mercado inmobiliario actual y futuro." }
              ].map((box, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                   <div className="text-slate-400 group-hover:text-cyan-600 mb-6 transition-colors">
                     <box.icon size={32} />
                   </div>
                   <h4 className="font-black text-slate-900 mb-3 uppercase text-sm tracking-tight">{box.title}</h4>
                   <p className="text-slate-500 text-xs leading-relaxed font-medium">{box.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase">Profesores <span className="text-cyan-600">Especialistas</span> 👋 en las materias a dictar.</h2>
              <p className="text-slate-600 text-lg mb-12">Las sesiones van a estar a cargo de los más destacados profesionales, todos ellos especialistas en la materia y cuentan con una amplia experiencia para brindar una enseñanza de primera.</p>
              <div className="relative bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 max-w-lg">
                 <div className="absolute -top-6 -left-6 bg-cyan-600 text-white p-4 rounded-2xl shadow-xl"><MessageSquare size={24} /></div>
                 <p className="text-slate-500 italic font-medium leading-relaxed">"Nuestra plataforma académica proporciona herramientas para gestionar la clase, como la lista de alumnos, la asistencia y más. Con el libro de calificaciones, los profesores pueden revisar y calificar exámenes y cuestionarios en tiempo real."</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="relative inline-block">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000" 
                  className="rounded-full w-80 h-80 object-cover border-[10px] border-white shadow-2xl group-hover:rotate-3 transition-transform duration-500" 
                  alt="Profesor"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-2xl min-w-[200px]">
                   <p className="font-black uppercase tracking-widest text-sm">Mag. Victor Pacheco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-cyan-600 mb-4">TESTIMONIOS</h2>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase">Que dicen nuestros Alumnos?</h2>
              <p className="text-slate-500 text-lg mb-10">Contamos con más de 2,000 valoraciones positivas de nuestros alumnos. Nuestros alumnos reforzaron sus conocimientos y sus habilidades.</p>
              <button className="text-cyan-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
                Nuestros Testimonios <ArrowRight size={16} />
              </button>
            </div>
            <div className="relative">
              <div className="bg-slate-900 rounded-[4rem] p-12 text-white shadow-3xl">
                <div className="flex gap-2 text-amber-500 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="currentColor" />)}
                </div>
                <p className="text-xl italic font-medium leading-relaxed mb-8">"Gracias a los cursos de ISDEI, ahora tengo las habilidades y conocimientos importantes para mi desarrollo profesional, excelente curso y la plana docente es de otro nivel."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800"></div>
                  <div>
                    <p className="font-black text-sm uppercase">Gloria Salas</p>
                    <p className="text-cyan-400 text-[10px] font-bold uppercase">32 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="noticias" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Últimas Noticias y Recursos</h2>
            <p className="text-slate-500">Revise las noticias relevantes y los datos más importantes del Rubro Inmobiliario</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 group">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" alt="News 1" />
              <div className="p-10">
                <span className="bg-cyan-600/10 text-cyan-600 text-[10px] font-black px-4 py-1 rounded-full uppercase mb-6 inline-block">NOTICIAS</span>
                <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight uppercase">El Boom de la IA en sector inmobiliario:</h3>
                <p className="text-slate-500 mb-8 leading-relaxed font-medium">Así está cambiando la compraventa de propiedades en Perú. Especialistas destacan la digitalización y el uso de la IA para mejorar los resultados de las inmobiliarias.</p>
                <button className="text-cyan-600 font-black text-xs uppercase tracking-widest border-b-2 border-cyan-600 pb-1">Leer más</button>
              </div>
            </div>
            <div className="space-y-8">
              {[
                { img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070", title: "Sólo 2 edificios de los 10 más altos de Perú son residenciales" },
                { img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070", title: "Multifamily, un esquema alternativo de arrendamiento para adultos jóvenes" },
                { img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070", title: "Más de 13.800 familias podrán comprar viviendas en 2026" }
              ].map((news, i) => (
                <div key={i} className="flex gap-6 group cursor-pointer bg-white p-4 rounded-3xl shadow-sm hover:shadow-md transition-all">
                  <img src={news.img} className="w-32 h-24 rounded-2xl object-cover" alt="Thumb" />
                  <div>
                    <h4 className="text-slate-900 font-black text-sm uppercase leading-tight mb-3 group-hover:text-cyan-600 transition-colors">{news.title}</h4>
                    <span className="text-slate-400 text-[10px] font-black uppercase">NOTICIAS • HOY</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SyllabusViewer: React.FC<{ syllabi: CourseSyllabus[] }> = ({ syllabi }) => {
  const [activeTab, setActiveTab] = useState(syllabi[0]?.id);
  const [openUnit, setOpenUnit] = useState<number | null>(0);

  useEffect(() => {
    if (syllabi && syllabi.length > 0) {
      setActiveTab(syllabi[0].id);
    }
  }, [syllabi]);

  const activeCourse = syllabi.find(s => s.id === activeTab);
  
  if (!activeCourse) return (
    <div className="text-center py-24 bg-white rounded-[3rem] shadow-xl border border-slate-100 animate-in fade-in zoom-in duration-500">
       <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
         <BookOpen size={48} />
       </div>
       <p className="italic text-slate-400 text-xl font-medium">Syllabus detallado disponible próximamente para este programa experto.</p>
    </div>
  );

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-10 duration-700">
      <div className="flex flex-col md:flex-row bg-slate-900 overflow-x-auto">
        {syllabi.map((course) => (
          <button
            key={course.id}
            onClick={() => { setActiveTab(course.id); setOpenUnit(0); }}
            className={`flex-1 px-10 py-7 text-xs font-black uppercase tracking-widest transition-all border-b-4 md:border-b-0 md:border-r border-slate-800 whitespace-nowrap ${
              activeTab === course.id 
                ? 'bg-cyan-600 text-white border-cyan-400' 
                : 'text-slate-500 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            Especialidad {course.specialtyNumber}
          </button>
        ))}
      </div>
      
      <div className="p-8 md:p-16">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-cyan-600 text-white text-[10px] font-black px-4 py-1.5 rounded-lg uppercase tracking-widest shadow-lg shadow-cyan-600/20">
                Módulo Académico {activeCourse.specialtyNumber}
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 text-sm font-bold flex items-center gap-2">
                <Clock size={16} className="text-cyan-600" /> {activeCourse.duracion}
              </span>
              <span className="text-slate-500 text-sm font-bold flex items-center gap-2">
                <Star size={16} className="text-amber-500" /> {activeCourse.creditos} Créditos
              </span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-8 leading-tight">{activeCourse.name}</h3>
            
            <div className="bg-slate-50 p-8 rounded-[2rem] border-l-8 border-cyan-600 mb-10 shadow-sm">
               <h4 className="text-xs font-black uppercase tracking-[0.2em] text-cyan-600 mb-3">Sumilla Académica</h4>
               <p className="text-slate-600 leading-relaxed text-lg italic font-medium">"{activeCourse.sumilla}"</p>
            </div>

            <div className="mb-12">
              <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Target className="text-cyan-600" size={24} /> Competencia General
              </h4>
              <p className="text-slate-600 leading-relaxed text-lg">
                {activeCourse.competenciaGeneral}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <LayoutGrid className="text-cyan-600" size={24} /> Unidades Formativas
              </h4>
              {activeCourse.unidades.map((unidad, idx) => (
                <div key={idx} className="border border-slate-100 rounded-3xl overflow-hidden transition-all hover:border-cyan-200">
                  <button 
                    onClick={() => setOpenUnit(openUnit === idx ? null : idx)}
                    className={`w-full flex justify-between items-center p-7 text-left transition-all ${openUnit === idx ? 'bg-cyan-50' : 'bg-white hover:bg-slate-50'}`}
                  >
                    <div className="flex items-center gap-5">
                      <span className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black transition-all border shadow-sm ${openUnit === idx ? 'bg-cyan-600 text-white border-cyan-500' : 'bg-white text-slate-400 border-slate-200'}`}>
                        {idx + 1}
                      </span>
                      <span className={`font-bold text-lg ${openUnit === idx ? 'text-cyan-900' : 'text-slate-800'}`}>{unidad.title}</span>
                    </div>
                    {openUnit === idx ? <ChevronDown size={24} className="text-cyan-600" /> : <ChevronRight size={24} className="text-slate-300" />}
                  </button>
                  {openUnit === idx && (
                    <div className="p-8 bg-white border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="flex items-center gap-2 mb-6 text-cyan-600 font-black text-xs uppercase tracking-widest">
                         <Clock size={14}/> {unidad.hours} horas cronológicas
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">
                        {unidad.topics.map((topic, tidx) => (
                          <li key={tidx} className="flex items-start gap-3 text-slate-600 text-base">
                            <CheckCircle2 size={18} className="text-cyan-500 mt-1 shrink-0" />
                            <span className="font-medium">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700"><Award size={200} /></div>
              <h4 className="font-black text-xs uppercase tracking-widest mb-6 opacity-80">Acreditación Intermedia</h4>
              <p className="text-sm font-medium mb-6 leading-relaxed">Al aprobar satisfactoriamente este módulo formativo, el participante obtiene el título de:</p>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 font-black text-lg leading-tight shadow-inner">
                {activeCourse.certificacion}
              </div>
            </div>

            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl border border-slate-800">
              <h4 className="font-black text-xs uppercase tracking-widest mb-8 text-cyan-500">Sistema de Evaluación</h4>
              <div className="space-y-6">
                {activeCourse.sistemaEvaluacion.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center group">
                    <span className="text-slate-400 font-bold group-hover:text-slate-200 transition-colors">{item.component}</span>
                    <span className="font-black text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-lg">{item.weight}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-slate-800">
                <h5 className="text-[10px] uppercase font-black text-slate-500 mb-4 tracking-[0.3em]">Exigencia Final</h5>
                <p className="text-slate-300 font-medium leading-relaxed bg-slate-800/50 p-5 rounded-2xl border border-slate-700 italic">"{activeCourse.trabajoFinal}"</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl">
               <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-6">Bibliografía Académica</h4>
               <ul className="space-y-4">
                 {activeCourse.bibliografia.map((item, idx) => (
                   <li key={idx} className="text-sm text-slate-600 font-bold flex gap-3 group">
                     <span className="text-cyan-500 font-black group-hover:translate-x-1 transition-transform">→</span> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeProgramId, setActiveProgramId] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copied, setCopied] = useState(false);
  
  // Hash Routing Logic
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (ALL_PROGRAMS_DATA[hash]) {
        setActiveProgramId(hash);
      } else if (hash === '' || hash === '/') {
        setActiveProgramId(null);
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const changeProgram = (id: string | null) => {
    if (id === null) {
      window.location.hash = '/';
    } else {
      window.location.hash = `/${id}`;
    }
    window.scrollTo(0, 0);
  };

  const navigateToHomeSection = (sectionId: string) => {
    // Primero nos aseguramos de estar en la landing principal
    if (activeProgramId !== null) {
      window.location.hash = '/';
      // Pequeño timeout para esperar a que React renderice la landing de nuevo
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si ya estamos en la landing, simplemente hacemos scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const copyCurrentUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const activeProgram = activeProgramId ? (ALL_PROGRAMS_DATA[activeProgramId] || ALL_PROGRAMS_DATA['empresarial']) : null;
  const currentProgramImages = activeProgramId ? (PROGRAM_HERO_IMAGES[activeProgramId] || PROGRAM_HERO_IMAGES['empresarial']) : [];

  const nextSlide = useCallback(() => {
    if (currentProgramImages.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % currentProgramImages.length);
  }, [currentProgramImages.length]);

  const prevSlide = useCallback(() => {
    if (currentProgramImages.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + currentProgramImages.length) % currentProgramImages.length);
  }, [currentProgramImages.length]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [activeProgramId]);

  useEffect(() => {
    if (activeProgramId) {
      const timer = setInterval(nextSlide, 8000);
      return () => clearInterval(timer);
    }
  }, [nextSlide, activeProgramId]);

  const getProgramIcon = () => {
    switch(activeProgramId) {
      case 'urbanismo': return <MapIcon size={120} />;
      case 'proyectos': return <HardHat size={120} />;
      case 'empresarial': return <BarChart3 size={120} />;
      case 'negocios': return <TrendingUp size={120} />;
      case 'inmobiliario': return <HomeIcon size={120} />;
      default: return <Building2 size={120} />;
    }
  };

  const getSpecialtyIcon = (index: number) => {
    if (activeProgramId === 'inmobiliario') {
      switch(index) {
        case 0: return <Gavel className="text-cyan-500" />;
        case 1: return <TrendingUp className="text-cyan-500" />;
        case 2: return <DollarSign className="text-cyan-500" />;
      }
    }
    return <ChevronRight className="text-cyan-500" />;
  }

  return (
    <div className="min-h-screen selection:bg-cyan-500 selection:text-white">
      <Navbar 
        activeProgram={activeProgramId} 
        onProgramChange={changeProgram} 
        onNavigateHomeSection={navigateToHomeSection}
      />

      {activeProgramId === null ? (
        <HomeLanding onNavigateToProgram={changeProgram} />
      ) : activeProgram && (
        <div className="animate-in fade-in duration-500">
          {/* Hero Slider Section Specific */}
          <section id="inicio" className="relative h-[85vh] md:h-screen flex items-center overflow-hidden bg-slate-950">
            {currentProgramImages.map((img, idx) => (
              <div 
                key={`${activeProgramId}-${idx}`}
                className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-110 rotate-1'}`}
              >
                <img 
                  src={img} 
                  alt={`Slide ${idx + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-transparent"></div>
              </div>
            ))}

            <div className="container mx-auto px-6 relative z-20">
              <div className="max-w-4xl animate-in fade-in slide-in-from-left-20 duration-1000">
                <div className="flex flex-wrap items-center gap-3 mb-10">
                  <div className="inline-flex items-center gap-3 bg-cyan-600/20 backdrop-blur-md border border-cyan-500/30 text-cyan-400 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-2xl">
                    <Star size={14} className="fill-cyan-400" /> ISDEI • Excelencia Académica
                  </div>
                  <button 
                    onClick={copyCurrentUrl}
                    className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all group"
                  >
                    {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} className="text-cyan-400 group-hover:scale-110 transition-transform" />}
                    {copied ? '¡Copiado!' : 'Copiar Enlace Directo'}
                  </button>
                </div>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black font-heading text-white leading-[1.2] mb-8 drop-shadow-2xl uppercase tracking-tighter">
                  {activeProgram.title.includes('Experto') ? (
                    <>
                      {activeProgram.title.split(' Experto ')[0]} <br />
                      <span className="gradient-text italic">Experto {activeProgram.title.split(' Experto ')[1]}</span>
                    </>
                  ) : activeProgram.title}
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-12 leading-relaxed max-w-2xl drop-shadow-lg font-medium border-l-4 border-cyan-500 pl-8 backdrop-blur-sm bg-white/5 py-4 rounded-r-3xl">
                  {activeProgram.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-5 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all shadow-2xl hover:shadow-cyan-500/60 flex items-center gap-3 group">
                    Postular Ahora <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all backdrop-blur-xl border border-white/20 flex items-center gap-3 group">
                    Ver Brochure <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
                   {[
                     { val: "180", label: "Horas Lectivas" },
                     { val: "3", label: "Especialidades" },
                     { val: "100%", label: "Enfoque Práctico" },
                     { val: "MOD", label: "Cert. Modular" }
                   ].map((stat, i) => (
                     <div key={i} className="flex flex-col group cursor-default">
                       <span className="text-white font-black text-4xl mb-1 group-hover:text-cyan-400 transition-colors">{stat.val}</span>
                       <span className="text-cyan-500 text-[9px] font-black uppercase tracking-[0.3em]">{stat.label}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 right-12 z-30 flex flex-col gap-4 pointer-events-auto">
              <div className="flex gap-4">
                <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl text-white flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-500 transition-all shadow-2xl group">
                  <ChevronLeft size={28} className="group-active:scale-90 transition-transform" />
                </button>
                <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl text-white flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-500 transition-all shadow-2xl group">
                  <ChevronRight size={28} className="group-active:scale-90 transition-transform" />
                </button>
              </div>
            </div>
          </section>

          {/* Program Presentation */}
          <section id="programa" className="py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 rounded-l-[10rem] -z-0"></div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="relative group">
                  <div className="absolute -top-12 -left-12 w-64 h-64 bg-cyan-100 rounded-full blur-[100px] opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <img 
                    src={activeProgramId === 'inmobiliario' ? "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" : "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&q=80"} 
                    alt="Formación Profesional ISDEI" 
                    className="rounded-[4rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
                  />
                  <div className="absolute -bottom-10 -right-10 bg-slate-900 p-10 rounded-[3rem] shadow-2xl z-20 max-w-sm transform group-hover:scale-105 transition-transform duration-500 border border-slate-800">
                    <Target size={40} className="text-cyan-500 mb-6" />
                    <p className="text-white font-bold text-2xl italic leading-tight">"{activeProgram.presentationQuote}"</p>
                  </div>
                </div>
                <div>
                  <div className="text-left mb-12">
                    <h2 className="text-4xl md:text-5xl font-black font-heading text-slate-900 mb-6 leading-tight uppercase tracking-tighter">Presentación del Programa</h2>
                    <div className="h-2 w-24 bg-cyan-600 rounded-full mb-10"></div>
                    <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium italic border-l-4 border-slate-100 pl-8">
                      {activeProgram.presentationText}
                    </p>
                  </div>
                  
                  <div className="grid gap-6">
                    {activeProgram.presentationBullets.map((item, i) => (
                      <div key={i} className="flex items-center gap-6 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-cyan-100 transition-all group">
                        <div className="bg-cyan-100 p-4 rounded-2xl text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                          <CheckCircle2 size={24} />
                        </div>
                        <span className="text-slate-800 font-bold text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Specialties specific to program */}
          <section id="especialidades" className="py-32 bg-white">
            <div className="container mx-auto px-6">
              <SectionHeader title="Estructura Académica" subtitle="Un recorrido modular y exhaustivo a través de las especialidades críticas del sector." />
              
              <div className="grid lg:grid-cols-3 gap-10">
                {activeProgram.specialties.map((esp, i) => (
                  <div key={i} className="group relative bg-slate-50 rounded-[4rem] p-12 overflow-hidden transition-all hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 hover:border-cyan-200">
                    <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 text-slate-900">
                       {getProgramIcon()}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="bg-slate-900 text-cyan-400 w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl mb-10 shadow-xl border border-slate-700">
                        0{i + 1}
                      </div>
                      
                      <h3 className="text-2xl font-black mb-8 leading-tight min-h-[4rem] text-slate-900 uppercase tracking-tighter">
                        {esp.title.split(': ')[1] || esp.title}
                      </h3>
                      
                      <ul className="space-y-5 mb-12">
                        {esp.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-4 text-slate-600 group/item">
                            <div className="mt-1 transition-transform group-hover/item:translate-x-1">
                              {getSpecialtyIcon(i)}
                            </div>
                            <span className="font-bold text-lg leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-8 border-t border-slate-200">
                        <p className="text-[10px] uppercase font-black tracking-[0.2em] text-cyan-600 mb-3">Título Modular</p>
                        <div className="bg-cyan-50 p-5 rounded-2xl border border-cyan-100 text-cyan-900 font-black text-xs leading-tight tracking-tight uppercase">
                          {esp.certification}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-20 bg-gradient-to-br from-slate-900 to-slate-950 rounded-[4rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-3xl border border-slate-800">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20"></div>
                 <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-600 rounded-full blur-[150px] opacity-20"></div>
                 
                 <div className="relative z-10 max-w-3xl mx-auto">
                   <Award size={64} className="text-cyan-500 mx-auto mb-8 animate-bounce" />
                   <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Diploma de Experto</h3>
                   <p className="text-slate-400 mb-12 text-xl italic font-medium leading-relaxed">
                     Al culminar satisfactoriamente las tres especialidades, ISDEI otorga la máxima acreditación que certifica tu dominio integral del sector.
                   </p>
                   
                   <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white/5 border border-white/10 px-10 py-6 rounded-3xl backdrop-blur-xl shadow-2xl">
                     <div className="bg-cyan-600 p-3 rounded-2xl text-white shadow-lg"><CheckCircle2 size={32} /></div>
                     <span className="font-black text-xl md:text-2xl uppercase tracking-tighter leading-tight text-white">{activeProgram.finalDiploma}</span>
                   </div>
                 </div>
              </div>
            </div>
          </section>

          {/* Syllabus viewer specific to program */}
          <section id="syllabus" className="py-32 bg-slate-50 relative">
            <div className="container mx-auto px-6">
              <SectionHeader title="Syllabus Académico" subtitle="Contenido de alto rigor académico y técnico, estructurado por unidades formativas." />
              <SyllabusViewer syllabi={activeProgram.syllabi} />
            </div>
          </section>
        </div>
      )}

      {/* Footer (Shared) */}
      <footer id="contacto" className="bg-slate-950 text-white pt-32 pb-16 relative overflow-hidden scroll-mt-20">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-10 group cursor-pointer" onClick={() => changeProgram(null)}>
                <div className="bg-cyan-600 p-3 rounded-2xl">
                  <Building2 size={32} />
                </div>
                <span className="font-black text-3xl font-heading tracking-tighter">ISDEI</span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 italic font-medium">
                Instituto Superior de Derecho Empresarial e Inmobiliario. Líderes en la formación de la élite estratégica del país.
              </p>
            </div>
            
            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-10 text-cyan-500">Nuestros Programas</h4>
              <ul className="space-y-6">
                {MENU_PROGRAMAS.map(p => (
                  <li key={p.id} onClick={() => changeProgram(p.id)} className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-all flex items-center gap-3 group font-bold">
                    <ChevronRight size={14} className="text-cyan-600 group-hover:translate-x-1 transition-transform" /> {p.name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-10 text-cyan-500">Contacto Académico</h4>
              <ul className="space-y-6 text-slate-400 font-bold">
                <li className="flex items-center gap-4 group">
                  <div className="bg-white/5 p-3 rounded-xl group-hover:bg-cyan-600/20 transition-colors"><MapPin size={20} className="text-cyan-600" /></div>
                  Lima, Perú
                </li>
                <li className="flex items-center gap-4 group">
                   <div className="bg-white/5 p-3 rounded-xl group-hover:bg-cyan-600/20 transition-colors"><Smartphone size={20} className="text-cyan-600" /></div>
                   Central de Admisión
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="bg-white/5 p-3 rounded-xl group-hover:bg-cyan-600/20 transition-colors"><GraduationCap size={20} className="text-cyan-600" /></div>
                  Campus Virtual 24/7
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3.5rem] border border-white/10 shadow-2xl">
               <h4 className="font-black text-xl mb-6 uppercase tracking-tight text-white">Solicita Información</h4>
               <p className="text-slate-400 text-sm mb-10 leading-relaxed font-medium">Agenda una entrevista con un coordinador académico para conocer nuestras becas por excelencia.</p>
               <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-black py-5 rounded-[2rem] transition-all shadow-xl shadow-cyan-600/20 flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                 <Smartphone size={18} /> Contactar
               </button>
            </div>
          </div>
          
          <div className="border-t border-slate-900 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-500 text-xs font-black uppercase tracking-widest">
              © {new Date().getFullYear()} ISDEI EXPERTOS – TODOS LOS DERECHOS RESERVADOS.
            </p>
            <div className="flex gap-10">
               <span className="text-slate-600 text-xs font-bold uppercase hover:text-slate-400 cursor-pointer transition-colors">Términos</span>
               <span className="text-slate-600 text-xs font-bold uppercase hover:text-slate-400 cursor-pointer transition-colors">Privacidad</span>
               <span className="text-slate-600 text-xs font-bold uppercase hover:text-slate-400 cursor-pointer transition-colors">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
