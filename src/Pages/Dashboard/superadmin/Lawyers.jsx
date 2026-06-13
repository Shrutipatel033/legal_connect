import {
  FaPlus,
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const lawyers = [
  {
    id: 1,
    name: "Rahul Sharma",
    specialization: "Family Law",
    experience: "8 Years",
    city: "Lucknow",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Verma",
    specialization: "Criminal Law",
    experience: "10 Years",
    city: "Delhi",
    status: "Active",
  },
];

const Lawyers = () => {
  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-2xl font-bold">
            Lawyer Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all registered lawyers
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg">
          <FaPlus />
          Add Lawyer
        </button>

      </div>

      <div className="bg-white p-4 rounded-xl shadow mb-6">

        <div className="relative max-w-md">

          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search lawyer..."
            className="w-full border rounded-lg pl-11 py-3"
          />

        </div>

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Specialization</th>
              <th className="px-6 py-4 text-left">Experience</th>
              <th className="px-6 py-4 text-left">City</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>

            {lawyers.map((lawyer) => (
              <tr
                key={lawyer.id}
                className="border-t"
              >
                <td className="px-6 py-4">
                  {lawyer.name}
                </td>

                <td className="px-6 py-4">
                  {lawyer.specialization}
                </td>

                <td className="px-6 py-4">
                  {lawyer.experience}
                </td>

                <td className="px-6 py-4">
                  {lawyer.city}
                </td>

                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {lawyer.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-4">

                    <button>
                      <FaEye className="text-green-600" />
                    </button>

                    <button>
                      <FaEdit className="text-blue-600" />
                    </button>

                    <button>
                      <FaTrash className="text-red-600" />
                    </button>

                  </div>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Lawyers;