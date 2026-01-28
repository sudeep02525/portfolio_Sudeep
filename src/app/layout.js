import "./globals.css";

export const metadata = {
  title: "Sudeep Das - UI/UX Designer & Frontend Developer",
  description: "I design modern interfaces in Figma and build fully responsive websites using clean code. Passionate about creating beautiful, user-centric digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
