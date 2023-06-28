export default function Home() {
  return (
    <main className='bg-greenColor grid place-content-center h-screen text-center '>
      <h1 className='text-3xl text-blackColor font-serif animate-pulse'>Hello World. We will have our capstone project here in the near future..</h1>
      <div>
        <div className=" h-20 items-center justify-center flex">
          <button className="button-dark">
            New Project
          </button>
        </div>
        <div className="bg-black h-20 items-center  justify-center flex">
          <button className="button-green">
            New Project
          </button>
        </div>
        <div className="bg-whiteColor h-20 items-center  justify-center flex space-x-5">
          <button className="button-light">
            New Project
          </button>
          <button className="button-dark">
            New Project
          </button>
        </div>
      </div>
    </main>
  )
}
