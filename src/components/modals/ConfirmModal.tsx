import { NewsItem } from '../../types/news'
import { WarnIcon } from '../ui/Icons'

interface Props { item: NewsItem; onConfirm: () => void; onCancel: () => void }

export default function ConfirmModal({ item, onConfirm, onCancel }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onCancel}/>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center animate-fadeUp">
        <div className="text-red-400 flex justify-center mb-3"><WarnIcon/></div>
        <h3 className="text-lg font-bold text-slate-800 mb-1">ยืนยันการลบ</h3>
        <p className="text-sm text-slate-500 mb-5">
          คุณต้องการลบข่าว{' '}
          <span className="font-semibold text-slate-700">
            "{item.NameNews.slice(0,30)}{item.NameNews.length>30?'...':''}"
          </span>{' '}ใช่หรือไม่?
        </p>
        <div className="flex gap-3 justify-center">
          <button onClick={onCancel} className="px-5 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50">ยกเลิก</button>
          <button onClick={onConfirm} className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium">ลบเลย</button>
        </div>
      </div>
    </div>
  )
}