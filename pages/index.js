import Experiences from "@/components/common/Experiences";
import Introduction from "@/components/common/Introduction";
import Skill from "@/components/common/Skill";
export default function Home() {
  return (
    <div className="relative">
      <Introduction id="introduction" />
      <Experiences />
      <Skill />
    </div>
  );
}
