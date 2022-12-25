import Image from "next/image";


import Switch from "../Switch";
import { HeaderContainer } from "./styles";
import logoImg from "../../assets/logo.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <Image
        src={logoImg}
        alt=""
      />
      <nav>
        <a className="active" href="">Home</a>
        <a href="">Content</a>
      </nav>
      <Switch />
    </HeaderContainer>
  );
}