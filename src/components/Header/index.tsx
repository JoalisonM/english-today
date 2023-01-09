import Image from "next/image";


import Switch from "../Switch";
import { HeaderContainer } from "./styles";
import logoImg from "../../assets/logo.svg";
import ActiveLink from "../ActiveLink";

export default function Header() {
  return (
    <HeaderContainer>
      <Image
        src={logoImg}
        alt=""
      />
      <nav>
        <ActiveLink activeClassName="active" href="/">
          <span>Home</span>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/contents" prefetch>
          <span>Contents</span>
        </ActiveLink>
      </nav>
      <Switch />
    </HeaderContainer>
  );
}