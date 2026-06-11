const FilterSidebar = ({
  language,
  setLanguage,
  gender,
  setGender,
  availability,
  setAvailability,
  specialization,
  setSpecialization,
  rating,
  setRating,
  maxFee,
  setMaxFee,
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
            <input 
              type="radio" 
              name="specialization"
              value="Family Law"
              checked={specialization === "Family Law"}
              onChange={(e) => setSpecialization(e.target.value)}
            />
            Family Law
          </label>

          <label className="flex gap-2">
            <input 
              type="radio" 
              name="specialization"
              value="Criminal Law"
              checked={specialization === "Criminal Law"}
              onChange={(e) => setSpecialization(e.target.value)}
            />
            Criminal Law
          </label>

          <label className="flex gap-2">
            <input 
              type="radio" 
              name="specialization"
              value="Property Law"
              checked={specialization === "Property Law"}
              onChange={(e) => setSpecialization(e.target.value)}
            />
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
          value={maxFee}
          onChange={(e) => setMaxFee(Number(e.target.value))}
          className="w-full accent-[#C9A227]"
        />

        <div className="flex justify-between text-sm mt-2 font-medium">
          <span>₹500</span>
          <span>₹{maxFee}</span>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">
          Rating
        </h3>

        <label className="flex gap-2 mb-2">
          <input 
            type="radio" 
            name="rating"
            value="4"
            checked={rating === "4"}
            onChange={(e) => setRating(e.target.value)}
          /> 
          <span>⭐ 4+</span>
        </label>

        <label className="flex gap-2">
          <input 
            type="radio" 
            name="rating"
            value="4.5"
            checked={rating === "4.5"}
            onChange={(e) => setRating(e.target.value)}
          /> 
          <span>⭐ 4.5+</span>
        </label>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-semibold mb-3">
          Availability
        </h3>

        <label className="flex gap-2 mb-2">
          <input
            type="radio"
            name="availability"
            value="Available Today"
            checked={availability === "Available Today"}
            onChange={(e) => setAvailability(e.target.value)}
          />
          Available Today
        </label>

        <label className="flex gap-2">
          <input 
            type="radio"
            name="availability"
            value="Online Consultation"
            checked={availability === "Online Consultation"}
            onChange={(e) => setAvailability(e.target.value)}
          /> 
          Online Consultation
        </label>
      </div>

      <button
        onClick={() => {
          setLanguage("");
          setGender("");
          setAvailability("");
          setSpecialization("");
          setRating("");
          setMaxFee(5000);
        }}
        className="w-full mt-6 bg-[#111827] text-white py-3 rounded-xl"
      >
        Clear Filters
      </button>

    </div>
  );
};

export default FilterSidebar;