import React, { useState, useEffect } from "react";

export default function Search({ query }) {
  const [input, setinput] = useState("");
  const handlechange = (e) => {
    setinput(e.target.value);
    query(e.target.value);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          autoFocus
          placeholder="search"
          value={input}
          onChange={handlechange}
        />
      </form>
    </section>
  );
}
