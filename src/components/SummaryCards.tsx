import { NewsItem } from '../types/news'

interface Props { news: NewsItem[]; filteredCount: number }

export default function SummaryCards({ news, filteredCount }: Props) {
  const cards = [
    { label: 'ทั้งหมด',    value: news.length,                           color: 'blue'    },
    { label: 'เปิดใช้งาน', value: news.filter(n => n.Status === 1).length, color: 'emerald' },
    { label: 'ปิดใช้งาน',  value: news.filter(n => n.Status === 0).length, color: 'slate'   },
    { label: 'ผลค้นหา',   value: filteredCount,                           color: 'indigo'  },
  ]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
      {cards.map(c => (
        <div key={c.label} className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-sm">
          <p className="text-xs text-slate-500">{c.label}</p>
          <p className={`text-2xl font-bold mt-0.5 text-${c.color}-600`}>{c.value}</p>
        </div>
      ))}
    </div>
  )
}