"use client";
import BottomNav from "@/components/BottomNav";
import { ArrowLeft, Search as SearchIcon, Pill, Heart, Activity, Scissors, Bone, Baby, User, Brain, Eye, Wind, ShieldPlus, Droplets, Smile, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const symptomCategories = [
  {
    title: "General Symptoms",
    icon: <Activity size={18} className="text-gray-500" />,
    symptoms: ["Cold", "Cough", "Fever", "Headache", "Body Ache", "Weakness", "Fatigue", "Dizziness", "Chills", "Loss of Appetite"],
  },
  {
    title: "Heart Issues",
    icon: <Heart size={18} className="text-gray-500" />,
    symptoms: ["Chest Pain", "Palpitations", "High Blood Pressure", "Low Blood Pressure", "Shortness of Breath", "Leg Swelling", "High Cholesterol"],
  },
  {
    title: "Stomach & Digestion",
    icon: <Pill size={18} className="text-gray-500" />,
    symptoms: ["Acidity", "Stomach Ache", "Indigestion", "Nausea", "Vomiting", "Diarrhea", "Constipation", "Bloating", "Gas", "Blood in Stool"],
  },
  {
    title: "Skin & Hair",
    icon: <Scissors size={18} className="text-gray-500" />,
    symptoms: ["Acne", "Hair Fall", "Skin Rash", "Itching", "Dandruff", "Dry Skin", "Eczema", "Psoriasis", "Pigmentation", "Hives"],
  },
  {
    title: "Bone & Joint",
    icon: <Bone size={18} className="text-gray-500" />,
    symptoms: ["Joint Pain", "Backache", "Neck Pain", "Knee Pain", "Shoulder Pain", "Arthritis", "Muscle Pain", "Sprain", "Fracture"],
  },
  {
    title: "Women's Health",
    icon: <Baby size={18} className="text-gray-500" />,
    symptoms: ["Period Issues", "PCOS", "Pregnancy Symptoms", "Pelvic Pain", "Vaginal Discharge", "Breast Pain", "Menopause Symptoms", "Fertility Concerns"],
  },
  {
    title: "Men's Health",
    icon: <User size={18} className="text-gray-500" />,
    symptoms: ["Hair Loss", "Prostate Issues", "Urine Issues", "Sexual Wellness", "Erectile Dysfunction", "Testicular Pain", "Low Testosterone"],
  },
  {
    title: "Brain & Nerves",
    icon: <Brain size={18} className="text-gray-500" />,
    symptoms: ["Migraine", "Severe Headache", "Numbness", "Tingling", "Seizures", "Memory Problems", "Tremors", "Sleep Problems"],
  },
  {
    title: "Eyes, Ears & Throat",
    icon: <Eye size={18} className="text-gray-500" />,
    symptoms: ["Eye Pain", "Red Eyes", "Blurred Vision", "Ear Pain", "Hearing Loss", "Sore Throat", "Tonsillitis", "Sinus Pain"],
  },
  {
    title: "Breathing & Allergies",
    icon: <Wind size={18} className="text-gray-500" />,
    symptoms: ["Wheezing", "Asthma", "Breathing Difficulty", "Allergy", "Runny Nose", "Sneezing", "Chest Congestion", "Sleep Apnea"],
  },
  {
    title: "Urinary & Kidney Health",
    icon: <Droplets size={18} className="text-gray-500" />,
    symptoms: ["Burning Urination", "Frequent Urination", "Blood in Urine", "Kidney Stones", "Flank Pain", "Urine Leakage"],
  },
  {
    title: "Dental & Oral Health",
    icon: <Smile size={18} className="text-gray-500" />,
    symptoms: ["Toothache", "Bleeding Gums", "Mouth Ulcer", "Bad Breath", "Jaw Pain", "Sensitive Teeth"],
  },
  {
    title: "Infections & Other Concerns",
    icon: <ShieldPlus size={18} className="text-gray-500" />,
    symptoms: ["Food Poisoning", "Dengue Symptoms", "Typhoid Symptoms", "Malaria Symptoms", "Weight Loss", "Weight Gain", "Anxiety", "Stress"],
  },
];

export default function BrowseSymptomsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (title: string) => {
    setExpandedCategories((current) => current.includes(title) ? current.filter((item) => item !== title) : [...current, title]);
  };

  return (
    <div className="min-h-screen pb-28 bg-[#f5f5f5]">
      {/* Header */}
      <div className="bg-white px-5 pt-14 pb-5 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-5">
          <Link href="/search">
            <ArrowLeft size={22} className="text-gray-800" />
          </Link>
          <h1 className="text-[18px] font-bold text-[#1a2b4a]">Browse Symptoms</h1>
        </div>

        {/* Search Bar */}
        <div className="flex bg-[#f2f3f5] rounded-xl px-4 py-3 items-center gap-2">
          <SearchIcon size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search a symptom..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none w-full text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4 mt-2">
        {symptomCategories.map((category, index) => {
          // Filter symptoms based on search query
          const filteredSymptoms = category.symptoms.filter((symptom) =>
            symptom.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (filteredSymptoms.length === 0) return null;
          const isExpanded = expandedCategories.includes(category.title);
          const displayedSymptoms = isExpanded ? filteredSymptoms : filteredSymptoms.slice(0, 6);
          const categoryQuery = encodeURIComponent(category.title);

          return (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <Link
                href={`/search/results?category=${categoryQuery}`}
                className="block w-full p-3.5 text-left hover:bg-[#f8fbff] transition-colors"
                aria-label={`Find doctors for ${category.title}`}
              >
                <div className="flex items-center gap-2 mb-2.5 border-b border-gray-100 pb-2">
                  {category.icon}
                  <h2 className="text-[14px] font-bold text-[#1a2b4a]">{category.title}</h2>
                  <ChevronRight size={18} className="ml-auto text-[#0a4d8c]" />
                </div>
                <ul className="grid grid-cols-2 gap-y-1.5 gap-x-2">
                  {displayedSymptoms.map((symptom) => (
                    <li key={symptom} className="text-[12px] text-gray-600 truncate">{symptom}</li>
                  ))}
                </ul>
              </Link>
              {filteredSymptoms.length > 6 && (
                <button
                  type="button"
                  onClick={() => toggleCategory(category.title)}
                  className="w-full border-t border-gray-100 py-2 text-[11px] font-bold text-[#0a4d8c] flex items-center justify-center gap-1 hover:bg-[#f8fbff]"
                >
                  {isExpanded ? "Show less" : `View more (${filteredSymptoms.length - 6})`}
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              )}
            </div>
          );
        })}
        {symptomCategories.every((cat) =>
          cat.symptoms.filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase())).length === 0
        ) && (
          <div className="text-center text-gray-500 mt-10 text-sm">
            No symptoms found for &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
