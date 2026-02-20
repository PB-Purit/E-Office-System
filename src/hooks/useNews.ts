import { useState, useEffect, useCallback } from 'react'
import { NewsItem, NewsFormData, ModalState, ToastState } from '../types/news'
import { newsService } from '../services/newsService'

export function useNews() {
  const [news, setNews]       = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal]     = useState<ModalState | null>(null)
  const [confirm, setConfirm] = useState<NewsItem | null>(null)
  const [toast, setToast]     = useState<ToastState | null>(null)
  const [search, setSearch]   = useState('')
  const [page, setPage]       = useState(1)

  const showToast = (msg: string, type: ToastState['type'] = 'success') => setToast({ msg, type })

  const load = useCallback(async () => {
    setLoading(true)
    const data = await newsService.getAll()
    setNews(data)
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  const handleCreate = async (form: NewsFormData) => {
    const item = await newsService.create(form)
    setNews(p => [item, ...p])
    setModal(null); setPage(1)
    showToast('สร้างข่าวใหม่เรียบร้อยแล้ว')
  }

  const handleUpdate = async (form: NewsFormData) => {
    if (!modal?.item) return
    const updated = await newsService.update(modal.item.NewsId, form)
    setNews(p => p.map(n => n.NewsId === updated.NewsId ? updated : n))
    setModal(null)
    showToast('อัพเดทข่าวเรียบร้อยแล้ว', 'info')
  }

  const handleStatusToggle = async (item: NewsItem) => {
    const updated = await newsService.toggleStatus(item.NewsId)
    setNews(p => p.map(n => n.NewsId === updated.NewsId ? updated : n))
    showToast(`เปลี่ยนสถานะ "${item.NameNews.slice(0, 20)}..." เรียบร้อย`)
  }

  const handleDelete = async () => {
    if (!confirm) return
    await newsService.remove(confirm.NewsId)
    setNews(p => p.filter(n => n.NewsId !== confirm.NewsId))
    setConfirm(null)
    showToast('ลบข่าวเรียบร้อยแล้ว', 'error')
  }

  const handleSave = (form: NewsFormData) => {
    if (modal?.mode === 'create') handleCreate(form)
    else handleUpdate(form)
  }

  const filtered = news.filter(n =>
    n.NameNews.toLowerCase().includes(search.toLowerCase()) ||
    n.Detail.toLowerCase().includes(search.toLowerCase())
  )

  return {
    news, filtered, loading,
    modal, setModal,
    confirm, setConfirm,
    toast, setToast,
    search, setSearch,
    page, setPage,
    handleSave, handleStatusToggle, handleDelete,
  }
}