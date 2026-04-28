import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Главная", num: "01" },
  { to: "/interests", label: "Обо мне", num: "02" },
  { to: "/goals", label: "Roadmap", num: "03" },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-paper/80 border-b border-ink/10">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl font-medium tracking-tight text-ink">
            Kamila<span className="text-terracotta">.</span>
          </span>
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Folio &middot; MMXXVI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "group flex items-baseline gap-1.5 text-sm tracking-wide transition-colors",
                  isActive ? "text-terracotta" : "text-ink hover:text-terracotta"
                )
              }
            >
              <span className="font-serif italic text-xs text-muted-foreground group-hover:text-terracotta transition-colors">
                {l.num}
              </span>
              <span>{l.label}</span>
            </NavLink>
          ))}
        </nav>

        <button
          aria-label="Меню"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-ink"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink/10 bg-paper">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "flex items-baseline gap-2 font-serif text-2xl",
                    isActive ? "text-terracotta" : "text-ink"
                  )
                }
              >
                <span className="text-xs italic text-muted-foreground">{l.num}</span>
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
