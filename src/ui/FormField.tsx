type FormFieldProps = {
    id: string
    label: string
    type?: string
}


export default function FormField({id, label, type = 'text'}:FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="text-sm font-semibold text-slate-700">{label}</label>
        <input id={id} name={id} type={type} className="min-h-11 rounded-xl border border-slate-300 bg-white px-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"/>
    </div>
  )
}
