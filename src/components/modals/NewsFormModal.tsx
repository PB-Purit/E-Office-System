import { useState } from 'react'
import { ModalMode, NewsItem, NewsFormData } from '../../types/news'
import { EMPTY_FORM } from '../../constants/mockData'
import { CloseIcon } from '../ui/Icons'
import StatusToggle from '../ui/StatusToggle'

interface Props { mode: ModalMode; item: NewsItem | null; onClose: () => void; onSave: (f: NewsFormData) => void }

export default function NewsFormModal({ mode, item, onClose, onSave }: Props) {
  const [form, setForm] = useState<NewsFormData>(mode === 'create' ? EMPTY_FORM : { ...item! })
  const [errors, setErrors] = useState<Partial<Record<keyof NewsFormData, string>>>({})
  const readOnly = mode === 'view'
  const title = mode==='create'?'สร้างข่าวใหม่':mode==='edit'?'แก้ไขข่าว':'รายละเอียดข่าว'
  const headerBg = mode==='create'?'bg-emerald-50':mode==='edit'?'bg-amber-50':'bg-blue-50'

  const validate = () => {
    const e: typeof errors = {}
    if (!form.NameNews.trim()) e.NameNews = 'กรุณากรอกชื่อข่าว'
    if (!form.Detail.trim())   e.Detail   = 'กรุณากรอกเนื้อหาข่าว'
    setErrors(e); return Object.keys(e).length === 0
  }
  const set = <K extends keyof NewsFormData>(k: K, v: NewsFormData[K]) => {
    setForm(p => ({ ...p, [k]: v })); setErrors(p => ({ ...p, [k]: undefined }))
  }
  const handleSubmit = () => { if (readOnly) { onClose(); return }; if (validate()) onSave(form) }
  const inputCls = (k: keyof NewsFormData) =>
    `w-full rounded-lg border px-3 py-2.5 text-sm text-slate-800 transition-colors focus:outline-none
    ${errors[k]?'border-red-400 bg-red-50':'border-slate-200 bg-slate-50 focus:border-blue-400 focus:bg-white'}
    ${readOnly?'cursor-default':''}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}/>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-fadeUp">
        <div className={`flex items-center justify-between px-6 py-4 border-b border-slate-100 rounded-t-2xl ${headerBg}`}>
          <h3 className="text-base font-bold text-slate-700">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600"><CloseIcon/></button>
        </div>
        <div className="px-6 py-5 space-y-4 max-h-[65vh] overflow-y-auto">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">ชื่อข่าว <span className="text-red-400">*</span></label>
            <input value={form.NameNews} readOnly={readOnly} onChange={e=>set('NameNews',e.target.value)} className={inputCls('NameNews')} placeholder="กรอกชื่อข่าว..."/>
            {errors.NameNews && <p className="text-xs text-red-500 mt-1">{errors.NameNews}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">เนื้อหา <span className="text-red-400">*</span></label>
            <textarea value={form.Detail} readOnly={readOnly} rows={4} onChange={e=>set('Detail',e.target.value)} className={`${inputCls('Detail')} resize-none`} placeholder="กรอกเนื้อหาข่าว..."/>
            {errors.Detail && <p className="text-xs text-red-500 mt-1">{errors.Detail}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-2">สถานะ</label>
            <div className="flex items-center gap-3">
              <StatusToggle status={form.Status} onChange={()=>!readOnly&&set('Status',form.Status===1?0:1)} disabled={readOnly}/>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${form.Status===1?'bg-emerald-100 text-emerald-700':'bg-slate-100 text-slate-500'}`}>
                {form.Status===1?'เปิดใช้งาน':'ปิดใช้งาน'}
              </span>
            </div>
          </div>
          {!readOnly && (
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">สิทธิ์การแสดงปุ่ม</label>
              <div className="grid grid-cols-3 gap-2">
                {([['ButtonView','👁 ดู'],['ButtonEdit','✏️ แก้ไข'],['ButtonDelete','🗑 ลบ']] as const).map(([k,lbl])=>(
                  <label key={k} className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer ${form[k]===1?'border-blue-300 bg-blue-50':'border-slate-200 bg-white'}`}>
                    <input type="checkbox" className="accent-blue-600" checked={form[k]===1} onChange={e=>set(k,e.target.checked?1:0)}/>
                    <span className="text-xs font-medium text-slate-700">{lbl}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50">ยกเลิก</button>
          <button onClick={handleSubmit} className={`px-5 py-2 rounded-lg text-white text-sm font-medium shadow-sm ${mode==='create'?'bg-emerald-500 hover:bg-emerald-600':mode==='edit'?'bg-amber-500 hover:bg-amber-600':'bg-blue-600 hover:bg-blue-700'}`}>
            {mode==='create'?'💾 บันทึก':mode==='edit'?'💾 อัพเดท':'ปิด'}
          </button>
        </div>
      </div>
    </div>
  )
}