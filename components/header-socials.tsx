import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

export default function HeaderSocials() {
  return (
    <div className="flex flex-row gap-3">
      <a href="https://x.com/realChakrawarti" target="_blank">
        <FaXTwitter className="header-social-item" />
      </a>
      <a href="https://www.linkedin.com/in/chakrawarti-anupam/" target="_blank">
        <FaLinkedinIn className="header-social-item" />
      </a>
      <a href="https://www.youtube.com/@TheCodeCritical" target="_blank">
        <FaYoutube className="header-social-item" />
      </a>
      <a href="https://github.com/realChakrawarti">
        <FaGithub className="header-social-item" />
      </a>
      <a href="mailto:chakrawarti.anupam@gmail.com" target="_blank">
        <SiGmail className="header-social-item" />
      </a>
    </div>
  );
}
