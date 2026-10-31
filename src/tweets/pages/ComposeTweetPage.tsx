
export default function ComposeTweetPage() {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
     event.preventDefault();
    }
  return (
    <section className="p-4 sm:p-6">
      <h1 className="mb-5 text-xl font-extrabold sm:text-2xl">Compose tweet</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="content" className="font-semibold text-slate-700">What is happening?</label>
        <textarea 
        id="content"
        name="content"
        rows={2}
        className="min-h-32 resize-y rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
        placeholder="Share what is happening"
         />
      </form>
      <button type= "submit" className="mt-4 ml-auto flex min-h-11 items-center rounded-full bg-sky-500 px-5 font-bold text-white shadow-sm transition-all hover:bg-sky-600 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 disabled:opacity-50">
        Publicar
      </button>
    </section>
  )
}
