interface Props { page: number; total: number; perPage: number; onChange: (p: number) => void }

export default function Pagination({ page, total, perPage, onChange }: Props) {
  const pages = Math.ceil(total / perPage)
  if (pages <= 1) return null
  const items = ['«', '‹', ...Array.from({ length: pages }, (_, i) => i + 1), '›', '»']
  return (
    <div className="flex items-center gap-1 justify-center mt-4">
      {items.map((p, i) => {
        const isNum = typeof p === 'number', active = isNum && p === page
        const disabled = (!isNum && (p==='«'||p==='‹') && page===1) || (!isNum && (p==='›'||p==='»') && page===pages)
        const target = p==='«'?1:p==='‹'?page-1:p==='›'?page+1:p==='»'?pages:(p as number)
        return (
          <button key={i} disabled={disabled} onClick={() => !disabled && onChange(target)}
            className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors
              ${active?'bg-blue-600 text-white':disabled?'text-slate-300 cursor-not-allowed':'text-slate-600 hover:bg-slate-100'}`}>
            {p}
          </button>
        )
      })}
    </div>
  )
}