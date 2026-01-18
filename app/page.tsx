"use client";

import Image from "next/image";

export default function EgladinDashboard() {
  const apps = [
    { 
      name: "성공 사례", 
      sub: "SUCCESS CASE", 
      icon: "/icon-success.png", // PNG 확장자로 수정
      url: "https://script.google.com/macros/s/AKfycbz_O43yef-dlqNJWXAfnNAHZaahxF7LCT1i6qKYYaUPCuMa5rE1qFhUYsx4YVeqxKr1/exec" 
    },
    { 
      name: "Calculator", 
      sub: "DOSAGE & INFUSION", 
      icon: "/icon-calc.png", // PNG 확장자로 수정
      url: "https://eglandin-calculator-egl.vercel.app/" 
    },
    { 
      name: "LT Tracker", 
      sub: "LT CASE MGMT", 
      icon: "/icon-tracker.png", // PNG 확장자로 수정
      url: "https://eglandin-tracker.vercel.app/" 
    },
    { name: "Basic Case", sub: "PROTOCOLS", icon: null, url: "#" },
    { name: "SSNHL IRB", sub: "RESEARCH", icon: null, url: "#" },
    { name: "학회 일정", sub: "CALENDAR", icon: null, url: "#" },
    { name: "공지 사항", sub: "NOTICE", icon: null, url: "#" },
  ];

  const PlaceholderIcon = () => (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.2 }}>
      <circle cx="12" cy="12" r="9" stroke="#9CA3AF" strokeWidth="1.2"/>
      <path d="M12 7V12L15 15" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F3F4F6', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 16px', fontFamily: 'sans-serif' }}>
      {/* 상단 로고 */}
      <div style={{ marginBottom: '30px', width: '100%', maxWidth: '180px' }}>
        <Image src="/eglandin-logo.png" alt="Logo" width={300} height={100} priority style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* 2열 그리드 레이아웃 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', width: '100%', maxWidth: '600px' }}>
        {apps.map((app, index) => (
          <button
            key={index}
            onClick={() => { if (app.url !== "#") window.location.href = app.url; else alert("준비 중인 서비스입니다."); }}
            style={{
              position: 'relative',
              height: '90px', 
              backgroundColor: 'white',
              borderRadius: '16px',
              border: 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '8px 12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              overflow: 'hidden',
              textAlign: 'left'
            }}
          >
            <div style={{ position: 'absolute', left: '0', width: '5px', height: '100%', backgroundColor: '#C8202F', borderRadius: '16px 0 0 16px' }}></div>
            
            <div style={{ marginRight: '10px', flexShrink: 0, display: 'flex', alignItems: 'center', width: '48px', height: '48px', justifyContent: 'center' }}>
                {app.icon ? (
                    <Image 
                        src={app.icon} 
                        alt={app.name} 
                        width={48} 
                        height={48} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} 
                    />
                ) : (
                    <PlaceholderIcon />
                )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', flex: 1 }}>
                <span style={{ 
                    fontSize: '8px', 
                    fontWeight: 'bold', 
                    color: app.icon ? '#C8202F' : '#9CA3AF', 
                    letterSpacing: '-0.02em', 
                    marginBottom: '1px', 
                    whiteSpace: 'nowrap'
                }}>
                  {app.sub}
                </span>
                <span style={{ 
                    fontSize: '15px', 
                    fontWeight: '900', 
                    color: app.icon ? '#1D1D1B' : '#6B7280', 
                    lineHeight: '1.1', 
                    whiteSpace: 'nowrap'
                }}>
                  {app.name}
                </span>
            </div>
          </button>
        ))}
      </div>

      <footer style={{ marginTop: '30px', color: '#9CA3AF', fontSize: '9px', fontWeight: 'bold', letterSpacing: '0.1em', opacity: 0.6 }}>
        © 2026 EGLANDIN PROFESSIONAL
      </footer>
    </div>
  );
}