import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Stats />
      <TechStack />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}

