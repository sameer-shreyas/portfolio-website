import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will go here (e.g., sending form data to a server or email).
    alert('Thank you for reaching out! I will get back to you soon.');
  };

  return (
    <section className="bg-pattern text-gray-800 py-20 fade-in">
      <div className="container mx-auto px-4 lg:px-32">
        <h3 className="text-5xl font-extrabold text-center mb-10">Contact Me</h3>
        <p className="text-xl text-gray-600 text-center mb-12">
          Feel free to reach out to me for any queries or opportunities. I would love to hear from you!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-6">
                <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CV Download and Additional Info */}
          <div className="text-center lg:text-left">
            <h4 className="text-3xl font-semibold mb-6">Download My CV</h4>
            <p className="text-lg text-gray-700 mb-6">
              You can download a copy of my CV to know more about my experience, skills, and achievements.
            </p>
            <a
              href="Sameer_Shreyas_Resume.pdf"
              download
              className="inline-block bg-blue-600 text-white px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
