// components/Skills.js
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
];

export default function Skills() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-3 hover:scale-105 transition-transform duration-200"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-sm font-medium text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
