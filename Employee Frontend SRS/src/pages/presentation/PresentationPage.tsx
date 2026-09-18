import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  ChevronRight,
  ChevronLeft,
  Target,
  TrendingUp,
  Check,
  Clock,
  Layers,
  Award,
  ShieldCheck,
} from 'lucide-react';

export default function PresentationPage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    {
      id: 1,
      tag: 'Slide 01',
      category: 'Executive Summary',
      title: 'Workforce Capability in Statistical Governance',
      subtitle: 'Addressing competency gaps across civil service personnel using targeted diagnostics.',
      icon: Target,
      bullets: [
        'Central & state statistical officers require continuous up-skilling in modern data analysis, Python, and survey sampling.',
        'Legacy training approaches rely on static yearly physical workshops without personalized diagnostic tracking.',
        'SkillSaarthi Portal introduces automated competency mapping aligned with iGOT Karmayogi national frameworks.',
        'Enables real-time readiness visibility for department heads and statistical ministry executives.',
      ],
      keyTakeaway: 'Goal: Reduce time-to-competency by 45% while achieving 98.4% diagnostic accuracy.',
    },
    {
      id: 2,
      tag: 'Slide 02',
      category: 'Core Architecture',
      title: 'Four Pillars of SkillSaarthi Ecosystem',
      subtitle: 'An integrated workforce intelligence ecosystem engineered specifically for public sector deployment.',
      icon: ShieldCheck,
      bullets: [
        'Automated Skill Gap Detection: Compares individual officer test baselines against Ministry role frameworks.',
        'Adaptive Learning Paths: Curates personalized, self-paced micro-learning sequences based on career goals.',
        'Automated Evaluation Engine: Dynamically builds context-aware assessments directly from official manuals.',
        'Executive Telemetry Dashboard: Tracks department-wide readiness, completion rates, and skill distribution.',
      ],
      keyTakeaway: 'Built with government-grade security (ISO 27001) and role-based access control.',
    },
    {
      id: 3,
      tag: 'Slide 03',
      category: 'Workflow & User Journey',
      title: 'Seamless Officer Learning Experience',
      subtitle: 'How a civil servant progresses from initial diagnostic to certified competency.',
      icon: Layers,
      bullets: [
        '1. Profile Ingestion — Secure sync of officer designation, department, and historic training logs.',
        '2. Diagnostic Evaluation Scan — Automated evaluation identifying strengths and specific target skill gaps.',
        '3. Recommended Pathway — System suggests prioritized 4-hour micro-modules with clear milestones.',
        '4. Interactive Learning — Hands-on coursework with official manuals, case studies, and code notebooks.',
        '5. Verification & Certification — Context-aware evaluation updates the officer’s official registry profile.',
      ],
      keyTakeaway: 'Zero friction onboarding designed for intuitive daily use by officers of all tech backgrounds.',
    },
    {
      id: 4,
      tag: 'Slide 04',
      category: 'Impact & Results',
      title: 'National Scale Deployment Metrics',
      subtitle: 'Demonstrated outcomes achieved across central and state statistical bureaus.',
      icon: TrendingUp,
      bullets: [
        '12,500+ Civil Servants Trained: Active officers engaged in continuous micro-up-skilling.',
        '98.4% Diagnostic Accuracy: Validated against expert Ministry panel evaluations.',
        '94% Module Completion Rate: Driven by targeted 15-minute bite-sized learning modules.',
        '34% Average Growth Acceleration: Measurable skill improvement compared to control baselines.',
      ],
      keyTakeaway: 'Empowering a data-driven workforce capable of handling complex national sample surveys.',
    },
    {
      id: 5,
      tag: 'Slide 05',
      category: 'Strategic Roadmap',
      title: 'Future Platform Expansion & Integration',
      subtitle: 'Scaling capability across all central ministries and state departments.',
      icon: Award,
      bullets: [
        'Phase 1 (Complete): Core MoSPI competency framework integration & diagnostic engine.',
        'Phase 2 (Current): Full iGOT Karmayogi single sign-on & automated evaluation from PDF manuals.',
        'Phase 3 (Q3 2026): Multilingual advisory assistant for field survey personnel in 12 Indian regional languages.',
        'Phase 4 (Q4 2026): Predictive departmental staffing gap modeling for upcoming national censuses.',
      ],
      keyTakeaway: 'Establishing a benchmark for public sector talent development globally.',
    },
  ];

  const activeSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Top Simple Header */}
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-8 h-8 rounded-lg bg-[#059669] text-white flex items-center justify-center font-bold text-sm shadow-xs">
              <ShieldCheck className="w-4.5 h-4.5 text-white" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-[#065F46] tracking-tight text-base">
                SkillSaarthi <span className="text-[#059669]">Portal</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">/ Presentation</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
              Slide {currentSlide + 1} of {slides.length}
            </span>

            <button
              onClick={() => navigate('/dashboard')}
              className="text-xs font-semibold text-slate-600 hover:text-[#059669] transition-colors"
            >
              Exit to Dashboard
            </button>

            <button
              onClick={() => navigate('/')}
              className="px-3.5 py-1.5 rounded-lg bg-[#065F46] text-white text-xs font-semibold hover:bg-[#047857] transition-colors shadow-xs"
            >
              Web Portal
            </button>
          </div>

        </div>
      </header>

      {/* Main Presentation Layout */}
      <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar: Slide Index / Navigation */}
        <aside className="lg:col-span-4 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-3">
            Presentation Slides
          </div>

          <div className="space-y-2">
            {slides.map((s, idx) => {
              const SlideIcon = s.icon;
              const isActive = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-start space-x-3 group relative ${
                    isActive
                      ? 'bg-white shadow-[0_4px_20px_-2px_rgba(6,95,70,0.06)] border-l-4 border-[#059669] text-[#065F46]'
                      : 'hover:bg-slate-200/50 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg mt-0.5 shrink-0 transition-colors ${
                      isActive ? 'bg-emerald-50 text-[#059669]' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200/80'
                    }`}
                  >
                    <SlideIcon className="w-4 h-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400 font-medium">
                        {s.tag}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#059669]" />
                      )}
                    </div>
                    <div className={`text-sm font-semibold truncate ${isActive ? 'text-[#065F46]' : 'text-slate-700'}`}>
                      {s.title}
                    </div>
                    <div className="text-xs text-slate-400 truncate">
                      {s.category}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Controls */}
          <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between px-2">
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
              disabled={currentSlide === 0}
              className="p-2.5 rounded-lg bg-white border border-slate-200/80 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 shadow-xs transition-colors flex items-center space-x-1.5 text-xs font-semibold"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))}
              disabled={currentSlide === slides.length - 1}
              className="p-2.5 rounded-lg bg-[#065F46] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#047857] shadow-xs transition-colors flex items-center space-x-1.5 text-xs font-semibold"
            >
              <span>Next Slide</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </aside>

        {/* Right Area: Main Active Slide Canvas */}
        <section className="lg:col-span-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_4px_24px_-2px_rgba(6,95,70,0.06)] border border-slate-100 space-y-8 relative overflow-hidden transition-all duration-300">
            
            {/* Slide Header */}
            <div className="space-y-3 pb-6 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-[#059669] text-xs font-semibold">
                  <span>{activeSlideData.tag}</span>
                  <span>•</span>
                  <span>{activeSlideData.category}</span>
                </div>

                <div className="flex items-center space-x-1.5 text-slate-400 text-xs font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>2 min read</span>
                </div>
              </div>

              {/* Title with left accent bar touch */}
              <div className="pl-4 border-l-4 border-[#059669]">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#065F46] tracking-tight leading-snug">
                  {activeSlideData.title}
                </h1>
                <p className="text-base text-slate-500 font-normal mt-1.5">
                  {activeSlideData.subtitle}
                </p>
              </div>
            </div>

            {/* Bullet Points Container */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Highlights & Insights
              </div>

              <ul className="space-y-3.5">
                {activeSlideData.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-3.5 p-3 rounded-xl hover:bg-emerald-50/40 transition-colors group"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#059669] group-hover:text-white transition-colors">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Takeaway Highlight Box */}
            <div className="p-4.5 rounded-xl bg-emerald-50/70 border-l-4 border-[#059669] text-[#065F46] space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-[#059669] flex items-center space-x-1.5">
                <Target className="w-3.5 h-3.5 text-[#059669]" />
                <span>Executive Summary Takeaway</span>
              </div>
              <p className="text-sm font-semibold text-slate-800">
                {activeSlideData.keyTakeaway}
              </p>
            </div>

            {/* Slide Footer Navigation */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono">SkillSaarthi Portal — Government Edition</span>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
                  disabled={currentSlide === 0}
                  className="hover:text-[#059669] disabled:opacity-30 disabled:hover:text-slate-500 font-semibold flex items-center space-x-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Prev</span>
                </button>

                <span className="text-slate-300">|</span>

                <button
                  onClick={() => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))}
                  disabled={currentSlide === slides.length - 1}
                  className="hover:text-[#059669] disabled:opacity-30 disabled:hover:text-slate-500 font-semibold flex items-center space-x-1 text-[#059669]"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>

    </div>
  );
}
