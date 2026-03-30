import { useState } from "react";
import dramas from "../data/dramas";
import DramaCard from "../components/DramaCard";
import Header from "../components/Header";

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = dramas.filter(d =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="container">
        <input
          className="search"
          placeholder="Search drama..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid">
          {filtered.map(drama => (
            <DramaCard key={drama.slug} drama={drama} />
          ))}
        </div>
      </div>
    </>
  );
}
