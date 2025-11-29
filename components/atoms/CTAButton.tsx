import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";

export default function CTAButton() {
  return (
    <div>
      <Link
        href=""
        className=" flex items-center gap-1 bg-primary text-white px-6 py-2 rounded-md"
      >
        {" "}
        <BiPhoneCall /> Contact
      </Link>
    </div>
  );
}
