import { PiCoffeeLight } from "react-icons/pi";
import Link from "next/link";
export default function SiteLogo() {
  return (
    <Link href={"/"}>
      <div className="flex  font-meow  text-primary items-center gap-2">
        <span className="text-5xl"> Far Creates</span>

        <PiCoffeeLight className="text-4xl" />
      </div>{" "}
    </Link>
  );
}
