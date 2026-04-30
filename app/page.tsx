import Image from "next/image";
import HeaderImage from "@/public/best-dog-groomer-favicon.png";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-yellow-50">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 md:py-32">
          <header className="w-full p-2 flex flex-col items-center justify-center text-center gap-y-3 md:gap-y-5">
            <Image 
              src={HeaderImage}
              alt="dog grooming image"
              className="object-contain overflow-hidden w-[clamp(80px,200px,500px)] h-auto m-1"
            />
            <h1 className="text-tertiary text-3xl md:text-6xl text-shadow-lg font-bold">
              The Best Dog Groomer in Your City
            </h1>
            <p className="text-secondary text-lg md:text-2xl my-2 md:my-4">
              Quality dog grooming services at affordable rates.
            </p>
            <div className="w-full h-0.5 my-4 md:my-6 bg-linear-to-r from-yellow-50 via-tertiary to-yellow-50"/>
            <button className="text-tertiary px-2 py-3 md:px-3 md:py-4 bg-primary border-none rounded-xl
                              shadow-sm hover:shadow-lg transition-shadow active:ring-1 ease-in-out duration-200">
              Schedule an appointment
            </button>
          </header>
        </section>
      </main>
    </div>
  );
}
