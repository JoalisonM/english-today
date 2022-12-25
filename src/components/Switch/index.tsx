import * as SwitchRadix from '@radix-ui/react-switch';
import { Sun, Moon } from "phosphor-react";

import { SwitchContainer, SwitchRoot, SwitchThumb } from "./styles";

export default function Switch() {
  return (
    <SwitchContainer>
      <Sun size={24} color="#FFF" />
      <SwitchRoot>
        <SwitchThumb />
      </SwitchRoot>
      <Moon size={24} color="#FFF" />
    </SwitchContainer>
  );
}