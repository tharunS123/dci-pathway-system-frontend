export type TrendPoint = [string, number]

export interface MomAnalysis {
  mom_name: string
  rows: number
  start: string | null
  end: string | null
  pos_total: number
  neg_total: number
  net_total: number
  pos_rate: number
  trend_dir: string
  best_week_label: string | null
  best_week_value: number | null
  worst_week_label: string | null
  worst_week_value: number | null
  top_themes: [string, number][]
  trend_points: TrendPoint[]
}

