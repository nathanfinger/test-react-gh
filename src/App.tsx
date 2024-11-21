import { Route, Routes } from "react-router-dom";
import { MultiStepForm } from "./components/MultiStepForm";
import { NPSForm } from "./components/NPSForm/NPSForm";


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<MultiStepForm/>}/>
      <Route path="/nps-form">
        <Route path=":orderId" element={<NPSForm/>}/>
        <Route path="" element={<EmptyOrderID/>} />
      </Route>
    </Routes>
  )
}

const EmptyOrderID = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-error mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Please provide a valid Order ID
      </p>
    </div>
  </div>
  )
}
