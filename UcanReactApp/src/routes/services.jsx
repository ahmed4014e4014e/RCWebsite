import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const services = [
  {
    title: "Free Individual Tutoring",
    description:
      "Students can schedule individualized tutoring sessions for free when they need focused help in a course.",
  },
  {
    title: "Free Group Tutoring",
    description:
      "Students can attend group tutoring sessions for free and learn together around shared course topics.",
  },
  {
    title: "Online Student Community",
    description:
      "College students can ask questions, explain ideas, and help each other understand coursework in a supportive space.",
  },
  {
    title: "Document Library",
    description:
      "Access a free library of documents that helps students review lessons, assignments, and course concepts more clearly.",
  },
  {
    title: "Useful Videos",
    description:
      "Find useful videos that improve understanding of college course material and make difficult topics easier to follow.",
  },
  {
    title: "Course WhatsApp Groups",
    description:
      "Access collections of WhatsApp group chats made for specific college courses so students can get help more easily.",
  },
];

const tutors = [
  {
    name: "Ahmed Al Ruqaishi",
    institute: "MCBS",
    courses: [
      "MCBS ENG 213",
      "MCBS ICT 128",
      "MCBS MAT 255",
      "MCBS COSC 1301",
      "MCBS CPT 220",
    ],
    bio: "Offers free one-on-one tutoring sessions for selected MCBS courses.",
    bookingUrl: "https://calendly.com/ahmed4014e/30min",
    bookingLabel: "book tutor Ahmed Al Ruqaishi",
    availability: "Available for booking",
  },
];

const institutes = ["All Institutes", "MCBS", "SQU", "UTAS", "Middle East College"];

const serviceHighlights = [
  { number: "Free", label: "tutoring and course support" },
  { number: "Filter", label: "tutors by institute and course" },
  { number: "Online", label: "community help for college students" },
];

export default function Services() {
  const [selectedInstitute, setSelectedInstitute] = useState("All Institutes");
  const [selectedCourse, setSelectedCourse] = useState("All Courses");
  const location = useLocation();

  const availableCourses = useMemo(() => {
    const relevantTutors =
      selectedInstitute === "All Institutes"
        ? tutors
        : tutors.filter((tutor) => tutor.institute === selectedInstitute);

    const uniqueCourses = Array.from(
      new Set(relevantTutors.flatMap((tutor) => tutor.courses))
    ).sort();

    return ["All Courses", ...uniqueCourses];
  }, [selectedInstitute]);
  const hasCourseOptions = availableCourses.length > 1;

  const filteredTutors = useMemo(() => {
    return tutors.filter((tutor) => {
      const instituteMatches =
        selectedInstitute === "All Institutes" || tutor.institute === selectedInstitute;
      const courseMatches =
        selectedCourse === "All Courses" || tutor.courses.includes(selectedCourse);

      return instituteMatches && courseMatches;
    });
  }, [selectedCourse, selectedInstitute]);

  useEffect(() => {
    if (location.hash !== "#tutor-directory") return;

    const element = document.getElementById("tutor-directory");
    if (!element) return;

    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  useEffect(() => {
    if (!availableCourses.includes(selectedCourse)) {
      setSelectedCourse("All Courses");
    }
  }, [availableCourses, selectedCourse]);

  const handleTutorBooking = (tutor) => {
    window.alert(
      `please send an email to : 20258971@mcbs.edu.om\nwith the following:\nInsitiute name (MCBS.....):\nCourse Name + Course Code (Example: MAT255 ):\nTopics need help with:\nand attach to the email any relavent files regarding topics and concepts covered.`
    );

    window.location.href = "mailto:20258971@mcbs.edu.om";
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
                Our Services
              </p>
              <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:mx-0 lg:text-5xl">
                Free tutoring and student support across institutes and courses.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-50 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
                Ucan Oman helps students find tutors, course support, and study
                communities through a simple frontend directory that can keep growing.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white/12 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-100 sm:text-sm">
                What you get
              </p>
              <h2 className="mt-4 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                A tutor directory that is easy to expand.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-blue-50 sm:text-base">
                <p>Filter tutors by institute and course.</p>
                <p>Highlight currently available tutors with booking links.</p>
                <p>Show a clean empty state while you add more tutors later.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-4 rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:gap-6 sm:p-8 md:grid-cols-3">
          {serviceHighlights.map((item) => (
            <div key={item.label} className="rounded-2xl bg-slate-50 p-5 text-center sm:p-6">
              <p className="text-2xl font-bold text-blue-700 sm:text-3xl">{item.number}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="tutor-directory"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-4 sm:scroll-mt-28 sm:px-6 sm:py-8"
      >
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            Tutor Directory
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Find available tutors by institute and course.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Select an institute and a course to see which tutors are currently available.
            This section is frontend-ready so you can keep adding tutors later.
          </p>
        </div>

        <div className="mt-10 rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:mt-12 sm:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Institute</span>
              <select
                value={selectedInstitute}
                onChange={(event) => setSelectedInstitute(event.target.value)}
                className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
              >
                {institutes.map((institute) => (
                  <option key={institute} value={institute}>
                    {institute}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Course</span>
              <select
                value={selectedCourse}
                onChange={(event) => setSelectedCourse(event.target.value)}
                disabled={!hasCourseOptions}
                className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
              >
                {hasCourseOptions ? (
                  availableCourses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))
                ) : (
                  <option value="All Courses">No courses available yet</option>
                )}
              </select>
            </label>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {filteredTutors.length > 0 ? (
              filteredTutors.map((tutor) => (
                <article
                  key={tutor.name}
                  className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200 sm:p-8"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    <h3 className="text-xl font-semibold text-slate-900">{tutor.name}</h3>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                      {tutor.institute}
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-slate-600">{tutor.bio}</p>

                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Courses
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tutor.courses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-sm font-medium text-emerald-700">
                    {tutor.availability}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleTutorBooking(tutor)}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
                  >
                    {tutor.bookingLabel}
                  </button>
                </article>
              ))
            ) : (
              <div className="rounded-3xl bg-slate-50 p-6 text-center ring-1 ring-slate-200 sm:p-8 lg:col-span-2">
                <h3 className="text-xl font-semibold text-slate-900">
                  No tutor listed yet for this selection
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  Try a different institute or course, or add more tutor entries
                  to the frontend data later to expand this directory.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-8">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            What Else We Offer
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
            More free ways for students to study better and support each other.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            Why It Matters
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Students need support that is free, practical, and connected to real coursework.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          <p>
            Ucan Oman helps students find the support they need most:
            explanation, tutoring, study materials, and communities where asking for help feels easier.
          </p>
          <p>
            By combining tutoring sessions, course resources, and WhatsApp groups,
            the platform creates a stronger support system across college courses.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="rounded-[1.75rem] bg-slate-900 px-6 py-10 text-center text-white shadow-xl sm:px-8 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:text-sm">
            Start Your Journey
          </p>
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
            Explore free tutoring, resources, and course communities today.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Ucan Oman is built to help students find support faster and improve
            their understanding across the courses they are taking.
          </p>
          <button className="mt-8 w-full rounded-2xl bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto">
            Explore Courses
          </button>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500 sm:px-6">
        Copyright {new Date().getFullYear()} Ucan Oman. Free learning support for everyone.
      </footer>
    </main>
  );
}
