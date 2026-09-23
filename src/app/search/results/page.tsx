"use client";
import BottomNav from "@/components/BottomNav";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

const doctors = [
  {
    id: "rakesh-aga",
    name: "Dr. Rakesh Aga",
    specialty: "Gastroenterology",
    experience: 45,
    experienceLabel: "45+ years exp.",
    hospitalFee: 1500,
    hospitalFeeLabel: "₹1,500",
    onlineFee: 1500,
    onlineFeeLabel: "₹1,500",
    gender: "men",
    image: "https://randomuser.me/api/portraits/men/74.jpg",
    conditions: ["Digestive Disorders", "Liver Diseases", "GI Cancers"],
  },
  {
    id: "priya-mehta",
    name: "Dr. Priya Mehta",
    specialty: "Cardiology",
    experience: 20,
    experienceLabel: "20+ years exp.",
    hospitalFee: 1200,
    hospitalFeeLabel: "₹1,200",
    onlineFee: 1000,
    onlineFeeLabel: "₹1,000",
    gender: "women",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    conditions: ["Heart Attack", "Chest Pain", "Hypertension"],
  },
  {
    id: "suresh-kumar",
    name: "Dr. Suresh Kumar",
    specialty: "Orthopedics",
    experience: 18,
    experienceLabel: "18+ years exp.",
    hospitalFee: 1000,
    hospitalFeeLabel: "₹1,000",
    onlineFee: null,
    onlineFeeLabel: null,
    gender: "men",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    conditions: ["Joint Pain", "Fractures", "Arthritis"],
  },
  {
    id: "anita-desai",
    name: "Dr. Anita Desai",
    specialty: "Dermatology",
    experience: 12,
    experienceLabel: "12+ years exp.",
    hospitalFee: 800,
    hospitalFeeLabel: "₹800",
    onlineFee: 700,
    onlineFeeLabel: "₹700",
    gender: "women",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    conditions: ["Acne", "Skin Rash", "Hair Fall"],
  },
  {
    id: "vikram-singh",
    name: "Dr. Vikram Singh",
    specialty: "Neurology",
    experience: 25,
    experienceLabel: "25+ years exp.",
    hospitalFee: 1500,
    hospitalFeeLabel: "₹1,500",
    onlineFee: 1300,
    onlineFeeLabel: "₹1,300",
    gender: "men",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    conditions: ["Migraine", "Nerve Pain", "Stroke"],
  },
];

type FilterKey = "exp-high" | "price-low" | "men" | "women";

const filters: { key: FilterKey; label: string }[] = [
  { key: "exp-high", label: "Experience: High to Low" },
  { key: "price-low", label: "Price: Low to High" },
  { key: "men", label: "Men" },
  { key: "women", label: "Women" },
];

function SearchResultsContent() {
  const [activeFilters, setActiveFilters] = useState<FilterKey[]>([]);
  const searchParams = useSearchParams();
  const symptom = searchParams.get("symptom");
  const specialty = searchParams.get("specialty");

  const toggleFilter = (key: FilterKey) => {
    setActiveFilters((prev) =>
      prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]
    );
  };

  let filtered = [...doctors];

  if (specialty) {
    const specialtyTerms: Record<string, string[]> = {
      "General Practice": ["Gastroenterology", "Cardiology", "Orthopedics", "Dermatology", "Neurology"],
      "Internal Medicine": ["Gastroenterology", "Cardiology", "Neurology"],
      Urology: [],
      Cardiology: ["Cardiology"],
      "Women's Health": ["Dermatology"],
      Pediatrics: [],
      Gastroenterology: ["Gastroenterology"],
      Orthopedics: ["Orthopedics"],
      Dermatology: ["Dermatology"],
      Neurology: ["Neurology"],
    };
    // The sample directory currently has five doctor specialties. Keep the
    // broader directory visible for a requested specialty that has no exact
    // sample profile yet, rather than taking the user to an empty results page.
    const matchingSpecialties = specialtyTerms[specialty] ?? [];
    if (matchingSpecialties.length) {
      filtered = filtered.filter((doctor) => matchingSpecialties.includes(doctor.specialty));
    }
  }

  if (symptom) {
    const symptomSpecialties: Record<string, string[]> = {
      "Chest Pain": ["Cardiology"], Palpitations: ["Cardiology"], "High Blood Pressure": ["Cardiology"], "Shortness of Breath": ["Cardiology"],
      Acidity: ["Gastroenterology"], "Stomach Ache": ["Gastroenterology"], Indigestion: ["Gastroenterology"], Nausea: ["Gastroenterology"], Vomiting: ["Gastroenterology"], Diarrhea: ["Gastroenterology"], Constipation: ["Gastroenterology"],
      "Joint Pain": ["Orthopedics"], Backache: ["Orthopedics"], "Neck Pain": ["Orthopedics"], "Knee Pain": ["Orthopedics"], Arthritis: ["Orthopedics"], Fracture: ["Orthopedics"],
      Acne: ["Dermatology"], "Hair Fall": ["Dermatology"], "Skin Rash": ["Dermatology"], Itching: ["Dermatology"], Dandruff: ["Dermatology"], Eczema: ["Dermatology"],
      Migraine: ["Neurology"], Numbness: ["Neurology"], Tingling: ["Neurology"], Seizures: ["Neurology"],
    };
    const matches = symptomSpecialties[symptom];
    if (matches) filtered = filtered.filter((doctor) => matches.includes(doctor.specialty));
  }

  if (activeFilters.includes("men") && !activeFilters.includes("women")) {
    filtered = filtered.filter((d) => d.gender === "men");
  } else if (activeFilters.includes("women") && !activeFilters.includes("men")) {
    filtered = filtered.filter((d) => d.gender === "women");
  }

  if (activeFilters.includes("exp-high")) {
    filtered = [...filtered].sort((a, b) => b.experience - a.experience);
  }

  if (activeFilters.includes("price-low")) {
    filtered = [...filtered].sort((a, b) => a.hospitalFee - b.hospitalFee);
  }

  return (
    <div className="min-h-screen pb-28 bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-white px-5 pt-14 pb-4 shadow-sm">
        <div className="flex items-center gap-3">
          <Link href="/search">
            <ArrowLeft size={22} className="text-gray-800" />
          </Link>
          <h1 className="text-[18px] font-bold text-[#1a2b4a]">{symptom ? `Doctors for ${symptom}` : specialty ? `${specialty} Doctors` : "All Doctors"}</h1>
        </div>
      </div>

      {/* Quick Filter Pills */}
      <div className="flex gap-2 px-4 pt-3 pb-1 overflow-x-auto hide-scrollbar">
        {filters.map((f) => {
          const active = activeFilters.includes(f.key);
          return (
            <button
              key={f.key}
              onClick={() => toggleFilter(f.key)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all ${
                active
                  ? "bg-[#0a4d8c] text-white border-[#0a4d8c]"
                  : "bg-white text-gray-600 border-gray-200"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Doctor List */}
      <div className="p-4 flex flex-col gap-3">
        {filtered.map((doc) => (
          <Link key={doc.id} href={`/doctor/${doc.id}`} className="block">
            <div className="bg-white rounded-2xl p-3.5 shadow-sm flex gap-3.5">
              <div className="w-[74px] h-[94px] bg-gray-100 rounded-xl overflow-hidden shrink-0">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="font-bold text-[14px] text-[#1a2b4a]">{doc.name}</h3>
                    <span className="bg-[#e8f0fe] text-[#0a4d8c] text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0">
                      {doc.specialty}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5">{doc.experienceLabel}</p>
                  <div className="flex flex-wrap items-center gap-1 mt-1.5">
                    {doc.conditions.map((cond, idx) => (
                      <span
                        key={idx}
                        className="bg-[#f7f8fa] border border-gray-100 text-gray-600 text-[9.5px] px-1.5 py-0.5 rounded"
                      >
                        {cond}
                      </span>
                    ))}
                    <span className="text-[#0a4d8c] text-[9.5px] font-bold">+3 more</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2.5 flex-wrap">
                  <span className="bg-[#e8f0fe] text-[#0a4d8c] text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {doc.hospitalFeeLabel} In Hospital
                  </span>
                  {doc.onlineFeeLabel && (
                    <span className="bg-[#f3e8fd] text-[#7c3aed] text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {doc.onlineFeeLabel} Online
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="bg-white rounded-2xl p-6 text-center text-sm text-gray-500">
            No matching doctors are available yet. Try browsing all doctors instead.
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f5f5f5]" />}>
      <SearchResultsContent />
    </Suspense>
  );
}
