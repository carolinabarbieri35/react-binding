import ButtonSection from "./sections/ButtonSection";
import CounterSection from "./sections/CounterSection";
import SectionTabs from "./sections/SectionTabs";
import WelcomeSection from "./sections/WelcomeSection";

export default function MainContent() {
  return (
    <main>
     <CounterSection/>
     <ButtonSection/>
     <SectionTabs/>
     <WelcomeSection/>

    </main>
  )
}