import AddData  from "./component/mlbb";
import EditData from "./component/editData";
import ListData from "./component/history";
import { BrowserRouter as Router, Routes,  Route  } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<AddData/>}/>
        <Route path="/admin"element={<ListData/>}/>
        <Route path="/edit/:id"element={<EditData/>}/>
      </Routes>
    </Router>
  );
}

export default App;