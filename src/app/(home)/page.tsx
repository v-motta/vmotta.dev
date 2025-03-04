import { AboutMe } from './(sections)/(about-me)/about-me'
import { AllMyKnowledge } from './(sections)/(all-my-knowledge)/all-my-knowledge'
import { ContactMe } from './(sections)/(contact-me)/contact-me'
import { LatestCertificates } from './(sections)/(latest-certificates)/latest-certificates'
import { Main } from './(sections)/(main)/main'
import { TopProjects } from './(sections)/(top-projects)/top-projects'

export default function Home() {
  return (
    <div>
      <Main />

      <AboutMe />

      <TopProjects />

      <LatestCertificates />

      <AllMyKnowledge />

      <ContactMe />
    </div>
  )
}
