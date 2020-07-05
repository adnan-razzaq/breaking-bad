import React from "react";
import Character from "./Character";

export default function Characters({ items, loading }) {
  return loading ? (
    <h1>loadinggg</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <Character key={item.char_id} {...item} />
      ))}
    </section>
  );
}
