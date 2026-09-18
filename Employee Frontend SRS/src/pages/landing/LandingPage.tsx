import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import {
  Target,
  GitBranch,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Users,
  Award,
  Zap,
  BookOpen,
  ChevronRight,
  FileCheck,
  Lock,
  RefreshCw,
  ExternalLink,
  FileText,
  Building2,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// ─── Mock Data for Dashboard Preview Chart ──────────────────────────────────────
const chartData = [
  { month: 'Jan', baseline: 58, target: 75, actual: 62 },
  { month: 'Feb', baseline: 60, target: 78, actual: 68 },
  { month: 'Mar', baseline: 62, target: 80, actual: 74 },
  { month: 'Apr', baseline: 64, target: 83, actual: 81 },
  { month: 'May', baseline: 65, target: 85, actual: 87 },
  { month: 'Jun', baseline: 68, target: 90, actual: 92 },
];

export default function LandingPage() {
  const navigate = useNavigate();

  // Active state for Workflow section steps
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(1);

  // Active state for Dashboard Preview tab
  const [activeDashTab, setActiveDashTab] = useState<'overview' | 'analytics' | 'insights'>('overview');

  // Interactive Module Enrollment state
  const [enrolled, setEnrolled] = useState<boolean>(false);

  // Workflow steps definitions (Official & Natural Human Terminology)
  const workflowSteps = [
    {
      id: 1,
      title: 'Profile',
      shortDesc: 'Officer Onboarding',
      icon: Users,
      detail:
        'Civil servant profile, designation, and historic assessment data are securely ingested from iGOT Karmayogi and Ministry service records.',
      metrics: 'Role: Senior Statistical Officer | Department: MoSPI',
    },
    {
      id: 2,
      title: 'Diagnostic',
      shortDesc: 'Competency Mapping',
      icon: Target,
      detail:
        'Diagnostic engine evaluates individual skill matrices against target Ministry competency standards to pinpoint critical knowledge gaps.',
      metrics: 'Found 1 Core Gap: Data Analysis & Survey Sampling',
    },
    {
      id: 3,
      title: 'Recommendation',
      shortDesc: 'Personalized Pathway',
      icon: GitBranch,
      detail:
        'Generates a structured, step-by-step learning sequence prioritizing high-impact modules aligned with official career milestones.',
      metrics: '3 Modules Recommended (12.5 hrs Total)',
    },
    {
      id: 4,
      title: 'Learning',
      shortDesc: 'Interactive Modules',
      icon: BookOpen,
      detail:
        'Hands-on self-paced coursework featuring official government manuals, case studies, and interactive statistical exercise notebooks.',
      metrics: 'Structured Quizzes + Expert Guidance',
    },
    {
      id: 5,
      title: 'Evaluation',
      shortDesc: 'Verification & Certificate',
      icon: FileCheck,
      detail:
        'Context-aware assessments test practical application, updating officer competency ratings in the national registry.',
      metrics: 'Official MoSPI Competency Certification',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* ─── TOP NAVIGATION BAR ────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Ministry Branding */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#065F46] to-[#059669] flex items-center justify-center text-white shadow-sm border border-emerald-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg tracking-tight text-[#065F46]">
                  SkillSaarthi <span className="text-[#059669]">Portal</span>
                </span>
                <span className="bg-emerald-50 text-[#059669] text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                  Govt. Edition
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">National Statistical Training Platform</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <a href="#features" className="hover:text-[#059669] transition-colors">Features</a>
            <a href="#workflow" className="hover:text-[#059669] transition-colors">Workflow</a>
            <a href="#dashboard-preview" className="hover:text-[#059669] transition-colors">Dashboard</a>
            <a href="#impact" className="hover:text-[#059669] transition-colors">Impact</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-semibold text-[#065F46] hover:text-[#059669] transition-colors"
            >
              Sign In
            </Link>
            <button
              onClick={() => navigate('/dashboard')}
              className="px-5 py-2.5 rounded-xl bg-[#065F46] hover:bg-[#047857] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2 group border border-emerald-700/30"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </header>


      {/* ─── 1. HERO SECTION ────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-white">
        {/* Soft background tint */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-emerald-100/30 via-teal-50/40 to-slate-50 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Text Column */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              {/* Official Trust Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs text-xs font-semibold text-[#065F46]">
                <Building2 className="w-4 h-4 text-[#059669]" />
                <span>Ministry of Statistics & Programme Implementation</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#065F46] tracking-tight leading-[1.15]">
                National Competency & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#065F46] via-[#059669] to-[#D97706]">
                  Workforce Portal
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Empowering statistical and civil service personnel through automated competency mapping, diagnostic skill gap assessment, and structured learning pathways.
              </p>

              {/* CTA Group */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#065F46] hover:bg-[#047857] text-white font-bold text-base transition-all duration-200 shadow-lg shadow-[#065F46]/15 hover:shadow-xl flex items-center justify-center space-x-3 group border border-emerald-700/30"
                >
                  <span>Explore Platform</span>
                  <ArrowRight className="w-5 h-5 text-[#D97706] group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#workflow"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#065F46] border border-slate-200 font-semibold text-base transition-all duration-200 shadow-xs flex items-center justify-center space-x-2 text-center"
                >
                  <Target className="w-4 h-4 text-[#059669]" />
                  <span>See How It Works</span>
                </a>
              </div>

              {/* Key Bullet Points */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>iGOT Karmayogi Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>98.4% Diagnostic Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Role-Based Security</span>
                </div>
              </div>

            </div>

            {/* Hero Right Visual Card */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Subtle Glow Accent */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-200/60 to-amber-200/50 opacity-50 blur-lg" />

                {/* Main Hero White Card */}
                <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-7 space-y-6">
                  
                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-slate-300" />
                      <div className="w-3 h-3 rounded-full bg-slate-300" />
                      <div className="w-3 h-3 rounded-full bg-slate-300" />
                      <span className="text-xs font-mono font-medium text-slate-500 ml-2">competency-matrix v4.2</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-emerald-50 text-[#059669] px-2.5 py-1 rounded-full border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-[#059669]" />
                      <span className="text-xs font-bold">Official MoSPI Diagnostics</span>
                    </div>
                  </div>

                  {/* Recommendation Alert Box (Clean Emerald & Amber Theme) */}
                  <div className="p-4.5 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50/60 border-2 border-emerald-200 text-[#065F46] shadow-sm relative overflow-hidden group">
                    <div className="flex items-start space-x-3.5 relative z-10">
                      <div className="p-2 rounded-lg bg-white text-[#059669] shadow-xs border border-emerald-200 shrink-0 mt-0.5">
                        <Target className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                            Targeted Skill Diagnostic Recommendation
                          </span>
                          <span className="text-[10px] bg-white text-[#065F46] border border-emerald-200 px-2 py-0.5 rounded-md font-mono font-bold">
                            High Priority
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-800 leading-snug">
                          “You are weak in Data Analysis. Recommended Module: <span className="font-bold text-[#065F46] underline decoration-[#D97706]">Advanced Statistical Modeling & Python for Survey Data</span>.”
                        </p>
                      </div>
                    </div>

                    <div className="mt-3.5 pt-3 border-t border-emerald-200/80 flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-semibold">Estimated Duration: 4.5 Hours</span>
                      <button
                        onClick={() => navigate('/dashboard')}
                        className="px-3.5 py-1.5 rounded-lg bg-[#065F46] hover:bg-[#047857] text-white font-bold transition-all shadow-xs flex items-center space-x-1"
                      >
                        <span>Start Learning</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#D97706]" />
                      </button>
                    </div>
                  </div>

                  {/* Competency Radar Quick Stats */}
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                      <span>Officer Competency Breakdown</span>
                      <span className="text-[#059669] font-bold">Overall Score: 84%</span>
                    </div>

                    {/* Progress Item 1 */}
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-slate-700 font-semibold">Survey Sampling Methods</span>
                        <span className="font-bold text-slate-900">92% (Advanced)</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200/60">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#065F46] to-[#059669]" style={{ width: '92%' }} />
                      </div>
                    </div>

                    {/* Progress Item 2 */}
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-slate-700 font-semibold">Data Analysis & Python</span>
                        <span className="font-bold text-amber-600">64% (Action Needed)</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200/60">
                        <div className="h-full rounded-full bg-amber-500" style={{ width: '64%' }} />
                      </div>
                    </div>

                    {/* Progress Item 3 */}
                    <div>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-slate-700 font-semibold">National Accounts Statistics</span>
                        <span className="font-bold text-slate-900">88% (Proficient)</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200/60">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#059669] to-[#D97706]" style={{ width: '88%' }} />
                      </div>
                    </div>
                  </div>

                  {/* Micro Footer Badge inside Card */}
                  <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                    <div className="flex items-center space-x-1.5">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Encrypted Govt. Data Pipeline</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-400">Sync: 2m ago</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ─── 2. FEATURES SECTION (4 CARDS) ──────────────────────────────────────── */}
      <section id="features" className="py-20 bg-slate-50/60 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white text-[#065F46] text-xs font-bold border border-slate-200 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
              <span>Core Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#065F46] tracking-tight">
              Engineered for National Workforce Intelligence
            </h2>
            <p className="text-base text-slate-600">
              Integrated, end-to-end capabilities tailored to civil service competency frameworks and official statistical domain standards.
            </p>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Feature 1: Skill Gap Detection */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#059669] group relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-[#059669] flex items-center justify-center shadow-xs group-hover:bg-[#065F46] group-hover:text-white transition-colors duration-300">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#065F46] group-hover:text-[#059669] transition-colors">
                  Skill Gap Detection
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Automated diagnostic engine comparing individual capabilities against official Ministry role frameworks to identify precise training gaps.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#059669]">
                <span>Automated Matrix Mapping</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature 2: Personalized Learning Path */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#059669] group relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-[#059669] flex items-center justify-center shadow-xs group-hover:bg-[#065F46] group-hover:text-white transition-colors duration-300">
                  <GitBranch className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#065F46] group-hover:text-[#059669] transition-colors">
                  Personalized Learning Path
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Adaptive curriculum curated dynamically according to officer role, assessment baselines, and promotion readiness benchmarks.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#059669]">
                <span>Adaptive Milestones</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature 3: Question Bank & Evaluation */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#059669] group relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-[#059669] flex items-center justify-center shadow-xs group-hover:bg-[#065F46] group-hover:text-white transition-colors duration-300">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#065F46] group-hover:text-[#059669] transition-colors">
                  Automated Question Bank
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Context-aware evaluations generated instantly from official statistical manuals, sampling guidelines, and regulatory documentation.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#059669]">
                <span>Manual-to-Evaluation Engine</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Feature 4: Progress Analytics */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#059669] group relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-[#059669] flex items-center justify-center shadow-xs group-hover:bg-[#065F46] group-hover:text-white transition-colors duration-300">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#065F46] group-hover:text-[#059669] transition-colors">
                  Progress Analytics
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Executive dashboard providing real-time readiness metrics, department-wide skill coverage, and completion rate intelligence.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#059669]">
                <span>Executive Telemetry</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ─── 3. WORKFLOW SECTION ────────────────────────────────────────────────── */}
      <section id="workflow" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">Integrated Execution Model</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#065F46] tracking-tight">
              Visual Workflow: Profile → Diagnostic Evaluation
            </h2>
            <p className="text-base text-slate-600">
              Click any stage below to inspect how civil service profiles move seamlessly through our 5-stage intelligence pipeline.
            </p>
          </div>

          {/* Stepper Navigation (Visual Flow) */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {workflowSteps.map((step) => {
                const IconComp = step.icon;
                const isActive = activeWorkflowStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveWorkflowStep(step.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 relative overflow-hidden ${
                      isActive
                        ? 'bg-white text-[#065F46] border-2 border-[#059669] shadow-lg ring-2 ring-emerald-100 scale-[1.02]'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {/* Active Accent Top Line */}
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#065F46] via-[#059669] to-[#D97706]" />
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#059669]' : 'text-slate-400'}`}>
                        0{step.id}
                      </span>
                      <IconComp className={`w-5 h-5 ${isActive ? 'text-[#059669]' : 'text-slate-400'}`} />
                    </div>
                    <div className="font-bold text-sm tracking-tight text-[#065F46]">{step.title}</div>
                    <div className={`text-xs mt-0.5 truncate ${isActive ? 'text-slate-600 font-medium' : 'text-slate-500'}`}>
                      {step.shortDesc}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Workflow Step Detail Card */}
          {(() => {
            const currentStep = workflowSteps.find((s) => s.id === activeWorkflowStep)!;
            const StepIcon = currentStep.icon;
            return (
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left info */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[#065F46] text-xs font-bold">
                      <span>Stage 0{currentStep.id} of 05</span>
                      <span>•</span>
                      <span className="text-[#059669]">{currentStep.shortDesc}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#065F46]">
                      {currentStep.title}: {currentStep.shortDesc}
                    </h3>

                    <p className="text-base text-slate-600 leading-relaxed">
                      {currentStep.detail}
                    </p>

                    <div className="pt-2 flex items-center space-x-3 text-xs font-semibold text-[#065F46]">
                      <div className="p-2 rounded-lg bg-emerald-50 text-[#059669] border border-emerald-100">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-slate-400 block font-normal">Telemetry Output</span>
                        <span className="font-bold">{currentStep.metrics}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Interactive Preview Box */}
                  <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <div className="flex items-center space-x-2 text-[#065F46]">
                        <StepIcon className="w-5 h-5 text-[#059669]" />
                        <span className="text-sm font-bold tracking-tight">Engine Execution Status</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#059669] bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        ACTIVE
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs font-mono text-slate-700">
                      <div className="flex justify-between">
                        <span>Ingestion Pipeline:</span>
                        <span className="text-emerald-700 font-bold">VERIFIED</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Competency Alignment:</span>
                        <span className="text-[#059669] font-bold">99.2% Match</span>
                      </div>
                      <div className="flex justify-between">
                        <span>iGOT Integration:</span>
                        <span className="text-emerald-700 font-bold">CONNECTED</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Auto-next stage in 10s</span>
                      <button
                        onClick={() => setActiveWorkflowStep((prev) => (prev % 5) + 1)}
                        className="text-[#059669] font-bold hover:underline flex items-center space-x-1"
                      >
                        <span>Next Stage</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>


      {/* ─── 4. DASHBOARD PREVIEW SECTION ───────────────────────────────────────── */}
      <section id="dashboard-preview" className="py-20 bg-slate-50/60 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">Live Interface Telemetry</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#065F46] tracking-tight">
              Interactive Dashboard Preview
            </h2>
            <p className="text-base text-slate-600">
              Experience the clean, modern interface designed specifically for civil servants, department heads, and statistical administrators.
            </p>
          </div>

          {/* Dashboard Outer Container */}
          <div className="rounded-2xl border border-slate-200/90 shadow-xl bg-white overflow-hidden">
            
            {/* Top Mock Window Header */}
            <div className="bg-slate-50 px-6 py-4 flex flex-wrap items-center justify-between border-b border-slate-200">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                </div>
                <div className="h-4 w-px bg-slate-300" />
                <span className="text-xs font-mono font-semibold text-slate-600">
                  portal.skillsaarthi.gov.in / officer-dashboard
                </span>
              </div>

              {/* Tabs selector */}
              <div className="flex items-center space-x-2 bg-slate-200/70 p-1 rounded-lg text-xs font-semibold mt-2 sm:mt-0">
                <button
                  onClick={() => setActiveDashTab('overview')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeDashTab === 'overview' ? 'bg-white text-[#065F46] font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveDashTab('analytics')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeDashTab === 'analytics' ? 'bg-white text-[#065F46] font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Analytics Chart
                </button>
                <button
                  onClick={() => setActiveDashTab('insights')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeDashTab === 'insights' ? 'bg-white text-[#065F46] font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Diagnostics
                </button>
              </div>
            </div>

            {/* Dashboard Content Body */}
            <div className="p-6 sm:p-8 space-y-8 bg-white">
              
              {/* Diagnostic Recommendation Alert Box */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50/60 text-[#065F46] shadow-sm border-2 border-emerald-200 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
                  
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-white text-[#059669] border border-emerald-200 shadow-xs shrink-0 mt-0.5">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">
                          Targeted Skill Diagnostic Recommendation
                        </span>
                        <span className="text-[10px] bg-white text-[#059669] border border-emerald-200 px-2 py-0.5 rounded font-mono font-bold">
                          98.4% Confidence
                        </span>
                      </div>
                      <p className="text-base font-semibold text-slate-900 mt-1">
                        “You are weak in Data Analysis. Recommended Module: <span className="text-[#065F46] underline decoration-[#D97706] underline-offset-4 font-bold">Advanced Statistical Modeling & Python for Survey Data</span>.”
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center space-x-3 w-full md:w-auto justify-end">
                    <button
                      onClick={() => setEnrolled(true)}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md flex items-center space-x-2 ${
                        enrolled
                          ? 'bg-emerald-700 text-white cursor-default'
                          : 'bg-[#065F46] hover:bg-[#047857] text-white'
                      }`}
                    >
                      {enrolled ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Enrolled in Pathway</span>
                        </>
                      ) : (
                        <>
                          <span>Enroll Module (4.5h)</span>
                          <ArrowRight className="w-4 h-4 text-[#D97706]" />
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>

              {/* Grid with Progress Bars & Analytics Chart */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left 6 Columns: Competency Progress Bars */}
                <div className="lg:col-span-6 bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h4 className="font-bold text-base text-[#065F46]">Active Competency Breakdown</h4>
                      <p className="text-xs text-slate-500">Official Statistical Officer Matrix</p>
                    </div>
                    <span className="text-xs font-bold text-[#059669] bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                      Target: 90%
                    </span>
                  </div>

                  {/* Skill 1 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="font-semibold text-slate-700">Survey Sampling & Design</span>
                      <span className="font-bold text-slate-900">92%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200/60">
                      <div className="h-full rounded-full bg-[#065F46]" style={{ width: '92%' }} />
                    </div>
                  </div>

                  {/* Skill 2 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="font-semibold text-slate-700">Data Analysis & Python (Weak Point)</span>
                      <span className="font-bold text-amber-600">64%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200/60">
                      <div className="h-full rounded-full bg-amber-500" style={{ width: '64%' }} />
                    </div>
                  </div>

                  {/* Skill 3 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="font-semibold text-slate-700">National Accounts & GDP Estimation</span>
                      <span className="font-bold text-slate-900">88%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200/60">
                      <div className="h-full rounded-full bg-[#059669]" style={{ width: '88%' }} />
                    </div>
                  </div>

                  {/* Skill 4 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="font-semibold text-slate-700">Government Data Governance</span>
                      <span className="font-bold text-slate-900">95%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200/60">
                      <div className="h-full rounded-full bg-teal-600" style={{ width: '95%' }} />
                    </div>
                  </div>

                  <div className="pt-2 text-xs text-slate-500 flex items-center justify-between">
                    <span>Last Diagnostic Scan: Today, 09:30 AM</span>
                    <button className="text-[#059669] font-semibold hover:underline flex items-center space-x-1">
                      <RefreshCw className="w-3 h-3" />
                      <span>Run Re-Diagnostic</span>
                    </button>
                  </div>
                </div>

                {/* Right 6 Columns: Recharts Analytics Curve */}
                <div className="lg:col-span-6 bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                      <div>
                        <h4 className="font-bold text-base text-[#065F46]">6-Month Competency Growth Trend</h4>
                        <p className="text-xs text-slate-500">Baseline vs. Personalized Progression</p>
                      </div>
                      <div className="flex items-center space-x-2 text-[11px] font-semibold">
                        <span className="flex items-center space-x-1 text-[#059669]">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#059669]" />
                          <span>Actual</span>
                        </span>
                        <span className="flex items-center space-x-1 text-slate-400">
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                          <span>Baseline</span>
                        </span>
                      </div>
                    </div>

                    <div className="h-48 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#059669" stopOpacity={0.3} />
                              <stop offset="95%" stopColor="#059669" stopOpacity={0.0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                          <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} />
                          <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} domain={[50, 100]} />
                          <Tooltip contentStyle={{ backgroundColor: '#ffffff', color: '#065F46', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }} />
                          <Area type="monotone" dataKey="actual" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#colorActual)" />
                          <Area type="monotone" dataKey="baseline" stroke="#cbd5e1" strokeWidth={2} strokeDasharray="4 4" fill="none" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-semibold">
                    <span>Average Growth Acceleration: <span className="text-emerald-700">+34% vs Baseline</span></span>
                    <button
                      onClick={() => navigate('/dashboard')}
                      className="text-[#065F46] hover:text-[#059669] flex items-center space-x-1 font-bold"
                    >
                      <span>Full Telemetry</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ─── 5. IMPACT SECTION ─────────────────────────────────────────────────── */}
      <section id="impact" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">Measurable Civil Service Outcomes</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#065F46] tracking-tight">
              National Impact & Workforce Transformation
            </h2>
            <p className="text-base text-slate-600">
              Proven stats driven by automated competency detection and targeted micro-modules across central & state departments.
            </p>
          </div>

          {/* 4 Impact Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Stat 1 */}
            <div className="bg-white rounded-xl p-6 text-center space-y-2 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#059669] border border-emerald-100 mx-auto flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-4xl font-extrabold text-[#065F46] tracking-tight">12,500+</div>
              <div className="text-sm font-bold text-slate-800">Civil Servants Trained</div>
              <p className="text-xs text-slate-500">Active officers across MoSPI & regional statistical bureaus.</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-xl p-6 text-center space-y-2 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#059669] border border-emerald-100 mx-auto flex items-center justify-center mb-3">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-4xl font-extrabold text-[#065F46] tracking-tight">98.4%</div>
              <div className="text-sm font-bold text-slate-800">Diagnostic Accuracy</div>
              <p className="text-xs text-slate-500">Validated against expert Ministry panel evaluations.</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-xl p-6 text-center space-y-2 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#059669] border border-emerald-100 mx-auto flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-4xl font-extrabold text-[#065F46] tracking-tight">45%</div>
              <div className="text-sm font-bold text-slate-800">Faster Up-skilling</div>
              <p className="text-xs text-slate-500">Reduction in time required to achieve competency mastery.</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white rounded-xl p-6 text-center space-y-2 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#059669] border border-emerald-100 mx-auto flex items-center justify-center mb-3">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-4xl font-extrabold text-[#065F46] tracking-tight">94%</div>
              <div className="text-sm font-bold text-slate-800">Module Completion Rate</div>
              <p className="text-xs text-slate-500">High engagement driven by micro-learning pathways.</p>
            </div>

          </div>

          {/* Compliance & Security Row */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-slate-600">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#059669]" />
              <span>ISO 27001 Security Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-[#059669]" />
              <span>End-to-End Data Privacy</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" />
              <span>iGOT Karmayogi Protocol Compliant</span>
            </div>
          </div>

        </div>
      </section>


      {/* ─── 6. FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="bg-white border-t border-slate-200 text-[#0F172A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-200">
            
            {/* Col 1: Brand */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-[#065F46] text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="font-extrabold text-lg text-[#065F46]">SkillSaarthi Portal</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                National Statistical Training & Competency Management Platform. Designed for government-grade workforce development.
              </p>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#065F46] mb-3">Platform Navigation</h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-600">
                <li><a href="#features" className="hover:text-[#059669]">Skill Gap Detection</a></li>
                <li><a href="#workflow" className="hover:text-[#059669]">Personalized Learning</a></li>
                <li><a href="#dashboard-preview" className="hover:text-[#059669]">Automated Question Bank</a></li>
                <li><a href="#impact" className="hover:text-[#059669]">Progress Analytics</a></li>
              </ul>
            </div>

            {/* Col 3: Quick Links */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#065F46] mb-3">Quick Links</h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-600">
                <li><Link to="/login" className="hover:text-[#059669]">Officer Login</Link></li>
                <li><Link to="/admin-verify" className="hover:text-[#059669]">Admin Verification</Link></li>
                <li><Link to="/dashboard" className="hover:text-[#059669]">Employee Dashboard</Link></li>
                <li><Link to="/admin" className="hover:text-[#059669]">Executive Telemetry</Link></li>
              </ul>
            </div>

            {/* Col 4: Ministry Info */}
            <div className="space-y-2 text-xs text-slate-600">
              <h4 className="font-bold uppercase tracking-wider text-[#065F46] mb-3">Ministry Governance</h4>
              <p className="font-medium text-slate-700">Ministry of Statistics & Programme Implementation</p>
              <p>Government of India, New Delhi</p>
              <p className="text-slate-400 font-mono text-[11px] pt-2">System Version 4.2.0 • Build 2026</p>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium">
            <p>© 2026 SkillSaarthi Portal. All rights reserved. Government of India.</p>
            <div className="flex space-x-6 mt-2 sm:mt-0">
              <a href="#" className="hover:text-[#065F46]">Privacy Policy</a>
              <a href="#" className="hover:text-[#065F46]">Terms of Service</a>
              <a href="#" className="hover:text-[#065F46]">Accessibility Standard</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
