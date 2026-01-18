"use client";

import Image from "next/image";

export default function EgladinDashboard() {
  const apps = [
    { 
      name: "성공 사례", 
      sub: "SUCCESS CASE", 
      icon: "/icon-success.png", 
      url: "https://script.google.com/macros/s/AKfycbz_O43yef-dlqNJWXAfnNAHZaahxF7LCT1i6qKYYaUPCuMa5rE1qFhUYsx4YVeqxKr1/exec" 
    },
    { 
      name: "Calculator", 
      sub: "DOSAGE & INFUSION", 
      icon: "/icon-calc.png", 
      url: "https://eglandin-calculator-egl.vercel.app/" 
    },
    { 
      name: "LT Tracker", 
      sub: "LT CASE MGMT", 
      icon: "/icon-tracker.png", 
      url: "https://eglandin-tracker.vercel.app/" 
    },
    { name: "Basic Case", sub: "PROTOCOLS", icon: null, url: "#" },
    { name: "SSNHL IRB", sub: "RESEARCH", icon: null, url: "#" },
    { name: "학회 일정", sub: "CALENDAR", icon: null, url: "#" },
    { name: "공지 사항", sub: "NOTICE", icon: null, url: "#" },
  ];

  // 준비 중인 앱 아이콘 크기도 동일하게 40% 상향 (24px -> 56px 수준)
  const PlaceholderIcon = () => (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.2 }}>
      <circle cx="12" cy="12" r="9" stroke="#9CA3AF" strokeWidth="1.2"/>
      <path d="M12 7V12L15 15" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F3F4F6', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      {/* 상단 로고 */}
      <div style={{ marginBottom: '35px', width: '100%', maxWidth: '200px' }}>
        <Image src="/eglandin-logo.png" alt="Logo" width={300} height={100} priority style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* 2열 그리드 레이아웃 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', width: '100%', maxWidth: '650px' }}>
        {apps.map((app, index) => (
          <button
            key={index}
            onClick={() => { if (app.url !== "#") window.location.href = app.url; else alert("준비 중인 서비스입니다."); }}
            style={{
              position: 'relative',
              // 세로 폭을 줄여 콤팩트하게 변경 (기존 110px -> 100px)
              height: '100px',
              backgroundColor: 'white',
              borderRadius: '18px',
              border: 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '12px 18px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0  8px 15px rgba(0,0,0,0.08)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.04)';
            }}
          >
            {/* 왼쪽 빨간색 바 */}
            <div style={{ position: 'absolute', left: '0', width: '6px', height: '100%', backgroundColor: '#C8202F', borderRadius: '18px 0 0 18px' }}></div>
            
            {/* 아이콘 크기를 40% 늘림 (40px -> 56px) */}
            <div style={{ marginRight: '14px', flexShrink: 0, display: 'flex', alignItems: 'center', width: '56px', height: '56px', justifyContent: 'center' }}>
                {app.icon ? (
                    <Image 
                        src={app.icon} 
                        alt={app.name} 
                        width={56} 
                        height={56} 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                ) : (
                    <PlaceholderIcon />
                )}
            </div>

            {/* 텍스트 크기를 40% 늘림 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                {/* 서브 폰트 9px -> 12px 상향 */}
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: app.icon ? '#C8202F' : '#9CA3AF', letterSpacing: '0.05em', marginBottom: '2px', opacity: '0.8' }}>{app.sub}</span>
                {/* 메인 폰트 17px -> 22px 상향 */}
                <span style={{ fontSize: '22px', fontWeight: '900', color: app.icon ? '#1D1D1B' : '#6B7280', textAlign: 'left', lineHeight: '1.0', wordBreak: 'keep-all' }}>{app.name}</span>
            </div>
            
            {/* 우측 하단 화살표 (텍스트 크기에 맞춰 살짝 조정) */}
            {app.icon && (
            <div style={{ position: 'absolute', right: '10px', bottom: '10px', opacity: '0.1' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D1D1B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </div>
            )}
          </button>
        ))}
      </div>

      <footer style={{ marginTop: '40px', color: '#9CA3AF', fontSize: '9px', fontWeight: 'bold', letterSpacing: '0.2em' }}>
        © 2026 EGLANDIN PROFESSIONAL
      </footer>
    </div>
  );
}