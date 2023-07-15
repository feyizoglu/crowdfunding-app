import ProjectOfTheWeek from "./Components/ProjectOfTheWeek/ProjectOfTheWeek"

export default function Home() {

  return (
    <main className=''>
      <div className="h-screen grid place-content-center bg-greenColor">
        Hero section will be here
      </div>
      <ProjectOfTheWeek />
      <div className="h-[500px] grid place-content-center bg-whiteColor">
        Testimonials section will be here!
      </div>
      
    </main>
  )
}
