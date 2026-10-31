import { Outlet } from 'react-router'
import Header from './Header'

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main className="mx-auto min-h-[calc(100vh-4rem)] max-w-2xl border-x border-slate-200 bg-white sm:min-h-[calc(100vh-4rem)]">
            <Outlet />
        </main>
    </div>
  )
}
