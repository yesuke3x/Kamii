import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Send, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const EMAIL = "kamila.dosbayeva@narxoz.kz";

export const Footer = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const from = String(fd.get("email") || "");
    const msg = String(fd.get("message") || "");
    const subject = encodeURIComponent(`Message from website — ${name || "anonymous"}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name}\n${from}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Mail client opened — go ahead and send.");
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 600);
  };

  return (
    <footer id="contact" className="bg-ink text-paper mt-32 scroll-mt-20">
      <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-16">
        {/* Contact form */}
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-paper/60 mb-4">
            04 — Get in touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] mb-8 text-balance">
            Write — let's <em className="text-ochre">discuss</em> your idea.
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-xs uppercase tracking-wider text-paper/75">Name</Label>
                <Input
                  id="name" name="name" required
                  className="mt-2 bg-transparent border-0 border-b border-paper/40 rounded-none px-0 text-paper placeholder:text-paper/40 focus-visible:ring-0 focus-visible:border-ochre"
                  placeholder="What's your name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs uppercase tracking-wider text-paper/75">Email</Label>
                <Input
                  id="email" name="email" type="email" required
                  className="mt-2 bg-transparent border-0 border-b border-paper/40 rounded-none px-0 text-paper placeholder:text-paper/40 focus-visible:ring-0 focus-visible:border-ochre"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="text-xs uppercase tracking-wider text-paper/75">Message</Label>
              <Textarea
                id="message" name="message" required rows={4}
                className="mt-2 bg-transparent border-0 border-b border-paper/40 rounded-none px-0 text-paper placeholder:text-paper/40 focus-visible:ring-0 focus-visible:border-ochre resize-none"
                placeholder="Tell me briefly what it's about…"
              />
            </div>
            <Button type="submit" disabled={loading} variant="ghost"
              className="group bg-ochre text-ink hover:bg-paper hover:text-ink rounded-none px-8 py-6 font-sans text-sm tracking-wider uppercase">
              <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              {loading ? "Opening mail…" : "Send"}
            </Button>
          </form>
        </div>

        {/* Sidebar info */}
        <div className="md:pl-12 md:border-l border-paper/15 space-y-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-paper/60 mb-4">Direct</p>
            <a
              href={`mailto:${EMAIL}`}
              className="font-serif text-xl md:text-2xl text-paper hover:text-ochre transition-colors inline-flex items-center gap-2 break-all"
            >
              <Mail size={18} className="shrink-0" /> {EMAIL}
            </a>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-paper/60 mb-4">Social</p>
            <ul className="space-y-3 font-serif text-lg">
              <li>
                <a
                  href="https://instagram.com/daonkvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ochre transition-colors inline-flex items-center gap-2 group"
                >
                  <Instagram size={18} />
                  <span className="link-underline">Instagram</span>
                  <span className="text-paper/60 text-sm group-hover:text-ochre transition-colors">@daonkvi</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/daonkvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ochre transition-colors inline-flex items-center gap-2 group"
                >
                  <Phone size={18} />
                  <span className="link-underline">Telegram</span>
                  <span className="text-paper/60 text-sm group-hover:text-ochre transition-colors">@daonkvi</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-paper/60 mb-4">Navigation</p>
            <div className="flex gap-6 font-sans text-sm text-paper/85">
              <Link to="/" className="hover:text-ochre transition-colors">Home</Link>
              <Link to="/interests" className="hover:text-ochre transition-colors">About</Link>
              <Link to="/goals" className="hover:text-ochre transition-colors">Roadmap</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-paper/65">
          <span className="font-serif italic">© MMXXVI — Kamila Dosbayeva. Made with care.</span>
          <span className="uppercase tracking-[0.2em]">Edition Nº 01</span>
        </div>
      </div>
    </footer>
  );
};
