import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  title: "Sudeep Das - UI/UX Designer & Aspiring AI/ML Engineer",
  description: "B.Voc student in AI & ML, building a strong foundation in web development and UI/UX design. Creating clean, responsive interfaces while preparing to explore Artificial Intelligence and Machine Learning.",
  icons: {
    icon: [
      { url: '/fabicon.png', sizes: 'any' },
      { url: '/fabicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/fabicon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/fabicon.png',
    apple: '/fabicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Force circular favicon - Enhanced cross-browser support */
            link[rel="icon"], 
            link[rel="shortcut icon"], 
            link[rel="apple-touch-icon"],
            link[rel="apple-touch-icon-precomposed"] {
              border-radius: 50% !important;
              clip-path: circle(50% at 50% 50%) !important;
              -webkit-clip-path: circle(50% at 50% 50%) !important;
              -moz-clip-path: circle(50% at 50% 50%) !important;
              mask: radial-gradient(circle at 50% 50%, white 50%, transparent 50%) !important;
              -webkit-mask: radial-gradient(circle at 50% 50%, white 50%, transparent 50%) !important;
              -moz-mask: radial-gradient(circle at 50% 50%, white 50%, transparent 50%) !important;
              object-fit: cover !important;
              aspect-ratio: 1/1 !important;
            }
            
            /* Browser specific favicon styling */
            head link[rel*="icon"] {
              border-radius: 50% !important;
              clip-path: circle(50% at 50% 50%) !important;
              -webkit-clip-path: circle(50% at 50% 50%) !important;
              object-fit: cover !important;
            }
            
            /* Additional browser compatibility */
            *[rel*="icon"] {
              border-radius: 50% !important;
            }
          `
        }} />
        <link rel="icon" href="/fabicon.png" sizes="any" />
        <link rel="icon" href="/fabicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/fabicon.png" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/fabicon.png" />
        <link rel="apple-touch-icon" href="/fabicon.png" />
        <meta name="msapplication-TileImage" content="/fabicon.png" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
