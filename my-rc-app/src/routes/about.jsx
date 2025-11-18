import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Ucan</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Empowering learners with practical, industry‑ready skills through a modern and interactive learning experience.
        </p>
      </section>


      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          We aim to bridge the gap between academic learning and real‑world job requirements by offering curated courses,
          hands‑on projects, and personalized mentorship. Our platform helps students and professionals gain the skills
          they need to thrive in the tech industry.
        </p>
      </section>


      {/* Values Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">Our Core Values</h2>


        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">We continuously improve our platform to provide a modern and dynamic learning experience.</p>
          </div>


          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
            <p className="text-gray-600">We ensure that high‑quality education is accessible to everyone, anywhere.</p>
          </div>


          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">We foster a strong community where learners can collaborate, share knowledge, and grow together.</p>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Our Team</h2>
        <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
          Our team consists of passionate educators, industry experts, and developers dedicated to transforming the way
          people learn and upskill.
        </p>
      </section>


      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-10">
        © {new Date().getFullYear()} Ucan — All rights reserved.
      </footer>
    </div>
  );
}
