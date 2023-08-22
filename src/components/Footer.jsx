import { BsDiscord, BsLinkedin, BsYoutube, BsInstagram, BsGithub } from 'react-icons/bs';

export default function Footer() {
  let iconStyle = "text-xl lg:text-3xl mx-6 text-white hover:text-black duration-150"
  return (
    <div className="flex justify-center bg-gradient-to-r from-[#48d1cc] to-blue-600 h-20 py-8">

      <a href="https://discord.gg/xnjdcgteKR"><BsDiscord className={iconStyle} /></a>
      <a href="https://www.linkedin.com/company/quantillinois/"><BsLinkedin className={iconStyle} /></a>
      <a href="https://www.youtube.com/@quantillinois"><BsYoutube className={iconStyle} /></a>
      <a href="https://www.instagram.com/quantillinois/"><BsInstagram className={iconStyle} /></a>
      <a href="https://github.com/quantillinois/"><BsGithub className={iconStyle} /></a>

    </div>
  )
}