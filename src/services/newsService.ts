import { NewsItem, NewsFormData } from '../types/news'
import { MOCK_NEWS } from '../constants/mockData'

// Replace with real API calls:
// const BASE = import.meta.env.VITE_API_BASE_URL

let store: NewsItem[] = [...MOCK_NEWS]
let _nextId = 100

export const newsService = {
  async getAll(): Promise<NewsItem[]> {
    return new Promise(res => setTimeout(() => res([...store]), 800))
  },
  async create(form: NewsFormData): Promise<NewsItem> {
    const item: NewsItem = { ...form, NewsId: _nextId++, UpdatedDate: new Date().toISOString() }
    store = [item, ...store]
    return item
  },
  async update(id: number, form: NewsFormData): Promise<NewsItem> {
    store = store.map(n => n.NewsId === id ? { ...n, ...form, UpdatedDate: new Date().toISOString() } : n)
    return store.find(n => n.NewsId === id)!
  },
  async toggleStatus(id: number): Promise<NewsItem> {
    store = store.map(n => n.NewsId === id ? { ...n, Status: n.Status === 1 ? 0 : 1 } : n)
    return store.find(n => n.NewsId === id)!
  },
  async remove(id: number): Promise<void> {
    store = store.filter(n => n.NewsId !== id)
  },
}