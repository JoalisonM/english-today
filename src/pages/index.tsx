import bannerImage from "../assets/banner.png";
import { HomeContainer, HomeContent, ImageContent } from "../styles/pages/home";

export default function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <h1>Your next step starts here.</h1>
        <p>With the <span>English today</span> you will learn English <span>easily</span> every day.</p>
      </HomeContent>
      <ImageContent
        src={bannerImage}
        alt=""
        width={500}
        height={657.5}
      />
    </HomeContainer>
  )
}
