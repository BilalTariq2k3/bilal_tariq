import Navbar from '../app/components/Navbar/navbar'
import HomeSection from '../app/components/Home/Home'
import AboutSection from '../app/components/About/About'
import SkillSection from '../app/components/Skill/Skill'
import ProjectsSection from '../app/components/Projects/Projects'
import ExperianceSection from '../app/components/Experiance/Experiance'
import EducationSection from '../app/components/Education/Education'
import LeadershipSection from '../app/components/Leadership/Leadership'
import ContactSection from '../app/components/Contact/Contact'

export default function Home() {
  return (
  <>
  <Navbar/>
  <HomeSection/>
  <AboutSection/>
  <SkillSection/>
  <ProjectsSection/>
  <ExperianceSection/>
  <EducationSection/>
  <LeadershipSection/>
  <ContactSection/>
  </>
  );
}
