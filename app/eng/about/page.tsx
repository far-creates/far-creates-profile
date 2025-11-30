import Image from "next/image";
export default function About() {
  return (
    <div>
      <div className="mt-7 ml-4 flex items-center gap-4">
        <Image
          src={"/this-is-far.jpg"}
          width={400}
          height={400}
          alt="this is far"
          className="rounded-lg border-2 border-accent shadow-2xs "
        />
        <div className="max-w-2xl">
          <span className="text-2xl text-accent font-bold ">About Far</span>
          <h1 className="text-md border-b border-b-primary">
            Content Creator, Web Developer, Digital Marketing Specialist
          </h1>
          <div className="text-lg mt-4">
            <p className="mb-2">
              Thank you for taking the time to explore my little corner of the
              internet and read my about page. This is Far, and this is where
              Far creates... well, a bunch of cool stuff; from UI/UX design to
              actual coding, visual generation, and written content.
            </p>
            <p className="mb-2">
              {" "}
              I'm a jack of all trades. Good or bad, that's who I am, and I
              can't help being drawn to different disciplines: writing,
              marketing, coding, visualization, organization, SEO, and more.
              This site itself is a test case; proof that it's possible to reach
              a reasonable level across multiple fields and build a complete,
              working website single-handedly.
            </p>{" "}
            <p className="mb-2">
              {" "}
              My short-term goal is to work with a small startup or business to
              build their digital presence from the ground up. Long-term, I
              envision becoming a full-fledged business intelligence manager;
              someone who helps businesses establish a strong digital footprint
              and connect with their audiences effectively.
            </p>
          </div>
        </div>
      </div>
      <div className="my-7 py-7 px-4  bg-accent  text-white">
        <p className="text-2xl text-center font-bold my-7">Far Highlights</p>
        <div className="flex gap-4">
          <div className="w-1/4 rounded-lg border-2  border-primary relative">
            <div className="absolute w-full h-full bg-primary/30 blur-6xl "></div>
            <h2 className=" text-md border-b border-b-primary py-2 px-2 bg-primary text-accent font-bold shadow-2xl ">
              Architecture & Technical Design{" "}
            </h2>
            <p className="p-2 ">
              I hold a master's degree in architecture with a focus on
              low-energy building design. To be honest, I was never the best
              building designer at university—but I excelled at software. Revit
              and Grasshopper became my tools of choice, and I learned that I'm
              more drawn to systems thinking than pure creative design.
            </p>
          </div>

          <div className="w-1/4 rounded-lg border-2  border-primary relative">
            <div className="absolute w-full h-full bg-primary/30 blur-6xl "></div>
            <h2 className=" text-md border-b border-b-primary py-2 px-2 bg-primary text-accent font-bold shadow-2xl ">
              Content Writing & Digital Marketing{" "}
            </h2>
            <p className="p-2 ">
              For the past five years, I've worked as a content writer and
              digital marketer. I've written for diverse clients, and learned
              how to communicate complex ideas simply, optimize for SEO, and
              craft messaging that resonates with audiences. This taught me how
              businesses actually talk to their customers and what works.
            </p>
          </div>
          <div className="w-1/4 rounded-lg border-2  border-primary relative">
            <div className="absolute w-full h-full bg-primary/30 blur-6xl "></div>
            <h2 className=" text-md border-b border-b-primary py-2 px-2 bg-primary text-accent font-bold shadow-2xl ">
              Web Development{" "}
            </h2>
            <p className="p-2 ">
              I taught myself web development because I wanted to build the
              ideas I was writing about. I work with React, Next.js, Tailwind,
              and the MERN stack. I'm comfortable with databases, front-end
              frameworks, and the connective tissue that makes modern websites
              function. I'm not a specialist developer yet, but I can take a
              project from concept to deployment.
            </p>
          </div>
          <div className="w-1/4 rounded-lg border-2  border-primary relative">
            <div className="absolute w-full h-full bg-primary/30 blur-6xl "></div>
            <h2 className=" text-md border-b border-b-primary py-2 px-2 bg-primary text-accent font-bold shadow-2xl ">
              Business Intelligence{" "}
            </h2>
            <p className="p-2 ">
              I'm currently completing my master's in Business Intelligence at
              the University of Tehran. I'm learning data analysis, database
              design, and how to use information to make better decisions. This
              ties everything together—understanding how businesses work, how
              data flows through them, and how to present that information
              clearly.
            </p>
          </div>
        </div>
      </div>
      <div className="my-7 py-7 w-1/2 m-auto text-center">
        <p className="text-2xl  font-bold my-7"> What This Means for You?</p>
        <p className="text-xl">
          If you're a startup or small business that needs someone who can
          handle your entire digital presence—design, development, content, SEO,
          strategy, without coordinating five different specialists, that's what
          I do. I'm not the person you hire when you have a big team. I'm the
          person you hire when you need someone to own the whole thing and get
          it done.
        </p>
      </div>
    </div>
  );
}
