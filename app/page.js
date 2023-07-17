import HeroSection from "./Components/HeroSection/HeroSection"
import ProjectOfTheWeek from "./Components/ProjectOfTheWeek/ProjectOfTheWeek"

export default function Home() {

  return (
    <main>
      <div className='mt-[70px]'>
        <HeroSection/>
      </div>
      <ProjectOfTheWeek />
      <div className="h-[500px] grid place-content-center bg-whiteColor">
        Testimonials section will be here!
      </div>
    </main>
  )
}
