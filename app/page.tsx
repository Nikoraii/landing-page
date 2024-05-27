export default function Page() {
  return (
    <main>

      {/* HOME SECTION START */}
      <section className="bg-center bg-no-repeat bg-[url('/assets/images/office-laptop.jpg')] bg-gray-700 bg-blend-multiply min-h-screen" id="home">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Empowering Your Business</h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Lunera, we specialize in building custom web and software applications tailored to meet your business needs.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a href="#pricing" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-zinc-950 hover:bg-black hover:outline hover:outline-2">
                Get started
              </a>
              <a href="#about" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
              </a>  
            </div>
          <p className="text-zinc-500 text-sm mt-32">This is a portfolio site made for educational purposes and serves no real purposes. All companies and people used here are either made up or used only as an example.</p>
        </div>
      </section>
      {/* HOME SECTION END */}
      
    </main>
  );
}
