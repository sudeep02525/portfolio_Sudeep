import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  title: "Sudeep Das - UI/UX Designer & Aspiring AI/ML Engineer",
  description: "B.Voc student in AI & ML, building a strong foundation in web development and UI/UX design. Creating clean, responsive interfaces while preparing to explore Artificial Intelligence and Machine Learning.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
