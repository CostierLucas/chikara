import styles from './footer.module.css';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsTelegram, BsDiscord } from 'react-icons/bs';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className="relative z-10 pt-[120px]">
      <div className="container w-full">
        <div className="flex items-center justify-center space-x-3 mb-16">
          <a
            href="https://twitter.com/CHIKARA_P2E?t=GufHF2bs6-jdPgvxWygfzg&s=09"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle color="#FFF" size={30} />
          </a>
          <a
            href="https://t.me/+ShysjgLvjZA1MmE8"
            target="_blank"
            rel="noreferrer"
          >
            <BsTelegram color="#FFF" size={26} />
          </a>
          <a href="/">
            <BsDiscord color="#FFF" size={30} />
          </a>
        </div>
        <div
          className="wow fadeInUp border-t border-[#3f3f3f] py-7 text-center dark:border-[#3f3f3f]"
          data-wow-delay="0s"
        >
          <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
            © Chikara - all Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
