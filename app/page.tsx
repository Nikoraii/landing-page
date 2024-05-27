import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Page() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      review: "Working with Lunera was a game-changer for our business. Their team delivered a fantastic product that exceeded our expectations!",
      title: "CEO of Tech Innovators",
      image: "/assets/images/man.png"
    },
    {
      id: 2,
      name: "Sarah K.",
      review: "Choosing Lunera for our web application development was the best decision we made. Their team is highly professional, and they delivered a product that perfectly meets our needs. Highly recommended!",
      title: "Marketing Director at GreenTech Solutions",
      image: "/assets/images/woman.png"
    },
    {
      id: 3,
      name: "David R.",
      review: "Lunera turned our vision into reality. Their ability to understand our requirements and translate them into a functional, beautiful web app was impressive. The project was delivered on time and exceeded our expectations.",
      title: "CEO of Innovate Inc.",
      image: "/assets/images/man-2.png"
    }
  ]
  return (
    <main className="bg-white">

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

      {/* ABOUT SECTION START */}
      <section className="min-h-screen container-fluid pt-20" id="about">
        <div className="w-10/12 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  mx-auto p-2">
            <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-6/12 md:rounded-none md:rounded-s-lg" src="/assets/images/developer.jpg" alt="Image" width={500} height={450} />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">About Lunera</h5>
                <p className="mb-3 font-normal text-gray-700">Lunera is a forward-thinking software company dedicated to creating high-quality single-page web apps, multi-page web apps, and comprehensive software solutions for businesses. Our team of experts leverages the latest technologies to deliver innovative and efficient products that help your business thrive in the digital age.</p>
                <p>We envision a world where every business, regardless of its size or industry, can leverage cutting-edge technology to achieve its goals. By focusing on simplicity, usability, and efficiency, we strive to develop software solutions that not only meet but exceed our clients&apos; expectations.</p>
                <a target="_blank" rel="no-referrer" href="https://www.nikolastancic.com/" className="bg-zinc-950 text-white w-fit mx-auto p-2 rounded-lg text-sm antialiased drop-shadow-xl mt-4 font-semibold transition ease-in-out delay-150 hover:scale-105">READ MORE</a>
            </div>
        </div>
        <div id="reviews" className="mt-5 p-4">
          <div className="text-center text-lg text-gray-700">Don&apos;t just take our word for it. Hear what our satisfied clients have to say about working with Lunera.</div>
          <div className="flex flex-col lg:flex-row gap-4 mt-4">
            {reviews.map((review) => {
              return (
              <div key={review.id} className="flex text-gray-950 bg-gray-100 w-full lg:w-1/3 items-center border border-gray-200 rounded-xl drop-shadow-lg p-2 gap-2 transition ease-in-out delay-150 hover:-translate-y-4">
                <div className="w-1/6">
                  <Image className="rounded-full border border-gray-500" src={review.image} height={250} width={250} alt="Profile picture" />
                </div>
                <div className="w-5/6 flex flex-col">
                  <div className="leading-5">{review.review}</div>
                  <div className="text-sm font-light">{review.name} - {review.title}</div>
                </div>
              </div>
            )
            })}
          </div>
          <div id="stars" className="text-center w-fit mx-auto mt-8">
            <div className="flex text-center mx-auto w-fit animate-bounce">
              <div>
                {<FaStar className="text-amber-400" />}
              </div>
              <div>
                {<FaStar className="text-amber-400" />}
              </div>
              <div>
                {<FaStar className="text-amber-400" />}
              </div>
              <div>
                {<FaStar className="text-amber-400" />}
              </div>
              <div>
                {<FaStarHalfAlt className="text-amber-400" />}
              </div>
            </div>
            <div className="text-center text-sm text-gray-600">4.5 average out of 189 happy customers!</div>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION END */}

    </main>
  );
}
