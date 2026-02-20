import { useEffect } from 'react'
import { ToastState } from '../../types/news'

interface Props extends ToastState { onDone: () => void }
const BG   = { success: 'bg-emerald-600', error: 'bg-red-600', info: 'bg-blue-600' }
const ICON = { success: '✓', error: '✕', info: 'ℹ' }

export default function Toast({ msg, type, onDone }: Props) {
  useEffect(() => { const t = setTimeout(onDone, 2500); return () => clearTimeout(t) }, [])
  return (
    <div className={`fixed bottom-6 right-6 z-[100] ${BG[type]} text-white px-5 py-3 rounded-xl shadow-lg text-sm font-medium animate-fadeUp`}>
      {ICON[type]} {msg}
    </div>
  )
}