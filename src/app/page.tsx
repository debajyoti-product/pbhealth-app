import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import { ChevronDown, ChevronRight, Stethoscope, MonitorSmartphone, Droplet, HeartPulse, Ambulance, FlaskConical } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen pb-28 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center px-5 pt-14 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#dbeafe] text-[#1a73e8] rounded-full flex items-center justify-center text-lg font-bold">
            D
          </div>
          <div>
            <div className="flex items-center gap-1">
              <h1 className="text-xl font-bold text-[#1a2b4a]">Debajyoti</h1>
              <ChevronDown size={16} className="text-[#1a2b4a]" />
            </div>
            <div className="flex items-center gap-0.5 text-gray-500 text-sm">
              <span>Dhakuria, Kolkata</span>
              <ChevronDown size={13} />
            </div>
          </div>
        </div>
        <button className="px-4 py-1.5 border border-gray-200 text-[#1a2b4a] font-semibold rounded-lg text-sm bg-white shadow-sm">
          Help
        </button>
      </div>

      {/* Banner */}
      <div className="px-4 mb-7">
        <div className="bg-gradient-to-r from-[#0a4d8c] to-[#1a6fc4] rounded-2xl p-5 text-white relative overflow-hidden min-h-[160px]">
          <p className="text-[10px] font-bold tracking-[0.15em] text-cyan-300 mb-2">CONSULT A DOCTOR IN MINUTES</p>
          <h2 className="text-[17px] font-bold mb-4 max-w-[60%] leading-snug">Get expert medical advices & Personalised care</h2>
          <button className="bg-white text-[#0a4d8c] px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1">
            Consult Now <ChevronRight size={14} />
          </button>
          {/* Decorative illustration area */}
          <div className="absolute right-0 top-0 bottom-0 w-[40%] flex items-end justify-center opacity-30">
            <svg viewBox="0 0 120 140" className="w-full h-full">
              <ellipse cx="60" cy="130" rx="50" ry="8" fill="rgba(255,255,255,0.2)"/>
              <rect x="35" y="40" width="50" height="85" rx="8" fill="rgba(255,255,255,0.3)"/>
              <circle cx="60" cy="30" r="18" fill="rgba(255,255,255,0.3)"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Top Services */}
      <div className="px-4 mb-6">
        <h3 className="text-[14.5px] font-bold text-[#1a2b4a] mb-4 px-1">Top Services</h3>
        <div className="grid grid-cols-3 gap-3">
          <ServiceCard icon={<Stethoscope className="text-[#1a73e8]" size={26} />} title="Doctor Appointment" />
          <Link href="/search">
            <ServiceCard icon={<MonitorSmartphone className="text-[#1a73e8]" size={26} />} title="Online Consultation" />
          </Link>
          <ServiceCard icon={<Droplet className="text-[#1a73e8]" size={26} />} title="Diabetes, Heart & Obesity" />
          <ServiceCard icon={<HeartPulse className="text-[#1a73e8]" size={26} />} title="Health Checkups" />
          <ServiceCard icon={<Ambulance className="text-[#1a73e8]" size={26} />} title="Ambulance Services" />
          <ServiceCard icon={<FlaskConical className="text-[#1a73e8]" size={26} />} title="Lab Tests & Scans" />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

function ServiceCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="bg-[#f7f8fa] rounded-2xl p-4 flex flex-col items-center justify-center text-center min-h-[110px] hover:shadow-sm transition-shadow cursor-pointer">
      <div className="mb-3 w-10 h-10 flex items-center justify-center">{icon}</div>
      <p className="text-[11px] font-semibold leading-tight text-[#1a2b4a]">{title}</p>
    </div>
  );
}
