"use client";

import { useState } from "react";
import { vacancies } from "../data/vacancies";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const Filters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const filteredVacancies = vacancies.filter((vacancy) => {
    const matchesSearch = vacancy.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category && category !== "all" ? vacancy.category === category : true;
    const matchesLocation = location && location !== "all" ? vacancy.location === location : true;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* ძებნისა და ფილტრების სექცია */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* სერჩი */}
        <Input
          type="text"
          placeholder="მოძებნე ვაკანსია..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-white border-2 border-blue-900 py-5"
        />

        {/* კატეგორია */}
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full md:w-48 bg-white border-2 border-blue-900 py-5">
            <SelectValue placeholder="ყველა კატეგორია" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">ყველა კატეგორია</SelectItem>
            <SelectItem value="IT">IT</SelectItem>
            <SelectItem value="მარკეტინგი">მარკეტინგი</SelectItem>
            <SelectItem value="მენეჯმენტი">მენეჯმენტი</SelectItem>
            <SelectItem value="სერვისი">სერვისი</SelectItem>
            <SelectItem value="გაყიდვები">გაყიდვები</SelectItem>
            <SelectItem value="ფინანსები">ფინანსები</SelectItem>
          </SelectContent>
        </Select>

        {/* ლოკაცია */}
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="w-full md:w-48 bg-white border-2 border-blue-900 py-5">
            <SelectValue placeholder="ყველა ლოკაცია" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">ყველა ლოკაცია</SelectItem>
            <SelectItem value="თბილისი">თბილისი</SelectItem>
            <SelectItem value="ბათუმი">ბათუმი</SelectItem>
            <SelectItem value="ქუთაისი">ქუთაისი</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* შედეგები */}
      <div className="space-y-4">
        {filteredVacancies.length > 0 ? (
          filteredVacancies.map((item) => (
            <div 
              key={item.id} 
              className="p-4 border-2 border-blue-900 rounded-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className={`font-bold text-lg ${
                    item.isActive ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm mt-1 ${
                    item.isActive ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {item.category} — {item.location}
                  </p>
                  <p className={`text-sm mt-2 ${
                    item.isActive ? 'text-gray-700' : 'text-gray-400'
                  }`}>
                    {item.description}
                  </p>
                </div>
                
                {/* სტატუსის ბეჯი */}
                <span className={`ml-4 px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                  item.isActive 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {item.isActive ? 'აქტიური' : 'დახურული'}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            ვაკანსია ვერ მოიძებნა
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;