import React from 'react'
import { stackServerApp } from "@/stack/server";
import { SignUp } from "@stackframe/stack";
import MindsetAnalysis from "@/components/MindsetAnalysis";

async function MindsetAnalysisPage() {
  const user = await stackServerApp.getUser();
  return (
    <>
      <div className="mt-7 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-10 gap-6">
        <div className="lg:col-span-full">
          <MindsetAnalysis/>
        </div>
      </div>
    </>
  )
}

export default MindsetAnalysisPage

