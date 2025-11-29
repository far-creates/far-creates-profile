import Link from "next/link";

export default function Home() {
  return (
    <div className="font-primary text-primary">
      <main className="h-screen w-6xl flex items-center justify-center">
        <div className="w-1/2 h-68  px-7 border-r-2 border-primary  text-2xl text-right">
          {" "}
          What looks simple
          <br /> took a thousand invisible decisions.
        </div>
        <div className="w-1/2 px-7 h-72 flex-col content-end ">
          <div className="font-meow text-7xl bg-linear-90 from:transparent to-accent/40 text-accent text-right">
            Far Creats
          </div>
          <div className="flex justify-end items-end gap-4">
            <Link href={"/eng"}>English</Link>
            <Link href={"/fa"}>Persian</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
