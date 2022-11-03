import './App.css';
import BookForm from './Components/BookForm';
import Read from "./Components/read"
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          {" "}
          <Link to="/read">List of Books</Link>
        </nav>
        <Routes>
          <Route path="/" element={<BookForm />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </Router>
    </div>

  );
}



export default App;
