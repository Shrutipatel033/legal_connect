
const ContactForm = () => {
  return (
    <section className="py-10">

      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="text-[#C9A227] font-semibold">
              Send Message
            </span>

            <h2 className="text-4xl font-bold text-[#111827] mt-4">
              Let's Discuss
              Your Legal Issue
            </h2>

            <p className="text-gray-500 mt-6 leading-8">
              Fill out the form and our team will contact
              you shortly. We ensure complete privacy and
              secure communication.
            </p>

          </div>

          <form className="bg-white rounded-[35px] p-8 shadow-xl">

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-200 rounded-xl p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-200 rounded-xl p-4"
              />

            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-200 rounded-xl p-4 mt-5"
            />

            <select className="w-full border border-gray-200 rounded-xl p-4 mt-5">

              <option>Select Legal Service</option>
              <option>Family Law</option>
              <option>Criminal Law</option>
              <option>Property Law</option>
              <option>Corporate Law</option>
              <option>Cyber Law</option>

            </select>

            <textarea
              rows="5"
              placeholder="Describe Your Legal Issue"
              className="w-full border border-gray-200 rounded-xl p-4 mt-5"
            ></textarea>

            <button
              type="submit"
              className="w-full mt-6 bg-[#111827] text-white py-4 rounded-xl font-semibold hover:bg-[#1F2937]"
            >
              Submit Request
            </button>

          </form>

        </div>

      </div>

    </section>

  );
};

export default ContactForm;