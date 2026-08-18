

import { NavLink } from "react-router";

const topics = [
  ["01", "Technology", "The ideas and tools reshaping everyday life."],
  ["02", "Programming", "Practical lessons for building better things."],
  ["03", "Artificial intelligence", "A human take on an extraordinary shift."],
];

function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate border-b border-slate-200 bg-white">
        <div className="absolute -right-28 top-10 -z-10 size-80 rounded-full bg-amber-200/45 blur-3xl" />
        <div className="absolute -left-24 bottom-0 -z-10 size-72 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="mx-auto grid min-h-[560px] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
              <span className="size-1.5 rounded-full bg-violet-600" /> Fresh perspectives, every day
            </p>
            <h1 className="max-w-3xl text-5xl font-black tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl">
              Read less noise. <span className="text-violet-600">Think</span> more deeply.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              MyBlog brings together sharp stories on technology, programming, and the ideas moving our world forward.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <NavLink to="/register" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet-700">
                Start reading
              </NavLink>
              <a href="#topics" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-950 hover:-translate-y-0.5">
                Browse topics ↓
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-violet-500 to-amber-300 opacity-30 blur-2xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-300/60 sm:p-8">
              <div className="mb-12 flex items-center justify-between text-xs font-semibold text-slate-400"><span>FEATURED THOUGHT</span><span>05 MIN READ</span></div>
              <p className="text-sm font-semibold text-amber-300">THE CREATOR'S CORNER</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight">Small ideas can create remarkably big change.</h2>
              <div className="mt-10 flex items-center gap-3 border-t border-white/15 pt-5">
                <div className="grid size-9 place-items-center rounded-full bg-violet-500 text-sm font-bold">M</div>
                <div><p className="text-sm font-semibold">MyBlog Editorial</p><p className="text-xs text-slate-400">Curated for you</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="topics" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-600">Find your next rabbit hole</p><h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Explore what moves you.</h2></div>
          <NavLink to="/register" className="text-sm font-bold text-slate-900 underline decoration-violet-500 decoration-2 underline-offset-4">Become a contributor</NavLink>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {topics.map(([number, title, description]) => (
            <article key={title} className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/70">
              <p className="text-sm font-black text-violet-600">{number}</p>
              <h3 className="mt-10 text-2xl font-bold tracking-tight text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
              <p className="mt-7 text-sm font-bold text-slate-900 transition-transform group-hover:translate-x-1">Explore topic →</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home
