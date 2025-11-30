import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";

export default function CTAButton() {
  return (
    <div className="flex gap-4">
      <Link
        href=""
        className="text-xl flex items-center gap-1 bg-primary text-white px-6 py-2 rounded-md"
      >
        {" "}
        <BiPhoneCall /> Contact
      </Link>

      <div className="flex-col text-sm">
        <div>
          <Link href="/eng"> English </Link>
        </div>
        <div>
          <Link href="/fa"> Persian </Link>
        </div>
      </div>
    </div>
  );
}
