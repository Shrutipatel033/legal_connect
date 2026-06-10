import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AnonymousConsultation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: "",
    budget: "",
    language: "",
    issue: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const request = {
      id: `ANON-${Math.floor(Math.random() * 10000)}`,
      ...formData,
    };

    localStorage.setItem(
      "anonymousRequest",
      JSON.stringify(request)
    );
    localStorage.setItem("anonymousMode", "true");

    navigate("/anonymous-success");
  };

  return (
    <section className="min-h-screen bg-[#FAF9F6] py-16">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-lg">

        <h1 className="text-4xl font-bold mb-3">
          Anonymous Consultation
        </h1>

        <p className="text-gray-500 mb-8">
          Submit your legal issue without revealing your identity.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <select
            className="w-full border rounded-xl p-4"
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
          >
            <option>Select Category</option>
            <option>Family Law</option>
            <option>Criminal Law</option>
            <option>Property Law</option>
            <option>Corporate Law</option>
          </select>

          <input
            type="number"
            placeholder="Budget"
            className="w-full border rounded-xl p-4"
            onChange={(e) =>
              setFormData({
                ...formData,
                budget: e.target.value,
              })
            }
          />

          <select
            className="w-full border rounded-xl p-4"
            onChange={(e) =>
              setFormData({
                ...formData,
                language: e.target.value,
              })
            }
          >
            <option>Select Language</option>
            <option>Hindi</option>
            <option>English</option>
          </select>

          <textarea
            rows="5"
            placeholder="Describe your issue"
            className="w-full border rounded-xl p-4"
            onChange={(e) =>
              setFormData({
                ...formData,
                issue: e.target.value,
              })
            }
          />

          <button
            type="submit"
            className="w-full bg-[#111827] text-white py-4 rounded-xl"
          >
            Submit Anonymous Request
          </button>

        </form>

      </div>
    </section>
  );
};

export default AnonymousConsultation;