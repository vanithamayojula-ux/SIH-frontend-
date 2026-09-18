import { useState, useRef, useEffect } from "react";
import { Menu, Bell, CheckCircle, TrendingUp, BookOpen, FileText, Target, Search } from "lucide-react";
import { DEMO_USER, DEMO_PROFILE } from "../data/mockData";
import { useAuth } from "../context/AuthContext";

interface TopBarProps {
  onMenuClick: () => void;
  onCmdPalette?: () => void;
}

interface Notification {
  id: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
}

const SAMPLE_NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    icon: Target,
    iconColor: "text-[#059669]",
    iconBg: "bg-emerald-50",
    title: "Diagnostic Recommendation",
    body: "Machine Learning Fundamentals added to your personalized learning path.",
    time: "2 min ago",
    read: false,
  },
  {
    id: "n2",
    icon: FileText,
    iconColor: "text-[var(--color-warning-fg)]",
    iconBg: "bg-[var(--color-warning-bg)]",
    title: "Document ready",
    body: "ML Study Notes assessment is ready to take.",
    time: "1 hr ago",
    read: false,
  },
  {
    id: "n3",
    icon: TrendingUp,
    iconColor: "text-[var(--color-success-fg)]",
    iconBg: "bg-[var(--color-success-bg)]",
    title: "Competency updated",
    body: "Your Python level moved from Beginner to Intermediate.",
    time: "Yesterday",
    read: true,
  },
  {
    id: "n4",
    icon: BookOpen,
    iconColor: "text-[#059669]",
    iconBg: "bg-emerald-50",
    title: "Course milestone",
    body: "35% through Python for Data Analysis. Keep going!",
    time: "2 days ago",
    read: true,
  },
  {
    id: "n5",
    icon: CheckCircle,
    iconColor: "text-[var(--color-success-fg)]",
    iconBg: "bg-[var(--color-success-bg)]",
    title: "Assessment completed",
    body: "Statistical Methods · Score: 84%",
    time: "3 days ago",
    read: true,
  },
];

export function TopBar({ onMenuClick, onCmdPalette }: TopBarProps) {
  const { user } = useAuth();
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState(SAMPLE_NOTIFICATIONS);
  const panelRef = useRef<HTMLDivElement>(null);

  const displayName = user?.name ?? DEMO_USER.name;
  const displayRole = user?.role === "admin" ? "Administrator" : DEMO_PROFILE.designation;

  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  // Close on outside click
  useEffect(() => {
    if (!notifOpen) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [notifOpen]);

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 lg:px-6 gap-4 flex-shrink-0 shadow-xs">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
        aria-label="Open navigation"
      >
        <Menu size={20} className="text-slate-600" />
      </button>

      {/* Command palette trigger */}
      <button
        onClick={onCmdPalette}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:border-[#059669] transition-colors text-slate-500 hover:text-slate-900 flex-1 max-w-xs"
        aria-label="Open command palette"
      >
        <Search size={13} />
        <span className="text-xs flex-1 text-left">Search…</span>
        <span className="flex items-center gap-0.5 text-[10px] font-mono bg-white border border-slate-200 px-1 py-0.5 rounded text-slate-500">
          ⌘K
        </span>
      </button>

      <div className="flex-1 min-w-0 md:hidden">
        <div className="text-xs text-slate-500 font-mono uppercase tracking-wider truncate">
          {DEMO_PROFILE.department}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Notification bell */}
        <div className="relative" ref={panelRef}>
          <button
            onClick={() => setNotifOpen((o) => !o)}
            className={`relative p-2 rounded-lg transition-colors ${
              notifOpen
                ? "bg-slate-100 text-slate-900"
                : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
            }`}
            aria-label={`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ""}`}
            aria-expanded={notifOpen}
            aria-haspopup="true"
          >
            <Bell size={18} />
            {/* Badge */}
            {unreadCount > 0 && (
              <span
                className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[16px] h-4 px-1 bg-[#059669] text-white text-[9px] font-bold font-mono rounded-full ring-2 ring-white leading-none"
                aria-hidden="true"
              >
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notification panel */}
          {notifOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 animate-fade-in overflow-hidden"
              role="dialog"
              aria-label="Notifications"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
                <div>
                  <span className="text-sm font-bold text-[#065F46]" style={{ fontFamily: "var(--font-display)" }}>
                    Notifications
                  </span>
                  {unreadCount > 0 && (
                    <span className="ml-2 text-[10px] font-mono font-bold bg-[#059669] text-white px-1.5 py-0.5 rounded-full">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllRead}
                    className="text-xs text-[#059669] font-semibold hover:underline"
                  >
                    Mark all read
                  </button>
                )}
              </div>

              {/* Notification items */}
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notif) => {
                  const Icon = notif.icon;
                  return (
                    <button
                      key={notif.id}
                      onClick={() =>
                        setNotifications((prev) =>
                          prev.map((n) => n.id === notif.id ? { ...n, read: true } : n)
                        )
                      }
                      className={`w-full flex items-start gap-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0 ${
                        !notif.read ? "bg-emerald-50/50" : ""
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${notif.iconBg}`}>
                        <Icon size={14} className={notif.iconColor} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <span className={`text-xs font-semibold leading-snug ${notif.read ? "text-slate-600" : "text-slate-900"}`}>
                            {notif.title}
                          </span>
                          {!notif.read && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] flex-shrink-0 mt-1" aria-hidden="true" />
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed line-clamp-2">
                          {notif.body}
                        </p>
                        <div className="text-[10px] text-slate-400 font-mono mt-1">{notif.time}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 border-t border-slate-200">
                <button
                  className="w-full text-xs text-[#059669] font-semibold text-center hover:underline"
                  onClick={() => setNotifOpen(false)}
                >
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User avatar + info */}
        <div className="flex items-center gap-2.5 pl-1">
          <div
            className="w-8 h-8 rounded-full bg-[#059669] flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-xs"
            aria-hidden="true"
          >
            {initials}
          </div>
          <div className="hidden sm:block">
            <div
              className="text-sm font-bold text-[#065F46] leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {displayName}
            </div>
            <div className="text-[11px] text-slate-500">{displayRole}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
