// src/app/layout.js

export const metadata = {
  title: 'EGLANDIN APP',
  description: '에글란딘 계산기, LT 트래커, 성공사례 공유 등 통합 서비스',
  openGraph: {
    title: 'EGLANDIN 통합 대시보드',
    description: '에글란딘의 모든 업무용 앱을 한곳에서 이용하세요.',
    url: 'https://eglandin-main.vercel.app', // 나중에 실제 배포 주소로 수정
    siteName: 'EGLANDIN',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}