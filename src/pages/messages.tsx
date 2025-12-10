import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/layout/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Messages() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Layout rightSidebar={null}>
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">

          {/* Main Content */}
          <div>
            Messages page
          </div>
        </div>
      </Layout>
    </div>
  );
}
