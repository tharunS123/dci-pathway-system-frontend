import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import React from "react";
import { MomSentimentChart } from "@/components/MomSentimentChart";
import type { MomAnalysis } from "@/types/mom-analysis";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const FLASK_URL = process.env.NEXT_PUBLIC_FLASK_URL!;

async function fetchMomAnalysis(momId: string): Promise<MomAnalysis | null> {
    console.log("fetch(momID): ", momId)
    const res = await fetch(`${FLASK_URL}/analyze/mom/${momId}`, {
      cache: "no-store", // always fresh
    });
  
    if (res.status === 404) return null;
    if (!res.ok) throw new Error("Failed to fetch mom analysis");
  
    return res.json();
  }

async function MomPage({ params }: { params: Promise<{ momID: string }>}) {
  const resolvedParams = await params;
  console.log("MomPage(params) momID: ", resolvedParams);
  const { momID } = resolvedParams;
  const data = await fetchMomAnalysis(momID);
  if (!data) {
    notFound();
  }
  return (
    <div className="mt-8 max-w-6xl mx-auto px-4 space-y-8">
      {/* Header / Hero */}
      <header className="space-y-3">
        <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
          Sentiment Analysis
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {data.mom_name}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
          To identify meaningful trends in mentor notes that are difficult to
          see when reading row by row.
        </p>
      </header>

      {/* Overview cards */}
      <section
        id="overview"
        aria-label="Sentiment overview"
        className="grid gap-4 md:grid-cols-3"
      >
        {/* Overall */}
        <Card className="border-muted/60 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold">Overall</CardTitle>
            <CardDescription className="text-xs">
              Data coverage and high-level trend.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-1 text-sm">
            <p>
              <span className="text-muted-foreground"># Rows: </span>
              <span className="font-semibold">{data.rows}</span>
            </p>
            <p>
              <span className="text-muted-foreground">Date range: </span>
              <span className="font-medium">
                {data.start} – {data.end}
              </span>
            </p>
            <p>
              <span className="text-muted-foreground">Trend: </span>
              <span className="font-semibold capitalize">
                {data.trend_dir}
              </span>
            </p>
          </CardContent>
        </Card>

        {/* Sentiment totals */}
        <Card className="border-muted/60 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold">Sentiment</CardTitle>
            <CardDescription className="text-xs">
              Count of positive vs. negative check-ins.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-y-1 text-sm">
            <p>
              <span className="text-muted-foreground">Pos total</span>
              <br />
              <span className="text-lg font-semibold">{data.pos_total}</span>
            </p>
            <p>
              <span className="text-muted-foreground">Neg total</span>
              <br />
              <span className="text-lg font-semibold">{data.neg_total}</span>
            </p>
            <p>
              <span className="text-muted-foreground">Net total</span>
              <br />
              <span className="text-lg font-semibold">{data.net_total}</span>
            </p>
            <p>
              <span className="text-muted-foreground">Pos rate</span>
              <br />
              <span className="text-lg font-semibold">
                {(data.pos_rate * 100).toFixed(1)}%
              </span>
            </p>
          </CardContent>
        </Card>

        {/* Best / worst week */}
        <Card className="border-muted/60 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold">
              Best / Worst Week
            </CardTitle>
            <CardDescription className="text-xs">
              Weeks with the strongest positive and negative averages.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wide">
                Best week
              </p>
              <p className="font-medium">
                {data.best_week_label}{" "}
                <span className="text-muted-foreground">
                  ({data.best_week_value?.toFixed(2)})
                </span>
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wide">
                Worst week
              </p>
              <p className="font-medium">
                {data.worst_week_label}{" "}
                <span className="text-muted-foreground">
                  ({data.worst_week_value?.toFixed(2)})
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Trend chart */}
      <section id="trend" aria-label="Sentiment trend over time">
        <MomSentimentChart points={data.trend_points} />
      </section>
    </div>
  );
}

export default MomPage