import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Header from "./components/Header";
import DissmissHeader from "./components/DissmissHeader";
import Sidebar from "./components/sidebar/sidebar";










function App() {
 
  return (
<BrowserRouter>
<DissmissHeader/>
<Header/>
<Sidebar/>

<Routes>
  <Route path="/" element={<HomePage/>} />
</Routes>
</BrowserRouter>

 

  );
}

export default App;
