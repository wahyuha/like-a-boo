import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/layout/Layout";
import RightSidebar from "@/components/layout/RightSidebar";
import UniversesPanel from "@/components/universe/UniversesPanel";
import QuestionCard from "@/components/question/QuestionCard";
import { questionData } from '@/lib/mockData';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Layout rightSidebar={<RightSidebar />}>
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
          {/* Left Panel: Universes (Hidden on mobile) */}
          <div className="hidden lg:block">
            <UniversesPanel />
          </div>

          {/* Main Content */}
          <div>
            {/* Back Button and Tag */}
            <div className="flex items-center gap-4 mb-6">
              <button className="text-foreground hover:text-muted">
                <span className="text-2xl">←</span>
              </button>
              Tag Section
            </div>

            {/* Question Card */}
            <QuestionCard question={questionData} />

            {/* Comment Input */}
            <div>CommentInput Section</div>

            {/* Comment List */}
            <div>CommentList Section</div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
