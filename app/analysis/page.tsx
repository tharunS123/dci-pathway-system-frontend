import MindsetAnalysis from "@/components/MindsetAnalysis";

function AnalysisPage() {
  return (
    <div className="container min-h-screen flex overflow-hidden py-8">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-6">List of OK Analysis</h1>
        <MindsetAnalysis />
      </div>
    </div>
  );
}

export default AnalysisPage;