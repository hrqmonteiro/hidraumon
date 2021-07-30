import { RiFacebookFill, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";

export default function SocialLinks() {
  return (
    <>
      <div id="social-links">
        <ul>
          <li data-aos="fade-down" data-aos-delay="700">
            <a href="https://www.facebook.com/hidraumon.ind" target="_blank">
              <RiFacebookFill />
            </a>
          </li>
          <li data-aos="fade-down" data-aos-delay="750">
            <a href="https://www.instagram.com/hidraumon/" target="_blank">
              <RiInstagramLine />
            </a>
          </li>
          <li data-aos="fade-down" data-aos-delay="800">
            <a href="https://www.linkedin.com/in/hidraumon-maquinas-hidraulicas-3a862298/" target="_blank"><RiLinkedinFill /></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>
    </>
  );
}
