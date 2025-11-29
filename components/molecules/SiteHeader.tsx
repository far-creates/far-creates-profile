import CTAButton from "../atoms/CTAButton";
import SiteLogo from "../atoms/SiteLogo";
import SiteNav from "../atoms/SiteNav";

export default function SiteHeader() {
  return (
    <div className="flex gap-6 items-center justify-between py-4 border-b-2 border-primary">
      <SiteLogo />
      <SiteNav />
      <CTAButton />
    </div>
  );
}
