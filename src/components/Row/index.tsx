import { ReactNode } from "react";
import { RowDiv } from "./styles";

interface Props {
  children: ReactNode;
}

export default function Row({ children }: Props) {
  return <RowDiv>{children}</RowDiv>;
}
