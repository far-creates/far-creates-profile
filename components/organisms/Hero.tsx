import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white relative w-full h-120 ">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={"/bg-hero.png"}
          width={1440}
          height={680}
          alt="nude color abstract background"
          className="  h-120 w-full object-bottom"
        />
      </div>
      <div className="max-w-360 m-auto px-10 pb-16 text-5xl font-bold leading-24 text-accent text-shadow-md">
        <span className="animate-fade-out">
          The best solutions feel obvious;
        </span>
        <br />
        <span className="animate-fade-in"> only after someone builds them</span>
      </div>

      <div className="absolute right-40 -bottom-40 flex justify-end gap-6">
        <div className="w-md text-xl text-primary pt-26">
          We cannot solve our problems with the same level of thinking that
          created them{" "}
        </div>
        <div className=" rounded-lg border-2 border-white overflow-hidden">
          <Image
            src={"/Farzaneh.jpg"}
            width={300}
            height={300}
            alt="Far Creates"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
