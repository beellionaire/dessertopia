"use client";

import CategorySection from "@/components/ui/CategorySection";
import Footer from "@/components/ui/FooterSection";
import HeroSection from "@/components/ui/HeroSection";
import RecommendationSection from "@/components/ui/RecommendationSection";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="min-h-screen w-full bg-slate-200 dark:bg-slate-800">
          {/* Hero Section */}
          <HeroSection />
          {/* <CategorySection /> */}
          <RecommendationSection />
          <Footer />
        </div>
      </main>
    </SessionProvider>
  );
}
