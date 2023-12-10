import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";

const App = () => {
  const handleAddNote = (note) => {
    // Lakukan sesuatu dengan data catatan yang ditambahkan, misalnya menyimpan ke backend
    console.log(note);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4">
          <ul className="flex">
            <li className="mr-4">
              <Link to="/" className="text-blue-500 hover:text-blue-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/add" className="text-blue-500 hover:text-blue-700">
                Tambah Catatan
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<AddNote onAddNote={handleAddNote} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
