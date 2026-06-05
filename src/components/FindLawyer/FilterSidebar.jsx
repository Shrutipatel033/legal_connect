const FilterSidebar = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-24">

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

        <select className="w-full border rounded-xl p-3">
          <option>All Languages</option>
          <option>Hindi</option>
          <option>English</option>
          <option>Urdu</option>
        </select>
      </div>

      {/* Gender */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">
          Gender
        </h3>

        <label className="flex gap-2 mb-2">
          <input type="radio" name="gender" />
          Male
        </label>

        <label className="flex gap-2">
          <input type="radio" name="gender" />
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
          <input type="checkbox" /> Available Today
        </label>

        <label className="block">
          <input type="checkbox" /> Online Consultation
        </label>
      </div>

    </div>
  );
};

export default FilterSidebar;