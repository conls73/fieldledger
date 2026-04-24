import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { DashboardLayout } from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import InvoicesPage from './pages/InvoicesPage'
import NewInvoicePage from './pages/NewInvoicePage'
import ExpensesPage from './pages/ExpensesPage'
import IncomePage from './pages/IncomePage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Group (Dashboard) */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/invoices" element={<InvoicesPage />} />
          <Route path="/invoices/new" element={<NewInvoicePage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/recipes" element={<div className="p-8"><h1>Recipes Coming Soon</h1></div>} />
          <Route path="/reports/profit-loss" element={<div className="p-8"><h1>Reports Coming Soon</h1></div>} />
          <Route path="/settings" element={<div className="p-8"><h1>Settings Coming Soon</h1></div>} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
