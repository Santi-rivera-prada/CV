import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '@/pages'
import { Proyects } from '@/pages'
import { Certificado } from '@/pages'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/P" element={<Proyects/>}/>
      <Route path='/c' element={<Certificado/>}/>
      
    </Routes>
  )
}
export default RoutesIndex 