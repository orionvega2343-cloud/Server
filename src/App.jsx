import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/layout/layout'
import Header from './components/Layout/header/header'
import HomePage from './pages/homepage/components/homepage/homepage'
import SelectMode from './pages/homepage/components/SelectMode/Selectmode'
import RulesPage from './pages/rulesPage/components/rulespage/rulespage'
import DescPage from './pages/descriptionpage/descriptionpage/desc'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/rules' element={<RulesPage />} />
          <Route path='/donat-description' element={<DescPage />} />
          <Route path='/profile' element={<div>Личный кабинет</div>} />
          <Route path='/contacts' element={<div>Контакты</div>} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
