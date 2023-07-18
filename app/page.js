import HeroSection from "./Components/HeroSection/HeroSection"
import ProjectOfTheWeek from "./Components/ProjectOfTheWeek/ProjectOfTheWeek"
import Link from "next/link"

export default function Home() {

  return (
    <main>
      <HeroSection />
      <ProjectOfTheWeek />
      <div className="h-[500px] grid place-content-center bg-whiteColor">
        Testimonials section will be here!
      </div>
    </main>
  )
}
