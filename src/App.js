import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import Characters from "./components/Characters";
import Search from "./components/Search";

export default function App() {
  const [loading, setloading] = useState(true);
  const [items, setitems] = useState([]);
  const [query, setquery] = useState("");

  useEffect(() => {
    const getdata = async () => {
      const response = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setitems(response.data);
      setloading(false);
    };
    getdata();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search query={setquery} />
      <Characters loading={loading} items={items} />
    </div>
  );
}
