import SearchBar from "../FindLawyer/Searchbar";
import FilterSidebar from "../FindLawyer/FilterSidebar";
import LawyerCard from "../FindLawyer/LawyerCard";
import lawyers from "../../data/lawyerData";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [specialization, setSpecialization] = useState("");
  const [rating, setRating] = useState("");
  const [maxFee, setMaxFee] = useState(5000);
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
          lawyer.language.includes(language)) &&

        (gender === "" ||
          lawyer.gender === gender) &&

        (availability === "" ||
          lawyer.availability === availability) &&
        (specialization === "" ||
          lawyer.specialization === specialization)

        &&

        (rating === "" ||
          lawyer.rating >= Number(rating))

        &&

        lawyer.fee <= maxFee
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
  useEffect(() => {
    handleSearch();
  }, [
    search,
    category,
    city,
    court,
    language,
    gender,
    availability,
    sortBy,
    specialization,
    rating,
    maxFee
  ]);
  return (
    <section className="min-h-screen py-10 bg-gradient-to-br from-[#FAF9F6] via-white to-[#F8F4E8]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-[#111827]">
            Find Your Lawyer
          </h1>

          <p className="text-gray-500 mt-3 text-md">
            Search verified lawyers across India
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
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
        </motion.div>
        {/* Content */}
        <div className="grid lg:grid-cols-4 gap-8 mt-8">

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FilterSidebar
              specialization={specialization}
              setSpecialization={setSpecialization}
              language={language}
              setLanguage={setLanguage}
              gender={gender}
              setGender={setGender}
              availability={availability}
              setAvailability={setAvailability}
              rating={rating}
              setRating={setRating}
              maxFee={maxFee}
              setMaxFee={setMaxFee}
            />
          </motion.div>

          {/* Lawyers */}
          <div className="lg:col-span-3">

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">

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

            <motion.div layout className="grid gap-6">
              <AnimatePresence>
                {filteredLawyers.map((lawyer, index) => (
                  <motion.div
                    key={lawyer.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <LawyerCard lawyer={lawyer} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FindLawyerPage;