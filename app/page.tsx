"use client";

import Image from "next/image";

export default function EgladinDashboard() {
  const apps = [
    { 
      name: "성공 사례", 
      sub: "Success Case Sharing",
      url: "https://script.google.com/macros/s/AKfycbz_O43yef-dlqNJWXAfnNAHZaahxF7LCT1i6qKYYaUPCuMa5rE1qFhUYsx4YVeqxKr1/exec" 
    },
    { name: "Calculator", sub: "Dosage & Infusion", url: "https://eglandin-calculator-egl.vercel.app/" },
    { name: "LT Tracker", sub: "Sales Case Management", url: "https://eglandin-tracker.vercel.app/" },
    { name: "Basic Case", sub: "Standard Protocols", url: "#" },
    { name: "SSNHL IRB", sub: "Clinical Research", url: "#" },
    { name: "학회 일정", sub: "Academic Calendar", url: "#" },
    { name: "공지 사항", sub: "Notice", url: "#" },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col items-center py-12 px-4">
      {/* 상단 로고 영역 - 배경 없는 PNG에 최적화 */}
      <div className="mb-12 transition-transform hover:scale-105 duration-300">
        <Image
          src="/eglandin-logo.png"
          alt="Eglandin Logo"
          width={300}
          height={100}
          priority
          className="h-auto w-auto drop-shadow-sm" // 투명 배경 로고에 미세한 그림자 추가
        />
      </div>

      {/* 버튼 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        {apps.map((app, index) => (
          <button
            key={index}
            onClick={() => {
              if (app.url !== "#") window.location.href = app.url;
              else alert("준비 중인 서비스입니다.");
            }}
            className="group relative bg-white hover:bg-[#1D1D1B] border-l-8 border-[#C8202F] p-8 rounded-xl shadow-md transition-all duration-300 flex flex-col items-start justify-center overflow-hidden active:scale-95"
          >
            <span className="text-[10px] font-bold text-[#C8202F] uppercase tracking-widest mb-1 group-hover:text-white/70 transition-colors">
              {app.sub || "Eglandin Professional"}
            </span>
            <span className="text-2xl font-black text-[#1D1D1B] group-hover:text-white transition-colors tracking-tight">
              {app.name}
            </span>
            
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#C8202F" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      <footer className="mt-16 text-gray-400 text-xs font-medium tracking-tighter">
        © 2026 EGLANDIN. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}