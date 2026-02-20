interface Props { status: 0 | 1; onChange: () => void; disabled?: boolean }

export default function StatusToggle({ status, onChange, disabled = false }: Props) {
  return (
    <button onClick={onChange} disabled={disabled}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200
        ${status === 1 ? 'bg-emerald-500' : 'bg-slate-300'}
        ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}>
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow
        transition-transform duration-200 ${status === 1 ? 'translate-x-6' : 'translate-x-1'}`}/>
    </button>
  )
}