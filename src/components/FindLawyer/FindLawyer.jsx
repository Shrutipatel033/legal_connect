import SearchBar from "../FindLawyer/Searchbar";
import FilterSidebar from "../FindLawyer/FilterSidebar";
import LawyerCard from "../FindLawyer/LawyerCard";
import lawyers from "../FindLawyer/lawyerData";
import { useState } from "react";
const FindLawyerPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [court, setCourt] = useState("");
  const [language, setLanguage] = useState("");
  const [gender, setGender] = useState("");
  const [availability, setAvailability] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filteredLawyers, setFilteredLawyers] = useState(lawyers);
  const handleSearch = () => {
    let result = lawyers.filter((lawyer) => {
      return (
        (search === "" ||
          lawyer.name.toLowerCase().includes(search.toLowerCase())) &&

        (category === "" ||
          lawyer.specialization === category) &&

        (city === "" ||
          lawyer.city === city) &&

        (court === "" ||
          lawyer.court === court) &&

        (language === "" ||
          lawyer.language === language) &&

        (gender === "" ||
          lawyer.gender === gender) &&

        (availability === "" ||
          lawyer.availability === availability)
      );
    });

    // Sorting
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "fee-low") {
      result.sort((a, b) => a.fee - b.fee);
    }

    if (sortBy === "fee-high") {
      result.sort((a, b) => b.fee - a.fee);
    }

    if (sortBy === "experience") {
      result.sort((a, b) => b.experience - a.experience);
    }

    setFilteredLawyers(result);
  };
  return (
    <section className="min-h-screen py-10 bg-gradient-to-br from-[#FAF9F6] via-white to-[#F8F4E8]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Page Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-[#111827]">
            Find Your Lawyer
          </h1>

          <p className="text-gray-500 mt-3">
            Search verified lawyers across India
          </p>
        </div>
        <SearchBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          city={city}
          setCity={setCity}
          court={court}
          setCourt={setCourt}
          handleSearch={handleSearch}
        />
        {/* Content */}
        <div className="grid lg:grid-cols-4 gap-8 mt-8">

          {/* Filters */}
          <div>
            <FilterSidebar />
          </div>

          {/* Lawyers */}
          <div className="lg:col-span-3">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">
                {filteredLawyers.length} Lawyers Found
              </h2>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-xl px-4 py-3"
              >
                <option value="">Sort By</option>

                <option value="rating">
                  Highest Rating
                </option>

                <option value="fee-low">
                  Lowest Fee
                </option>

                <option value="fee-high">
                  Highest Fee
                </option>

                <option value="experience">
                  Most Experienced
                </option>
              </select>

            </div>

            <div className="grid gap-6">

              {filteredLawyers.map((lawyer) => (
                <LawyerCard
                  key={lawyer.id}
                  lawyer={lawyer}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FindLawyerPage;