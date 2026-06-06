import { FaSearch } from "react-icons/fa";

const SearchBar = ({
  search,
  setSearch,
  category,
  setCategory,
  city,
  setCity,
  court,
  setCourt,
  handleSearch,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Lawyer..."
          className="w-full border border-gray-200 rounded-xl p-4"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-200 rounded-xl p-4"
        >
          <option value="">Practice Area</option>
          <option value="Family Law">Family Law</option>
          <option value="Criminal Law">Criminal Law</option>
          <option value="Property Law">Property Law</option>
          <option value="Corporate Law">Corporate Law</option>
          <option value="Tax Law">Tax Law</option>
          <option value="Cyber Crime">Cyber Crime</option>
          <option value="Labour Law">Labour Law</option>
          <option value="Divorce">Divorce</option>
        </select>

        {/* City */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full border border-gray-200 rounded-xl p-4"
        >
          <option value="">City</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
        </select>

        {/* Court */}
        <select
          value={court}
          onChange={(e) => setCourt(e.target.value)}
          className="w-full border border-gray-200 rounded-xl p-4"
        >
          <option value="">Court</option>
          <option value="Supreme Court">Supreme Court</option>
          <option value="High Court">High Court</option>
          <option value="District Court">District Court</option>
          <option value="Family Court">Family Court</option>
        </select>

        {/* Button */}
        <button
          onClick={handleSearch}
          className="bg-[#111827] text-white rounded-xl flex items-center justify-center gap-2 font-semibold"
        >
          <FaSearch />
          Search
        </button>

      </div>

    </div>
  );
};

export default SearchBar;