/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-ink antialiased selection:bg-accent-orange selection:text-white">
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Certifications />
      <Footer />
    </div>
  );
}
