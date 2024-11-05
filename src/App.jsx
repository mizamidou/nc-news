import { useState } from "react";
import "../src/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import ArticlePage from "../src/components/ArticlePage";
import UserForm from "../src/components/UserForm";
import HomePage from "../src/components/HomePage";

function App() {
  const [user, setUser] = useState([]);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/userform" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
