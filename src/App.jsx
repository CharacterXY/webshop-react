
import MainComponent from './Components/MainComponent/MainComponent';
import  AppWrapperComponent  from './Components/AppWrapper/AppWrapperComponent';
import PageNotFound from './Components/Page/PageNotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 
  return (
<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<AppWrapperComponent />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
  </>
  
   
 
  )
}

export default App
