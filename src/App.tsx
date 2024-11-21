import { Route, Routes } from "react-router-dom";
import { MultiStepForm } from "./components/MultiStepForm";


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<MultiStepForm/>}/>
      <Route path="/nps-form" element={<>WIP - NPS Form</>}/>
    </Routes>
  )
}
