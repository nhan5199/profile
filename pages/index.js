import Experiences from "@/components/common/Experiences";
import Introduction from "@/components/common/Introduction";
import Skill from "@/components/common/Skill";
import Header from "@/components/common/header";

export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <Experiences />
      <Skill />
    </>
  );
}
