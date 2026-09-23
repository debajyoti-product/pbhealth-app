"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, FileText, CalendarDays } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const tabs = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/search', label: 'Doctors', icon: Users },
    { href: '/documents', label: 'Documents', icon: FileText },
    { href: '/bookings', label: 'Bookings', icon: CalendarDays },
  ];

  return (
    <div className="fixed bottom-0 w-full max-w-[430px] bg-white border-t border-gray-100 px-2 pt-2 pb-6 flex justify-around items-start z-50">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        const Icon = tab.icon;
        return (
          <Link key={tab.href} href={tab.href} className="flex flex-col items-center gap-1 min-w-[60px]">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isActive ? 'bg-[#e8f0fe]' : ''}`}>
              <Icon size={20} className={isActive ? 'text-[#1a73e8]' : 'text-gray-400'} strokeWidth={isActive ? 2.5 : 1.5} />
            </div>
            <span className={`text-[11px] font-semibold ${isActive ? 'text-black' : 'text-gray-400'}`}>{tab.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
