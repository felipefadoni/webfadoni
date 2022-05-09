import { ReactNode } from "react";
import { ContainerDiv } from "./styles";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return <ContainerDiv>{children}</ContainerDiv>;
}
