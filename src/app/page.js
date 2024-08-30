import Blogs from "@/sections/articles/blogs";
import Hero from "@/sections/Hero/hero";
import Projects from "@/sections/projects/projects";
import Speak from "@/sections/sec3/speak";
import Sec2 from "@/sections/sect2/ad";
import Testimonials from "@/sections/testimonials/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sec2 />
      <Projects />
      <Testimonials />
      {/* <Speak /> */}
      <Blogs />
    </main>
  );
}
