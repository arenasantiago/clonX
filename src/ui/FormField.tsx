type FormFieldProps = {
    id: string
    label: string
    type?: string
}


export default function FormField({id, label, type = 'text'}:FormFieldProps) {
  return (
    <div className="flex flex-col gap-1">
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type={type} className="rounded border border-gray-300 p-2"/>
    </div>
  )
}
