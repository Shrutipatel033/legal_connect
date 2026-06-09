const FilterSidebar = ({
  language,
  setLanguage,
  gender,
  setGender,
  availability,
  setAvailability,
}) => {
  return (
    <div className="bg-white rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-6 sticky top-24">
      <h2 className="text-2xl font-bold mb-6">
        Filters
      </h2>

      {/* Specialization */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">
          Specialization
        </h3>

        <div className="space-y-2">
          <label className="flex gap-2">
            <input type="checkbox" />
            Family Law
          </label>

          <label className="flex gap-2">
            <input type="checkbox" />
            Criminal Law
          </label>

          <label className="flex gap-2">
            <input type="checkbox" />
            Property Law
          </label>
        </div>
      </div>

      {/* Language */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">
          Language
        </h3>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full border rounded-xl p-3"
        >
          <option value="">All Languages</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
        </select>
      </div>

      {/* Gender */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">
          Gender
        </h3>

        <label className="flex gap-2 mb-2">
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>

        <label className="flex gap-2">
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
      </div>

      {/* Fee */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">
          Consultation Fee
        </h3>

        <input
          type="range"
          min="500"
          max="5000"
          className="w-full"
        />

        <div className="flex justify-between text-sm mt-2">
          <span>₹500</span>
          <span>₹5000</span>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">
          Rating
        </h3>

        <label className="block">
          <input type="checkbox" /> ⭐ 4+
        </label>

        <label className="block">
          <input type="checkbox" /> ⭐ 4.5+
        </label>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-semibold mb-3">
          Availability
        </h3>

        <label className="block">
          <input
            type="radio"
            name="availability"
            value="Available Today"
            checked={availability === "Available Today"}
            onChange={(e) => setAvailability(e.target.value)}
          />
          Available Today

        </label>

        <label className="block">
          <input type="checkbox" /> Online Consultation
        </label>
      </div><button
        onClick={() => {
          setLanguage("");
          setGender("");
          setAvailability("");
        }}
        className="w-full mt-6 bg-[#111827] text-white py-3 rounded-xl"
      >
        Clear Filters
      </button>

    </div>
  );
};

export default FilterSidebar;