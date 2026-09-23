"use client";
import { ArrowLeft, Building2, Video, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DoctorProfile() {
  const [isExpOpen, setIsExpOpen] = useState(false);
  const [isAchOpen, setIsAchOpen] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [selectedDate, setSelectedDate] = useState(0);
  const [consultMode, setConsultMode] = useState<"Online" | "Hospital">("Online");

  // Generate 14 days with weekday, date and month name
  const dates = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      day: d.toLocaleDateString("en-US", { weekday: "short" }),
      date: d.getDate(),
      month: d.toLocaleDateString("en-US", { month: "short" }),
      full: d,
    };
  });

  const slots = {
    Morning: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
    Afternoon: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM"],
    Evening: ["05:00 PM", "05:30 PM", "06:00 PM"],
  };

  const shortAbout =
    "Dr Rakesh Aga is a senior Gastroenterologist with over four decades of experience in gastroenterology, hepatology, and internal medicine across India, the UK, Oman, and the Isle of Man.";
  
  const fullAbout =
    "Dr Rakesh Aga is a senior Gastroenterologist with over four decades of experience in gastroenterology, hepatology, and internal medicine across India, the UK, Oman, and the Isle of Man. He has held consultant positions at leading teaching hospitals and tertiary care centres, with extensive expertise in advanced therapeutic endoscopy, inflammatory bowel disease, liver disorders, pancreatic diseases, and gastrointestinal cancers. Widely respected for his clinical excellence, academic contributions, and leadership in gastroenterology, he brings world-class expertise to patient care.";

  return (
    <div className="min-h-screen bg-[#f0f2f5] relative pb-28">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-14 pb-3.5 sticky top-0 bg-[#f0f2f5] z-20">
        <Link href="/search">
          <ArrowLeft size={22} className="text-gray-800" />
        </Link>
        <h1 className="text-[17px] font-bold text-[#1a2b4a]">Doctor Profile</h1>
      </div>

      <div className="px-4">
        {/* Profile Card (Reduced height by ~10%) */}
        <div className="bg-white rounded-2xl py-3 px-3.5 shadow-sm mb-3">
          <div className="flex gap-3.5 items-center">
            <div className="w-[88px] h-[102px] bg-gray-100 rounded-xl overflow-hidden shrink-0">
              <img
                src="https://randomuser.me/api/portraits/men/74.jpg"
                alt="Dr Rakesh Aga"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <h2 className="text-[17px] font-bold text-[#1a2b4a] leading-tight">Dr. Rakesh Aga</h2>
              <p className="text-gray-500 text-xs mt-0.5">Gastroenterology</p>
              <p className="text-gray-400 text-xs mt-0.5">45+ years experience</p>
              <p className="text-gray-600 text-[10.5px] mt-1 bg-gray-50 inline-block px-2 py-0.5 rounded-md w-fit border border-gray-100">
                English, Hindi &amp; Marathi
              </p>
            </div>
          </div>
        </div>

        {/* Conditions Treated (Category header reduced by 15%: text-[11.5px]) */}
        <div className="bg-white rounded-2xl py-3 px-3.5 shadow-sm mb-3">
          <h4 className="font-bold text-[#1a2b4a] text-[11.5px] mb-2">Conditions Treated</h4>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11.5px] text-gray-600 list-inside list-disc">
            <li>Digestive Disorders</li>
            <li>Advanced Endoscopy</li>
            <li>Liver Diseases</li>
            <li>Inflammatory Bowel</li>
            <li>Pancreatic Disorders</li>
            <li>GI Cancers</li>
          </ul>
        </div>

        {/* Available Slots Section (Category header reduced by 15%: text-[12px]) */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-3">
          <h3 className="text-[12px] font-bold text-[#1a2b4a] mb-3">Available Slots</h3>
          
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 mb-3 -mx-4 px-4">
            {dates.map((d, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedDate(i)}
                className={`flex flex-col items-center justify-center min-w-[60px] h-[68px] rounded-xl border transition-all ${
                  selectedDate === i 
                    ? 'bg-[#0a4d8c] border-[#0a4d8c] text-white shadow-sm' 
                    : 'border-gray-200 bg-white text-gray-600'
                }`}
              >
                <span className={`text-[10px] font-semibold uppercase tracking-wider ${selectedDate === i ? 'text-blue-200' : 'text-gray-400'}`}>
                  {d.day}
                </span>
                <span className={`text-[16px] font-bold leading-tight ${selectedDate === i ? 'text-white' : 'text-[#1a2b4a]'}`}>
                  {d.date}
                </span>
                <span className={`text-[10px] font-medium ${selectedDate === i ? 'text-blue-100' : 'text-gray-500'}`}>
                  {d.month}
                </span>
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {Object.entries(slots).map(([period, times]) => (
              <div key={period}>
                <h4 className="text-[11px] font-semibold text-gray-500 mb-1.5">{period}</h4>
                <div className="flex flex-wrap gap-2">
                  {times.map((time, i) => (
                    <button 
                      key={i} 
                      className="px-3 py-1.5 border border-blue-100 bg-blue-50 text-[#0a4d8c] rounded-lg text-[11.5px] font-medium hover:bg-blue-100 transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mode of Consultation (Header removed, subheaders removed from pills, info displayed below) */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm mb-3">
          <div className="flex gap-2.5">
            <button 
              type="button"
              onClick={() => setConsultMode("Online")}
              className={`flex-1 py-2.5 px-3 rounded-xl border flex items-center justify-between transition-all ${
                consultMode === "Online" ? 'border-[#1a73e8] bg-[#f0f7ff]' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${consultMode === "Online" ? 'border-[#1a73e8]' : 'border-gray-300'}`}>
                  {consultMode === "Online" && <div className="w-2 h-2 bg-[#1a73e8] rounded-full"></div>}
                </div>
                <span className="text-[10px] font-bold text-[#1a2b4a]">Online</span>
              </div>
              <span className="text-[14px] font-extrabold text-[#1a2b4a]">₹1,500</span>
            </button>

            <button 
              type="button"
              onClick={() => setConsultMode("Hospital")}
              className={`flex-1 py-2.5 px-3 rounded-xl border flex items-center justify-between transition-all ${
                consultMode === "Hospital" ? 'border-[#1a73e8] bg-[#f0f7ff]' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${consultMode === "Hospital" ? 'border-[#1a73e8]' : 'border-gray-300'}`}>
                  {consultMode === "Hospital" && <div className="w-2 h-2 bg-[#1a73e8] rounded-full"></div>}
                </div>
                <span className="text-[10px] font-bold text-[#1a2b4a]">Hospital Visit</span>
              </div>
              <span className="text-[14px] font-extrabold text-[#1a2b4a]">₹1,500</span>
            </button>
          </div>

          {/* Dynamic info below the pills */}
          {consultMode === "Online" ? (
            <div className="flex items-center gap-2 mt-2.5 pt-2 border-t border-gray-100 text-gray-600">
              <Video size={16} className="text-[#1a73e8] shrink-0" />
              <span className="font-medium text-[11.5px] text-gray-600">Video call consultation</span>
            </div>
          ) : (
            <div className="flex items-start gap-2 mt-2.5 pt-2 border-t border-gray-100 text-gray-600">
              <Building2 size={16} className="text-[#1a73e8] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[12px] text-[#1a2b4a]">PB Health IFFCO Chowk</p>
                <p className="text-[11px] text-gray-500">L-22, Mehrauli-Gurgaon Rd, DLF Phase 2, Sector 25</p>
              </div>
            </div>
          )}
        </div>

        {/* About Section with more... toggle (Category header reduced by 15%: text-[12px]) */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-3">
          <h3 className="text-[12px] font-bold text-[#1a2b4a] mb-2">About</h3>
          <p className="text-[12.5px] text-gray-600 leading-relaxed">
            {isAboutExpanded ? fullAbout : shortAbout}
            <button
              type="button"
              onClick={() => setIsAboutExpanded(!isAboutExpanded)}
              className="text-[#0a4d8c] font-bold ml-1.5 inline hover:underline cursor-pointer"
            >
              {isAboutExpanded ? "less" : "more..."}
            </button>
          </p>
        </div>

        {/* Experience - Collapsible (Category header reduced by 15%: text-[12px]) */}
        <div className="bg-white rounded-2xl shadow-sm mb-3 overflow-hidden">
          <button 
            type="button"
            className="w-full p-4 flex justify-between items-center bg-white"
            onClick={() => setIsExpOpen(!isExpOpen)}
          >
            <h4 className="font-bold text-[#1a2b4a] text-[12px]">Experience</h4>
            {isExpOpen ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
          </button>
          {isExpOpen && (
            <div className="px-4 pb-4 pt-1 border-t border-gray-50">
              <ul className="list-disc pl-5 space-y-1.5 text-[12px] text-gray-600">
                <li>45+ years in gastroenterology and internal medicine</li>
                <li>Director, Gastroenterology at PB Health</li>
                <li>Former Consultant Gastroenterologist at Noble&apos;s Hospital</li>
                <li>Extensive experience in advanced therapeutic endoscopy</li>
              </ul>
            </div>
          )}
        </div>

        {/* Achievements - Collapsible (Category header reduced by 15%: text-[12px]) */}
        <div className="bg-white rounded-2xl shadow-sm mb-4 overflow-hidden">
          <button 
            type="button"
            className="w-full p-4 flex justify-between items-center bg-white"
            onClick={() => setIsAchOpen(!isAchOpen)}
          >
            <h4 className="font-bold text-[#1a2b4a] text-[12px]">Achievements</h4>
            {isAchOpen ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
          </button>
          {isAchOpen && (
            <div className="px-4 pb-4 pt-1 border-t border-gray-50">
              <ul className="list-disc pl-5 space-y-1.5 text-[12px] text-gray-600">
                <li><strong>Fellow of the Royal College of Physicians (FRCP)</strong></li>
                <li>Led hepatology multidisciplinary teams in UK</li>
                <li>Published multiple research papers in leading journals</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-0 w-full max-w-[430px] bg-white rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-5 py-3.5 z-50 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-[14px] text-[#1a2b4a] leading-tight">Dr. Rakesh Aga</h3>
          <p className="text-[10px] font-semibold text-gray-500 mt-0.5">
            {consultMode === "Online" ? "Online Consultation" : "Hospital Visit"}
          </p>
        </div>

        {consultMode === "Online" ? (
          <Link href="/cart" className="bg-[#0a5898] hover:bg-[#084a82] active:scale-[0.98] transition-all text-white px-4 py-2.5 rounded-full font-bold flex items-center gap-2.5 shadow-sm">
            <span className="text-[16px] font-extrabold tracking-tight">₹1,500</span>
            <span className="w-px h-3.5 bg-white/30"></span>
            <span className="text-[13px] font-semibold flex items-center gap-1">Book Consult <ArrowRight size={14} /></span>
          </Link>
        ) : (
          <button className="bg-[#0a5898] hover:bg-[#084a82] active:scale-[0.98] transition-all text-white px-4 py-2.5 rounded-full font-bold flex items-center gap-2.5 shadow-sm">
            <span className="text-[16px] font-extrabold tracking-tight">₹1,500</span>
            <span className="w-px h-3.5 bg-white/30"></span>
            <span className="text-[13px] font-semibold flex items-center gap-1">Book Consult <ArrowRight size={14} /></span>
          </button>
        )}
      </div>
    </div>
  );
}
