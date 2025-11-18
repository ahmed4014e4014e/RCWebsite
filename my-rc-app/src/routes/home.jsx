import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Ucan</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your gateway to practical, industry-ready tech skills. Learn, build, and grow with a platform designed for future innovators.
        </p>
        <button className="mt-8 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>


      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Why Choose Ucan?</h2>


        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-xl font-bold mb-3">Expert-Led Courses</h3>
            <p className="text-gray-600">Learn from experienced professionals and gain real-world skills.</p>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-xl font-bold mb-3">Hands-On Projects</h3>
            <p className="text-gray-600">Work on real tasks that help you build a strong portfolio.</p>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-xl font-bold mb-3">Career Support</h3>
            <p className="text-gray-600">Get guidance, mentorship, and job preparation assistance.</p>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="bg-blue-50 py-20 text-center px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Start Your Learning Journey Today!</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you're a beginner or looking to upskill, Ucan provides the tools and resources to help you succeed.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition">
          Join Now
        </button>
      </section>


      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-10">
        © {new Date().getFullYear()} Ucan — Empowering Learning for Everyone.
      </footer>
    </div>
  )
}
