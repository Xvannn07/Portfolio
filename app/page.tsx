import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { EducationSection } from "@/components/sections/education-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CertificateSection } from "@/components/sections/certificate-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <CertificateSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
