import { CgNotes } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { GiQuillInk } from "react-icons/gi";
import { TbScript } from "react-icons/tb";

export default function SiteNav() {
  return (
    <div>
      <ul className=" flex gap-6 text-xl [&_li]:flex [&_li]:items-center [&_li]:gap-1 ">
        <li>
          <FaHome /> Home
        </li>
        <li>
          <CgNotes /> About
        </li>
        <li>
          <GiQuillInk /> Notes
        </li>
        <li>
          <TbScript /> Codes
        </li>
      </ul>
    </div>
  );
}
