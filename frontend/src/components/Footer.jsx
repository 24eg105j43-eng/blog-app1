import { NavLink } from "react-router";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold tracking-tight text-slate-900">MyBlog</p>
          <p className="mt-1 text-sm text-slate-500">A brighter place for curious minds.</p>
        </div>
        <div className="flex items-center gap-5 text-sm font-medium text-slate-500">
          <NavLink className="hover:text-slate-950 transition-colors" to="/">Explore</NavLink>
          <NavLink className="hover:text-slate-950 transition-colors" to="/register">Write with us</NavLink>
          <span className="text-slate-400">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer
