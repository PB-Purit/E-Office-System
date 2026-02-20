import { NewsItem } from '../types/news'
import StatusToggle from './ui/StatusToggle'
import Pagination from './ui/Pagination'
import { EyeIcon, EditIcon, TrashIcon } from './ui/Icons'

const fmtDate = (iso: string) => {
  const d = new Date(iso)
  return `${d.getDate().toString().padStart(2,'0')}/${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getFullYear()+543}`
}

interface Props {
  data: NewsItem[]; loading: boolean; page: number; perPage: number; total: number; search: string
  onPageChange: (p: number) => void; onView: (i: NewsItem) => void; onEdit: (i: NewsItem) => void
  onDelete: (i: NewsItem) => void; onToggleStatus: (i: NewsItem) => void
}

export default function NewsTable({ data,loading,page,perPage,total,search,onPageChange,onView,onEdit,onDelete,onToggleStatus }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase w-14">สถานะ</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase w-10">#</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase">ชื่อข่าว</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase hidden sm:table-cell">วันที่</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-slate-500 uppercase">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({length:4}).map((_,i) => (
                <tr key={i} className="border-b border-slate-100">
                  {[14,10,200,80,90].map((w,j) => (
                    <td key={j} className="px-4 py-4"><div className="h-4 rounded shimmer" style={{width:w}}/></td>
                  ))}
                </tr>
              ))
            ) : data.length === 0 ? (
              <tr><td colSpan={5} className="text-center py-16 text-slate-400">
                {search ? 'ไม่พบข่าวที่ค้นหา' : 'ยังไม่มีข่าว กด "สร้างข่าว" เพื่อเพิ่ม'}
              </td></tr>
            ) : data.map((item, idx) => (
              <tr key={item.NewsId} className="border-b border-slate-100 hover:bg-blue-50/40 transition-colors animate-fadeUp" style={{animationDelay:`${idx*50}ms`}}>
                <td className="px-4 py-3.5"><StatusToggle status={item.Status} onChange={()=>onToggleStatus(item)}/></td>
                <td className="px-4 py-3.5 text-slate-400 text-xs">{(page-1)*perPage+idx+1}</td>
                <td className="px-4 py-3.5">
                  <span className="font-medium text-slate-800 line-clamp-1">{item.NameNews}</span>
                  <span className="text-xs text-slate-400 sm:hidden">{fmtDate(item.UpdatedDate)}</span>
                </td>
                <td className="px-4 py-3.5 text-slate-500 text-xs hidden sm:table-cell whitespace-nowrap">{fmtDate(item.UpdatedDate)}</td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center justify-center gap-1.5">
                    {item.ButtonView===1 && <button onClick={()=>onView(item)} className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 flex items-center justify-center"><EyeIcon/></button>}
                    {item.ButtonEdit===1 && <button onClick={()=>onEdit(item)} className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 hover:bg-amber-200 flex items-center justify-center"><EditIcon/></button>}
                    {item.ButtonDelete===1 && <button onClick={()=>onDelete(item)} className="w-7 h-7 rounded-lg bg-red-100 text-red-500 hover:bg-red-200 flex items-center justify-center"><TrashIcon/></button>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!loading && total > perPage && (
        <div className="px-5 py-4 border-t border-slate-100">
          <Pagination page={page} total={total} perPage={perPage} onChange={onPageChange}/>
        </div>
      )}
      <div className="px-5 py-3 bg-slate-50 border-t border-slate-100">
        <p className="text-xs text-slate-400"><strong className="text-slate-500">API:</strong> ED-GetNews · ED-CreateNews · ED-UpdateNews · ED-DeleteNews · ED-UpdateStatusNews</p>
      </div>
    </div>
  )
}