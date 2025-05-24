// components/Projects.js
export default function Projects() {
  const projects = [
    {
      title: "Task Manager App",
      description:
        "A full-stack productivity app built using React, Express, and PostgreSQL. Users can create tasks, assign deadlines, set reminders, and organize by category.",
    },
    {
      title: "Blogging Platform",
      description:
        "A clean and modern blog website where users can post, edit, and delete blogs. Built using React and MongoDB with authentication and Markdown support.",
    },
    {
      title: "Payment Application UI",
      description:
        "Designed an intuitive UI for a payment processing app. Features include transaction history, responsive charts, and smooth animations using Tailwind and React.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-indigo-400">{project.title}</h3>
            <p className="mt-3 text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
