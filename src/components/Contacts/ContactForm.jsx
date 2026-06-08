const ContactForm = () => {
  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-[35px] shadow-xl p-10">

          <h2 className="text-4xl font-bold text-center text-[#111827]">
            Send Us A Message
          </h2>

          <p className="text-center text-gray-500 mt-3">
            Our team will get back to you as soon as possible.
          </p>

          <form className="mt-10 space-y-5">

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Full Name"
                className="border rounded-xl p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-xl p-4"
              />

            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-xl p-4"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full border rounded-xl p-4"
            ></textarea>

            <button className="w-full bg-[#111827] text-white py-4 rounded-xl font-semibold">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default ContactForm;