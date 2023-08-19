import logo from "./logo.svg";
import "./App.css";
import Navbar from "./molecules/NavBar/Navbar";
import PostPage from "./molecules/postpage/PostPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PostPage/>
    </div>
  );
}

export default App;
