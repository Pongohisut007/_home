import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Kube } from "./pages/Kube"
import { Docker } from "./pages/Docker"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/kube" element={<Kube />} />
        <Route path="/Docker" element={<Docker />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
