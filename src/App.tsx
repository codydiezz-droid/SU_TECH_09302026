import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Landing } from '@/pages/Landing'

// The landing page loads on its own. Every other page (dashboard, charts,
// sign-in) is downloaded only when someone opens it, so the first visit is fast
// and the landing page does not depend on the Supabase client.
const Dashboard = lazy(() => import('@/pages/Dashboard').then((m) => ({ default: m.Dashboard })))
const Demo = lazy(() => import('@/pages/Demo').then((m) => ({ default: m.Demo })))
const DashboardAnalytics = lazy(() => import('@/pages/DashboardAnalytics').then((m) => ({ default: m.DashboardAnalytics })))
const DashboardProducts = lazy(() => import('@/pages/DashboardProducts').then((m) => ({ default: m.DashboardProducts })))
const DashboardSettings = lazy(() => import('@/pages/DashboardSettings').then((m) => ({ default: m.DashboardSettings })))
const DashboardTest = lazy(() => import('@/pages/DashboardTest').then((m) => ({ default: m.DashboardTest })))
const Login = lazy(() => import('@/pages/Login').then((m) => ({ default: m.Login })))
const Monitoring = lazy(() => import('@/pages/Monitoring').then((m) => ({ default: m.Monitoring })))
const Placeholder = lazy(() => import('@/pages/Placeholder').then((m) => ({ default: m.Placeholder })))
const Register = lazy(() => import('@/pages/Register').then((m) => ({ default: m.Register })))
const ReviewQueue = lazy(() => import('@/pages/ReviewQueue').then((m) => ({ default: m.ReviewQueue })))
const Setup = lazy(() => import('@/pages/Setup').then((m) => ({ default: m.Setup })))

function App() {
  return (
    <Suspense fallback={<div role="status" className="p-8 text-secondary">Loading…</div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/monitoring" element={<Monitoring />} />
        <Route path="/dashboard/review" element={<ReviewQueue />} />
        <Route path="/dashboard/products" element={<DashboardProducts />} />
        <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
        <Route path="/dashboard/settings" element={<DashboardSettings />} />
        <Route path="/dashboard/test" element={<DashboardTest />} />
        <Route path="*" element={<Placeholder title="Not found" slice="-" />} />
      </Routes>
    </Suspense>
  )
}

export default App
