import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PB Health",
  description: "Consult a doctor in minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-gray-100 flex justify-center min-h-screen">
        <div className="w-full max-w-[430px] bg-[#f5f5f5] min-h-screen relative shadow-xl">
          {children}
        </div>
      </body>
    </html>
  );
}
