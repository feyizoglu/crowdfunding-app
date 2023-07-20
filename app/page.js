import HeroSection from "./Components/HeroSection/HeroSection";
import ProjectOfTheWeek from "./Components/ProjectOfTheWeek/ProjectOfTheWeek";
import Testimonials from "./Components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectOfTheWeek />
      <Testimonials />
    </main>
  );
}
