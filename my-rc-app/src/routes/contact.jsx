import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Ucan</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have questions or need support? We're here to help you on your learning journey.
        </p>
      </section>


      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white shadow p-10 rounded-2xl">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
            Get in Touch
          </h2>


          <form className="grid gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-blue-600 focus:ring-2 outline-none"
              />
            </div>


            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-blue-600 focus:ring-2 outline-none"
              />
            </div>


            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-blue-600 focus:ring-2 outline-none"
              ></textarea>
            </div>


            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>


      {/* Contact Info */}
      <section className="bg-blue-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Other Ways to Reach Us</h2>


        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">ahmed4014e@gmail.com</p>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+968 9575 9446</p>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600">Muscat, Oman</p>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-10">
        © {new Date().getFullYear()} Ucan — Empowering Learning for Everyone.
      </footer>
    </div>
  );
}
