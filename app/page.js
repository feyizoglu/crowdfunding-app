import HeroSection from "./Components/HeroSection/HeroSection";
import ProjectOfTheWeek from "./Components/ProjectOfTheWeek/ProjectOfTheWeek";
import Testimonials from "./Components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <div className="mt-[70px]">
        <HeroSection />
      </div>
      <ProjectOfTheWeek />
      <Testimonials />
    </main>
  );
}
