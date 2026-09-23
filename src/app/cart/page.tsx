"use client";

import Link from "next/link";
import { ArrowLeft, CalendarDays, Plus, Trash2, Upload, Video, X } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const [reportName, setReportName] = useState("");
  const [isMemberDrawerOpen, setIsMemberDrawerOpen] = useState(false);
  const [patientName, setPatientName] = useState("Debajyoti");
  const [patientPhone, setPatientPhone] = useState("9903777698");
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberPhone, setNewMemberPhone] = useState("");

  const addMember = () => {
    if (!newMemberName.trim() || !newMemberPhone.trim()) return;
    setPatientName(newMemberName.trim());
    setPatientPhone(newMemberPhone.trim());
    setNewMemberName("");
    setNewMemberPhone("");
    setIsMemberDrawerOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] pb-32">
      <header className="bg-[#075086] px-5 pt-14 pb-7 text-white">
        <div className="flex items-center gap-4">
          <Link href="/doctor/rakesh-aga" aria-label="Back to doctor"><span className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center"><ArrowLeft size={24} /></span></Link>
          <h1 className="text-[24px] font-bold">My Cart</h1>
        </div>
      </header>

      <main className="px-4 -mt-1">
        <div className="flex items-center justify-between py-5">
          <h2 className="text-[22px] font-bold text-[#20232a]">Consultations</h2>
          <button className="text-[#0a5898] font-bold flex items-center gap-1">Add more <Plus size={22} /></button>
        </div>

        <section className="rounded-[28px] bg-white p-3.5 shadow-sm">
          <div className="flex justify-between gap-3">
            <div className="flex gap-3 items-center">
              <img src="https://randomuser.me/api/portraits/men/74.jpg" alt="Dr. Rakesh Aga" className="w-14 h-14 rounded-xl object-cover bg-gray-100" />
              <div><h3 className="text-[16px] font-bold text-[#20232a]">Dr. Rakesh Aga</h3><p className="text-[11px] text-gray-500 mt-0.5">Gastroenterology</p></div>
            </div>
            <button type="button" aria-label="Remove consultation" title="Remove consultation" className="rounded-full p-2 text-gray-500 hover:bg-red-50 hover:text-red-600"><Trash2 size={19} /></button>
          </div>
          <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#f5f5f5] p-3">
            <div className="border-r border-gray-200 pr-3 text-center leading-none"><span className="block text-[10px] font-bold text-gray-500">SEP</span><span className="text-[24px] font-bold text-[#20232a]">28</span></div>
            <div className="space-y-1 text-[12px] font-semibold text-[#30323a]"><p className="flex items-center gap-2"><CalendarDays size={16} className="text-[#0a5898]" />Monday – 1:45 PM</p><p className="flex items-center gap-2"><Video size={16} className="text-[#0a5898]" />Online Consultation</p></div>
          </div>
          <div className="flex justify-between mt-4 text-[16px] font-bold text-[#20232a]"><span>Price:</span><span>₹1,500</span></div>
        </section>

        <section className="mt-3 rounded-2xl bg-white px-4 py-3.5 shadow-sm flex items-center justify-between gap-3">
          <div><p className="text-[11px] font-semibold text-gray-500">Patient</p><h3 className="mt-0.5 text-[15px] font-bold text-[#20232a]">{patientName}</h3><p className="mt-0.5 text-[12px] text-gray-600">+91 {patientPhone}</p></div>
          <button type="button" onClick={() => setIsMemberDrawerOpen(true)} className="text-[13px] font-bold text-[#0a5898] hover:underline">Change</button>
        </section>

        <section className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between gap-3"><p className="text-[13px] font-semibold text-gray-600">Upload a test report <span className="font-normal">(optional)</span></p><label className="cursor-pointer rounded-lg border border-[#0a5898] px-3 py-1.5 text-[12px] font-bold text-[#0a5898] flex items-center gap-1"><Upload size={15} />Upload<input type="file" className="sr-only" onChange={(event) => setReportName(event.target.files?.[0]?.name ?? "")} /></label></div>
          {reportName && <p className="mt-2 text-[11px] text-[#0a5898] truncate">Selected: {reportName}</p>}
          <textarea placeholder="Anything else you would like to add" className="mt-4 h-20 w-full resize-none rounded-xl bg-[#f5f5f5] p-3 text-[13px] outline-none placeholder:text-gray-400" />
        </section>

        <section className="mt-4 rounded-2xl bg-white p-2 flex gap-2"><input placeholder="Enter Coupon code here" className="min-w-0 flex-1 px-3 text-[14px] outline-none placeholder:text-gray-400" /><button className="rounded-xl bg-[#8abbd8] px-5 py-3 text-sm font-bold text-white">Apply</button></section>
        <section className="mt-4 rounded-2xl bg-white p-4 shadow-sm"><h2 className="text-[18px] font-bold text-[#20232a]">Bill summary</h2><div className="my-4 border-t border-gray-200" /><div className="flex justify-between text-[15px] text-gray-600"><span>Total</span><span className="font-bold text-[#20232a]">₹1,500</span></div><div className="mt-6 flex justify-between text-[17px] font-bold text-[#20232a]"><span>Payable Amount</span><span>₹1,500</span></div></section>
      </main>
      <div className="fixed bottom-0 w-full max-w-[430px] bg-[#f2f2f2] px-5 pt-3 pb-6"><button className="w-full rounded-full border border-white bg-[#0a5898] py-4 text-[20px] font-bold text-white shadow-lg">Pay Securely</button></div>

      {isMemberDrawerOpen && (
        <div className="fixed inset-0 z-[60] flex items-end bg-black/40" role="dialog" aria-modal="true" aria-label="Add new member">
          <button type="button" className="absolute inset-0 cursor-default" aria-label="Close add member drawer" onClick={() => setIsMemberDrawerOpen(false)} />
          <section className="relative w-full max-w-[430px] rounded-t-[28px] bg-white px-5 pt-3 pb-7 shadow-2xl">
            <div className="mx-auto h-1.5 w-11 rounded-full bg-gray-200" />
            <div className="mt-5 flex items-center justify-between">
              <h2 className="text-[20px] font-bold text-[#20232a]">Add new member</h2>
              <button type="button" onClick={() => setIsMemberDrawerOpen(false)} aria-label="Close" className="rounded-full p-1 text-gray-500 hover:bg-gray-100"><X size={21} /></button>
            </div>
            <div className="mt-5 space-y-4">
              <label className="block text-[12px] font-semibold text-gray-600">Full name<input value={newMemberName} onChange={(event) => setNewMemberName(event.target.value)} placeholder="Enter full name" className="mt-1.5 w-full rounded-xl border border-gray-200 px-3.5 py-3 text-[14px] outline-none focus:border-[#0a5898]" /></label>
              <label className="block text-[12px] font-semibold text-gray-600">Phone number<div className="mt-1.5 flex rounded-xl border border-gray-200 focus-within:border-[#0a5898]"><select aria-label="Country code" className="rounded-l-xl border-r border-gray-200 bg-[#f7f8fa] px-2 text-[14px] font-semibold text-[#20232a] outline-none"><option>+91</option><option>+1</option><option>+44</option></select><input value={newMemberPhone} onChange={(event) => setNewMemberPhone(event.target.value.replace(/\D/g, ""))} inputMode="numeric" placeholder="Enter phone number" className="min-w-0 flex-1 rounded-r-xl px-3.5 py-3 text-[14px] outline-none" /></div></label>
            </div>
            <button type="button" onClick={addMember} disabled={!newMemberName.trim() || !newMemberPhone.trim()} className="mt-6 w-full rounded-full bg-[#0a5898] py-3.5 text-[16px] font-bold text-white disabled:cursor-not-allowed disabled:bg-[#a7c7db]">Add member</button>
          </section>
        </div>
      )}
    </div>
  );
}
