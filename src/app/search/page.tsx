"use client";
import BottomNav from "@/components/BottomNav";
import { ArrowLeft, Search as SearchIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { 
  Stethoscope, 
  Pill, 
  Activity, 
  Heart, 
  Baby, 
  Droplet,
  Thermometer,
  Wind,
  Droplets,
  Flame,
  Sparkles,
  Scissors
} from "lucide-react";

const doctors = [
  { id: "rakesh-aga", name: "Dr. Rakesh Aga", specialty: "Gastroenterology", image: "https://randomuser.me/api/portraits/men/74.jpg" },
  { id: "priya-mehta", name: "Dr. Priya Mehta", specialty: "Cardiology", image: "https://randomuser.me/api/portraits/women/79.jpg" },
  { id: "suresh-kumar", name: "Dr. Suresh Kumar", specialty: "Orthopedics", image: "https://randomuser.me/api/portraits/men/86.jpg" },
  { id: "anita-desai", name: "Dr. Anita Desai", specialty: "Dermatology", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: "vikram-singh", name: "Dr. Vikram Singh", specialty: "Neurology", image: "https://randomuser.me/api/portraits/men/32.jpg" },
];

export default function SearchPage() {
  const [gender, setGender] = useState<"Men" | "Women">("Men");

  const symptoms = {
    Men: [
      { name: "Cough", icon: <Wind size={24} className="text-blue-500" /> },
      { name: "Fever", icon: <Thermometer size={24} className="text-red-500" /> },
      { name: "Throat Pain", icon: <Activity size={24} className="text-orange-500" /> },
      { name: "Urine Issues", icon: <Droplets size={24} className="text-yellow-500" /> },
      { name: "Joint Pain", icon: <Activity size={24} className="text-purple-500" /> },
      { name: "Acidity", icon: <Flame size={24} className="text-red-400" /> },
    ],
    Women: [
      { name: "Cough", icon: <Wind size={24} className="text-blue-500" /> },
      { name: "Fever", icon: <Thermometer size={24} className="text-red-500" /> },
      { name: "Acne", icon: <Sparkles size={24} className="text-pink-500" /> },
      { name: "Period Issues", icon: <Droplet size={24} className="text-red-400" /> },
      { name: "Hair Fall", icon: <Scissors size={24} className="text-gray-500" /> },
      { name: "Urine Issues", icon: <Droplets size={24} className="text-yellow-500" /> },
    ]
  };

  const specialities = [
    { name: "General Practice", icon: <Stethoscope size={24} className="text-blue-600" /> },
    { name: "Internal Medicine", icon: <Pill size={24} className="text-teal-600" /> },
    { name: "Urology", icon: <Droplets size={24} className="text-cyan-600" /> },
    { name: "Cardiology", icon: <Heart size={24} className="text-red-600" /> },
    { name: "Women's Health", icon: <Heart size={24} className="text-pink-600" /> },
    { name: "Pediatrics", icon: <Baby size={24} className="text-orange-600" /> },
  ];

  return (
    <div className="min-h-screen pb-28 bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-white px-5 pt-14 pb-5 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <Link href="/">
            <ArrowLeft size={22} className="text-gray-800" />
          </Link>
          <h1 className="text-[18px] font-bold text-[#1a2b4a]">Find Doctors</h1>
        </div>

        {/* Search Bar - No Filter */}
        <div className="flex gap-2">
          <div className="flex-1 bg-[#f2f3f5] rounded-xl px-4 py-3 flex items-center gap-2">
            <SearchIcon size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search doctors, specialties..."
              className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-6 mt-2">
        
        {/* Browse symptoms */}
        <section>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-[13.5px] font-bold text-[#1a2b4a]">Browse symptoms</h2>
            <Link href="/browse/symptoms" className="text-[#0a4d8c] text-xs font-bold">View all</Link>
          </div>
          
          <div className="flex gap-2 mb-4 bg-white p-1 rounded-lg w-fit">
            <button 
              onClick={() => setGender("Men")}
              className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${gender === "Men" ? "bg-[#0a4d8c] text-white" : "text-gray-500"}`}
            >
              Men
            </button>
            <button 
              onClick={() => setGender("Women")}
              className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${gender === "Women" ? "bg-[#0a4d8c] text-white" : "text-gray-500"}`}
            >
              Women
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {symptoms[gender].map((symptom, i) => (
              <Link key={i} href={`/search/results?symptom=${encodeURIComponent(symptom.name)}`} className="bg-white p-3 rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm aspect-square text-center">
                <div className="w-12 h-12 bg-[#f8f9fa] rounded-full flex items-center justify-center">
                  {symptom.icon}
                </div>
                <span className="text-[11px] font-semibold text-gray-700 leading-tight">{symptom.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse specialities */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[13.5px] font-bold text-[#1a2b4a]">Browse specialities</h2>
            <Link href="/browse/specialities" className="text-[#0a4d8c] text-xs font-bold">View all</Link>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {specialities.map((spec, i) => (
              <Link key={i} href={`/search/results?specialty=${encodeURIComponent(spec.name)}`} className="bg-white p-3 rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm text-center min-h-[90px]">
                <div className="mb-1">
                  {spec.icon}
                </div>
                <span className="text-[11px] font-semibold text-gray-700 leading-tight">{spec.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse all doctors */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[13.5px] font-bold text-[#1a2b4a]">Browse all doctors</h2>
            <Link href="/search/results" className="text-[#0a4d8c] text-xs font-bold">View all</Link>
          </div>
          
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4">
            {doctors.map((doc, i) => (
              <Link key={i} href={`/doctor/${doc.id}`} className="min-w-[140px]">
                <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-50 flex flex-col items-center">
                  <div className="w-20 h-24 bg-gray-100 rounded-xl overflow-hidden mb-3">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-[13px] text-[#1a2b4a] text-center w-full truncate">{doc.name}</h3>
                  <p className="text-[11px] text-gray-500 mt-0.5 text-center truncate w-full">{doc.specialty}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>

      <BottomNav />
    </div>
  );
}
