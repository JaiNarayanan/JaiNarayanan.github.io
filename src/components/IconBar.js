import { Fragment } from 'react'
import { ReactComponent as GithubLogo } from '../assets/github-icon.svg';
import { ReactComponent as MailLogo } from '../assets/mail-icon.svg';
import { ReactComponent as LinkedinLogo } from '../assets/linkedin-icon.svg';
import { ReactComponent as MediumLogo } from '../assets/medium-icon.svg';
import { ReactComponent as ResumeLogo } from '../assets/resume-icon.svg';


const IconBar = () => {
  return (
    <div className="fixed top-2/3 left-10 hidden md:block">
      <ul className="after:w-px after:block after:bg-white after:h-screen after:mx-auto">
        <li className="mb-1">
          <a>
            <ResumeLogo width="24px" className="block h-10 hover:fill-primary-blue transition hover:-translate-y-1" fill="white"  />
          </a>
        </li>
        <li className="mb-1">
          <a>
            <GithubLogo width="24px" className="block h-10 hover:fill-primary-blue transition hover:-translate-y-1" fill="white"  />
          </a>
        </li>
        <li className="mb-1">
          <a>
            <LinkedinLogo width="24px" className="block h-10 hover:fill-primary-blue transition hover:-translate-y-1" fill="white"  />
          </a>
        </li>
        <li className="mb-1">
          <a>
            <MediumLogo width="24px" className="block h-10 hover:fill-primary-blue transition hover:-translate-y-1" fill="white"  />
          </a>
        </li>
        <li className="mb-1">
          <a>
            <MailLogo width="24px" className="block h-10 hover:fill-primary-blue transition hover:-translate-y-1" fill="white"  />
          </a>
        </li>

      </ul>
    </div>
  )
}

export default IconBar;