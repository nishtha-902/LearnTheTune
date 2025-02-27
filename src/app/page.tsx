import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Head from 'next/head';

export default function Home() {
  return (<>
    <Head>
    <title>Music Academy</title>
    <meta name="description" content="My Next.js app description" />
  </Head>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
    </>
  );
}
