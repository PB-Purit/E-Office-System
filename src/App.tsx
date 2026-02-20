import { useNews } from './hooks/useNews'
import SummaryCards from './components/SummaryCards'
import NewsTable from './components/NewsTable'
import NewsFormModal from './components/modals/NewsFormModal'
import ConfirmModal from './components/modals/ConfirmModal'
import Toast from './components/ui/Toast'
import { PlusIcon } from './components/ui/Icons'

const PER_PAGE = 6

export default function App() {
  const {
    news, filtered, loading,
    modal, setModal, confirm, setConfirm,
    toast, setToast, search, setSearch,
    page, setPage, handleSave, handleStatusToggle, handleDelete,
  } = useNews()

  const paginated = filtered.slice((page-1)*PER_PAGE, page*PER_PAGE)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50">
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"/>
              <path d="M15 2v6h6M9 15h6M9 11h6M9 7h2"/>
            </svg>
          </div>
          <div>
            <p className="text-xs text-slate-500 leading-none">กรมการขนส่งทางราง</p>
            <p className="text-sm font-semibold text-slate-800 leading-tight">ระบบบริหารสำนักงานอัตโนมัติ (e-office)</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="mb-5 flex flex-col sm:flex-row sm:items-end gap-3">
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800">ข่าวประสัมพันธ์</h1>
            <p className="text-sm text-slate-500 mt-0.5">จัดการข่าวสารและประกาศจากกรมการขนส่งทางราง</p>
          </div>
          <div className="flex gap-2">
            <input value={search} onChange={e=>{setSearch(e.target.value);setPage(1)}}
              placeholder="🔍 ค้นหาข่าว..."
              className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:border-blue-400 w-44 sm:w-56"/>
            <button onClick={()=>setModal({mode:'create',item:null})}
              className="flex items-center gap-1.5 px-3 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium rounded-lg transition-colors shadow-sm whitespace-nowrap">
              <PlusIcon/> สร้างข่าว
            </button>
          </div>
        </div>

        <SummaryCards news={news} filteredCount={filtered.length}/>
        <NewsTable data={paginated} loading={loading} page={page} perPage={PER_PAGE} total={filtered.length}
          search={search} onPageChange={setPage}
          onView={item=>setModal({mode:'view',item})}
          onEdit={item=>setModal({mode:'edit',item})}
          onDelete={setConfirm} onToggleStatus={handleStatusToggle}/>
      </main>

      {modal && <NewsFormModal mode={modal.mode} item={modal.item} onClose={()=>setModal(null)} onSave={handleSave}/>}
      {confirm && <ConfirmModal item={confirm} onConfirm={handleDelete} onCancel={()=>setConfirm(null)}/>}
      {toast && <Toast msg={toast.msg} type={toast.type} onDone={()=>setToast(null)}/>}
    </div>
  )
}