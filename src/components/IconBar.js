import { Fragment } from 'react'
import { ReactComponent as GithubLogo } from '../assets/github-icon.svg';
import { ReactComponent as MailLogo } from '../assets/mail-icon.svg';
import { ReactComponent as LinkedinLogo } from '../assets/linkedin-icon.svg';
import { ReactComponent as MediumLogo } from '../assets/medium-icon.svg';
import { ReactComponent as ResumeLogo } from '../assets/resume-icon.svg';
import ResumePDF from '../assets/files/Jai.Narayanan.pdf';


const IconBar = () => {
  return (
    <div class="fixed md:left-10 bottom-0 md:w-2 md:h-[14rem] w-full z-50 md:bg-transparent bg-primary-hover">
      <div class="bg-body md:absolute top-0 left-0 relative z-50 md:p-0 p-4 md:w-auto w-full text-center">
        <a href={ResumePDF} aria-label="Resume" class="inline-block md:mb-1 md:mr-0 mr-4" target="_blank" rel="noreferrer">
          <ResumeLogo className="w-6 block h-8 hover:fill-primary-blue transition hover:-translate-y-1 fill-fonts-gray"  />
        </a>
        <a href="https://github.com/jainarayanan" aria-label="GitHub" class="text-paragraph hover:text-green inline-block transition duration-200 md:mb-1 md:mr-0 mr-4" target="_blank" rel="noreferrer">
          <GithubLogo className="w-6 block h-8 hover:fill-primary-blue transition hover:-translate-y-1 fill-fonts-gray"  />
        </a>
        <a href="https://www.linkedin.com/in/jai-narayanan/" aria-label="Linkedin" class="inline-block md:mb-1 md:mr-0 mr-4" target="_blank" rel="noreferrer">
          <LinkedinLogo className="w-6 block h-8 hover:fill-primary-blue transition hover:-translate-y-1 fill-fonts-gray"  />
        </a>
        <a href="https://medium.com/@jainaraya" aria-label="Medium" class="inline-block md:mb-1 md:mr-0 mr-4" target="_blank" rel="noreferrer">
          <MediumLogo className="w-6 block h-8 hover:fill-primary-blue transition hover:-translate-y-1 fill-fonts-gray"  />
        </a>
        <a href="mailto:jainara@umich.edu" aria-label="Mail" class="inline-block md:mb-1 md:mr-0 mr-4" target="_blank" rel="noreferrer">
          <MailLogo className="w-6 block h-8 hover:fill-primary-blue transition hover:-translate-y-1 fill-fonts-gray"  />
        </a>
        
      </div>
    </div>
  )
}

export default IconBar;