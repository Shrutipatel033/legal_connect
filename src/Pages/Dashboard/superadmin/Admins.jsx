import { FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa";

const admins = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Super Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 3,
    name: "David Wilson",
    email: "david@example.com",
    role: "Moderator",
    status: "Inactive",
  },
];

const Admins = () => {
  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Admin Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all admin users and permissions
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition">
          <FaPlus />
          Add Admin
        </button>

      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">

        <div className="relative max-w-md">

          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search admins..."
            className="w-full border rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-4">Name</th>
              <th className="text-left px-6 py-4">Email</th>
              <th className="text-left px-6 py-4">Role</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-center px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>

            {admins.map((admin) => (
              <tr
                key={admin.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium">
                  {admin.name}
                </td>

                <td className="px-6 py-4">
                  {admin.email}
                </td>

                <td className="px-6 py-4">
                  {admin.role}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm
                    ${admin.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                      }`}
                  >
                    {admin.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">

                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEdit />
                    </button>

                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
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

export default Admins;