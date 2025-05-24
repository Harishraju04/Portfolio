// components/Contact.js
export default function Contact() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-4">
          I'm always open to collaborations, freelance work, or just a chat about tech and design.
        </p>
        <p className="text-lg">
          Send me a message at:{" "}
          <a
            href="mailto:harish.raghavendra@example.com"
            className="text-indigo-400 underline hover:text-indigo-300 transition-colors"
          >
            harishkurapati2004@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
