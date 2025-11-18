import React from 'react'

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg max-w-2xl mx-auto">
          At Ucan, we provide world-class learning experiences designed to help you grow, upskill, and achieve your career goals.
        </p>
      </section>


      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">


          {/* Service Card 1 */}
          <div className="bg-white p-8 shadow rounded-2xl text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Tech Courses</h3>
            <p className="text-gray-600">
              Learn in-demand skills such as web development, cybersecurity, data analytics, and more.
            </p>
          </div>


          {/* Service Card 2 */}
          <div className="bg-white p-8 shadow rounded-2xl text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Practical Training</h3>
            <p className="text-gray-600">
              Work on real-world projects to gain hands-on experience and build a strong portfolio.
            </p>
          </div>


          {/* Service Card 3 */}
          <div className="bg-white p-8 shadow rounded-2xl text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Mentorship Program</h3>
            <p className="text-gray-600">
              Receive guidance from industry professionals to stay on track and achieve your goals.
            </p>
          </div>


          {/* Service Card 4 */}
          <div className="bg-white p-8 shadow rounded-2xl text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Career Coaching</h3>
            <p className="text-gray-600">
              Get support with resume building, interview preparation, and job applications.
            </p>
          </div>


          {/* Service Card 5 */}
          <div className="bg-white p-8 shadow rounded-2xl text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Workshops & Webinars</h3>
            <p className="text-gray-600">
              Join live sessions led by experts to stay updated with the latest tech trends.
            </p>
          </div>


          {/* Service Card 6 */}
          <div className="bg-white p-8 shadow rounded-2xl text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Community Access</h3>
            <p className="text-gray-600">
              Connect with other learners, collaborate on projects, and share knowledge.
            </p>
          </div>


        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-blue-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Join Ucan today and gain access to high-quality courses, mentorship, and hands-on learning experiences.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition">
          Explore Courses
        </button>
      </section>


      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6 mt-10">
        © {new Date().getFullYear()} Ucan — Empowering Learning for Everyone.
      </footer>
    </div>
  );
}
