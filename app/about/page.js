import BoardMembers from "../components/BoardMembers/BoardMembers";
import Faq from "../components/Faq/Faq";
import Mission from "../components/Mission/Mission";
import Video from "../components/Video/Video";
export default function About() {
  return (
    <main>
      <Mission />
      <Video />
      <BoardMembers />
      <Faq />
    </main>
  );
}
