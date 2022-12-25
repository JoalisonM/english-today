import Image from "next/image";

import bannerImage from "../assets/banner.png";
import { HomeContainer, HomeContent } from "../styles/pages/home";

export default function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <h1>Your next step starts here.</h1>
        <p>With the <span>English today</span> will you learn English <span>easily</span> every day.</p>
      </HomeContent>
      <Image src={bannerImage} alt="" width={500} height={657.5} />
    </HomeContainer>
  )
}
