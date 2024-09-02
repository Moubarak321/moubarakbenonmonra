import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://wa.me/22990838919?text=Hello%20MrBull%20!!!%20Je%20voudrais..." className="logo">
        <span>Mr</span>
        <span>Bull</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
  {/* <span>❤️</span>  */}
        </p>
      </div>

      <div className="social-media">
        <a
          href="www.linkedin.com/in/moubarak-benon-monra-2104221bb"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Moubarak321/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://wa.me/22990838919?text=Hello%20MrBull%20!!%20Je%20voudrais..."
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        {/* <a
          href="https://t.me/CodeVinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a> */}
        {/* <a
          href="https://www.instagram.com/vinayaksingh.in"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a> */}
     
      </div>
    </Container>
  )
}
