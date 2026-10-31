
export default function ComposeTweetPage() {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
     event.preventDefault();
    }
  return (
    <section className="p-4">
      <h1 className="mb-4 text-2x1 font-bold">Compose tweet</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="content">What is happening?</label>
        <textarea 
        id="content"
        name="content"
        rows={2}
        className="rounded border border-gray-300 p-2"
         />
      </form>
      <button type= "submit" className="self-end rounded bg-black px-4 py-2 text-white">
        Publicar
      </button>
    </section>
  )
}
