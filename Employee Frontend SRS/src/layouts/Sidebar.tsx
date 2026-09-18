import { NavLink, useNavigate } from "react-router";
import {
  LayoutDashboard, User, BarChart3, AlertTriangle, Map, BookOpen,
  ClipboardList, FileText, Bot, LogOut, ChevronRight, Zap,
  Sun, Moon, Monitor,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme, type ThemeMode } from "../hooks/useTheme";

const NAV_ITEMS = [
  { path: "/dashboard",    icon: LayoutDashboard, label: "Dashboard" },
  { path: "/profile",      icon: User,            label: "My Profile" },
  { path: "/competencies", icon: BarChart3,        label: "Competencies" },
  { path: "/skill-gaps",   icon: AlertTriangle,   label: "Skill Gaps" },
  { path: "/learning-path",icon: Map,             label: "Learning Path" },
  { path: "/courses",      icon: BookOpen,        label: "Courses" },
  { path: "/assessments",  icon: ClipboardList,   label: "Assessments" },
  { path: "/documents",    icon: FileText,        label: "Documents" },
  { path: "/assistant",    icon: Bot,             label: "AI Coach" },
];

const THEME_OPTIONS: Array<{ value: ThemeMode; icon: React.ElementType; label: string }> = [
  { value: "light",  icon: Sun,     label: "Light" },
  { value: "dark",   icon: Moon,    label: "Dark" },
  { value: "system", icon: Monitor, label: "System" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { mode, setMode } = useTheme();

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 lg:hidden backdrop-blur-xs"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-30 h-full w-60 flex flex-col
          bg-white text-slate-800 border-r border-slate-200/80 shadow-xs
          transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0 lg:z-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 h-16 border-b border-slate-200/80 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center flex-shrink-0 shadow-xs">
            <Zap size={16} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-extrabold leading-tight tracking-tight text-[#0A2540]" style={{ fontFamily: "var(--font-display)" }}>
              SkillSaarthi
            </div>
            <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">AI · Demo</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1" aria-label="Main navigation">
          {NAV_ITEMS.map(({ path, icon: Icon, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? "bg-[#2563EB] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={16} className={`flex-shrink-0 ${isActive ? "text-white" : "text-slate-500 group-hover:text-slate-900"}`} />
                  <span className="flex-1">{label}</span>
                  {isActive && <ChevronRight size={12} className="opacity-70" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Theme switcher */}
        <div className="px-3 pb-2 flex-shrink-0">
          <div className="border border-slate-200 rounded-xl p-1.5 bg-slate-50">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5 px-1 font-semibold">Appearance</div>
            <div className="flex gap-1" role="group" aria-label="Theme selector">
              {THEME_OPTIONS.map(({ value, icon: Icon, label }) => (
                <button
                  key={value}
                  onClick={() => setMode(value)}
                  aria-label={`${label} mode`}
                  aria-pressed={mode === value}
                  className={`
                    flex-1 flex flex-col items-center gap-1 py-1.5 rounded-lg text-[10px] font-semibold transition-all duration-150
                    ${mode === value
                      ? "bg-[#2563EB] text-white shadow-xs"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/60"}
                  `}
                >
                  <Icon size={13} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Demo badge + logout */}
        <div className="p-3 border-t border-slate-200/80 flex-shrink-0 space-y-2">
          <div className="px-3 py-2 rounded-xl bg-amber-50 border border-amber-200">
            <div className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider">Demo Mode</div>
            <div className="text-[11px] text-slate-600 mt-0.5">Synthetic data only</div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-150"
          >
            <LogOut size={16} />
            <span>Sign out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
