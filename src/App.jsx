import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/layout/layout'
import HomePage from './pages/homepage/components/homepage/homepage'
import RulesPage from './pages/rulesPage/components/rulespage/rulespage'
import DescPage from './pages/descriptionpage/descriptionpage/desc'
import AccountLayout from './pages/accountpage/accountlayout/accountLayout'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/rules' element={<RulesPage />} />
          <Route path='/donat-description' element={<DescPage />} />
          <Route path='/profile' element={<AccountLayout />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
