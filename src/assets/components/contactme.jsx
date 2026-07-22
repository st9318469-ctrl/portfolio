import { useState } from "react";

const contactEmail = "s33810967@email.com";
const contactPhone = "+917837051325";
const web3FormsAccessKey = "f743b59c-0417-4bc9-9484-af64760e8be7";

export default function ContactMe() {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSending(true);
    setResult("");

    const formData = new FormData(form);
    formData.append("access_key", web3FormsAccessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        form.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300 sm:text-sm sm:tracking-[0.3em]">
            Contact
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Have a project idea or want to collaborate? Send me a message and
            I'll get back to you soon.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-8">
            <h3 className="text-xl font-bold sm:text-2xl">Get In Touch</h3>

            <p className="mt-4 leading-7 text-slate-400">
              I'm open to freelance projects, internships, collaborations, and
              full stack development opportunities.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">Email</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-1 inline-block break-all font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  {contactEmail}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">Phone</p>
                <a
                  href={`tel:${contactPhone}`}
                  className="mt-1 inline-block font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  +91 7837051325
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">Location</p>
                <p className="mt-1 font-semibold text-cyan-300">India</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/10 sm:p-8"
          >
            <div className="grid gap-5">
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project discussion"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900 px-5 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {result && (
                <p className="text-center text-sm font-semibold text-cyan-300">
                  {result}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
