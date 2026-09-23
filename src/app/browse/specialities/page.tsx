"use client";

import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import { useState } from "react";
import { Activity, ArrowLeft, Baby, Bone, Brain, Droplets, Eye, Heart, Pill, Search as SearchIcon, ShieldPlus, Smile, Stethoscope, Wind } from "lucide-react";

const specialities = [
  { name: "General Practice", icon: Stethoscope }, { name: "Internal Medicine", icon: Pill }, { name: "Pediatrics", icon: Baby }, { name: "Geriatrics", icon: ShieldPlus },
  { name: "Cardiology", icon: Heart }, { name: "Neurology", icon: Brain }, { name: "Pulmonology", icon: Wind }, { name: "Endocrinology", icon: Activity },
  { name: "Orthopedics", icon: Bone }, { name: "Dermatology", icon: ShieldPlus }, { name: "Ophthalmology", icon: Eye }, { name: "ENT", icon: Smile },
  { name: "Gastroenterology", icon: Pill }, { name: "Urology", icon: Droplets }, { name: "Women's Health", icon: Heart }, { name: "Fertility", icon: Baby },
  { name: "Psychiatry", icon: Brain }, { name: "Dentistry", icon: Smile }, { name: "Oncology", icon: ShieldPlus }, { name: "Physiotherapy", icon: Activity },
];

export default function BrowseSpecialitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const query = searchQuery.trim().toLowerCase();
  const visibleSpecialities = specialities.filter((speciality) => speciality.name.toLowerCase().includes(query));

  return (
    <div className="min-h-screen pb-28 bg-[#f5f5f5]">
      <div className="bg-white px-5 pt-14 pb-5 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-5">
          <Link href="/search"><ArrowLeft size={22} className="text-gray-800" /></Link>
          <h1 className="text-[18px] font-bold text-[#1a2b4a]">Browse Specialities</h1>
        </div>
        <div className="flex bg-[#f2f3f5] rounded-xl px-4 py-3 items-center gap-2">
          <SearchIcon size={18} className="text-gray-400" />
          <input type="text" placeholder="Search a speciality..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400" />
        </div>
      </div>
      <main className="p-4 mt-2">
        <div className="grid grid-cols-2 gap-3">
          {visibleSpecialities.map(({ name, icon: Icon }) => (
            <Link key={name} href={`/search/results?specialty=${encodeURIComponent(name)}`} className="flex min-h-[84px] flex-col items-center justify-center gap-2 rounded-2xl bg-white p-3 text-center text-[12px] font-semibold text-gray-700 shadow-sm hover:bg-[#e8f0fe] hover:text-[#0a4d8c] transition-colors">
              <Icon size={23} className="text-[#0a4d8c] shrink-0" /> {name}
            </Link>
          ))}
        </div>
        {!visibleSpecialities.length && <p className="text-center text-sm text-gray-500 mt-10">No specialities found for “{searchQuery}”.</p>}
      </main>
      <BottomNav />
    </div>
  );
}
