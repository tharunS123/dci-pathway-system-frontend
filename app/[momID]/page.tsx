import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";

const FLASK_URL = process.env.NEXT_PUBLIC_FLASK_URL!;

type TrendPoint = [string, number];

interface MomAnalysis {
  mom_name: string;
  rows: number;
  start: string | null;
  end: string | null;
  pos_total: number;
  neg_total: number;
  net_total: number;
  pos_rate: number;
  trend_dir: string;
  best_week_label: string | null;
  best_week_value: number | null;
  worst_week_label: string | null;
  worst_week_value: number | null;
  top_themes: [string, number][];
  trend_points: TrendPoint[];
}

async function fetchMomAnalysis(momId: string): Promise<MomAnalysis | null> {
    console.log("fetch(momID): ", momId)
    const res = await fetch(`${FLASK_URL}/analyze/mom/${momId}`, {
      cache: "no-store", // always fresh
    });
  
    if (res.status === 404) return null;
    if (!res.ok) throw new Error("Failed to fetch mom analysis");
  
    return res.json();
  }

async function MomPage({params}: {params: Promise<{ momID: string }>}) {
  const resolvedParams = await params;
  console.log("MomPage(params): ", resolvedParams);
  const { momID } = resolvedParams;
  console.log("MomPage(params) momID: ", momID);
  const data = await fetchMomAnalysis(momID);

  if (!data) {
    notFound();
  }

  return (
    // <section className="py-3">
    //   <div className="container max-w-7xl">
    //     <div className="relative grid-cols-3 gap-20 lg:grid">
    //       <div className="lg:col-span-2">
    //         <div>
    //           <Badge variant="outline">Analyze</Badge>
    //           <h1 className="mt-3 text-3xl font-extrabold">
    //             Sentiment Analysis
    //           </h1>
    //           <p className="text-muted-foreground mt-2 text-lg">
    //           To gain a clearer understanding of mindset changes recorded in the weekly notes. 
    //           To identify meaningful trends that were difficult to see in text form. 
    //           To help DCI evaluate how the program is progressing over time.​
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        Analysis for <span className="text-blue-600">{data.mom_name}</span>
      </h1>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="border rounded-xl p-4">
          <h2 className="font-semibold mb-1">Overall</h2>
          <p>Rows: {data.rows}</p>
          <p>
            Date range: {data.start} → {data.end}
          </p>
          <p>Trend: {data.trend_dir}</p>
        </div>

        <div className="border rounded-xl p-4">
          <h2 className="font-semibold mb-1">Sentiment</h2>
          <p>Pos total: {data.pos_total}</p>
          <p>Neg total: {data.neg_total}</p>
          <p>Net total: {data.net_total}</p>
          <p>Pos rate: {(data.pos_rate * 100).toFixed(1)}%</p>
        </div>

        <div className="border rounded-xl p-4">
          <h2 className="font-semibold mb-1">Best / Worst Week</h2>
          <p>
            Best: {data.best_week_label} ({data.best_week_value?.toFixed(2)})
          </p>
          <p>
            Worst: {data.worst_week_label} ({data.worst_week_value?.toFixed(2)})
          </p>
        </div>
      </section>

      <section className="border rounded-xl p-4">
        <h2 className="font-semibold mb-3">Trend Points</h2>
        <ul className="space-y-1 text-sm font-mono">
          {data.trend_points.map(([week, value]) => (
            <li key={week}>
              {week}: {value.toFixed(3)}
            </li>
          ))}
        </ul>
      </section>

      <section className="border rounded-xl p-4">
        <h2 className="font-semibold mb-3">Top Themes</h2>
        <ul className="space-y-1">
          {data.top_themes.map(([theme, count]) => (
            <li key={theme}>
              <span className="font-medium capitalize">{theme}</span>: {count}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default MomPage