import {
  FaPlus,
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const clients = [
  {
    id: 1,
    name: "Amit Singh",
    email: "amit@gmail.com",
    city: "Lucknow",
    status: "Active",
  },
  {
    id: 2,
    name: "Neha Sharma",
    email: "neha@gmail.com",
    city: "Delhi",
    status: "Active",
  },
];

const Clients = () => {
  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-2xl font-bold">
            Client Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all registered clients
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg">
          <FaPlus />
          Add Client
        </button>

      </div>

      <div className="bg-white p-4 rounded-xl shadow mb-6">

        <div className="relative max-w-md">

          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search client..."
            className="w-full border rounded-lg pl-11 py-3"
          />

        </div>

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">City</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>

            {clients.map((client) => (
              <tr
                key={client.id}
                className="border-t"
              >
                <td className="px-6 py-4">
                  {client.name}
                </td>

                <td className="px-6 py-4">
                  {client.email}
                </td>

                <td className="px-6 py-4">
                  {client.city}
                </td>

                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {client.status}
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

export default Clients;