"use client";

import { useState } from "react";
import { vacancies } from "../data/vacancies";

const Filters = () => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const filteredVacancies = vacancies.filter((vacancy) => {
    return (
      (category ? vacancy.category === category : true) &&
      (location ? vacancy.location === location : true)
    );
  });

  return (
    <div className="w-full p-4">
      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        <option value="IT">IT</option>
        <option value="Marketing">Marketing</option>
        <option value="Management">Management</option>
        <option value="Service">Service</option>
      </select>

      {/* Location Filter */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded ml-3"
      >
        <option value="">All Locations</option>
        <option value="Tbilisi">Tbilisi</option>
        <option value="Batumi">Batumi</option>
        <option value="Kutaisi">Kutaisi</option>
      </select>

      {/* Result */}
      <div className="mt-5 space-y-3">
        {filteredVacancies.map((item) => (
          <div key={item.id} className="p-3 border rounded">
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.category} — {item.location}</p>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;