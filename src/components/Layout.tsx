import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-paper paper-texture flex flex-col">
    <ScrollProgress />
    <Navigation />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);
