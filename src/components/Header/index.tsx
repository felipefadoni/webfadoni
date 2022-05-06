import logoWebfadoni from "@/assets/logo-webfadoni.svg";
import Image from "next/image";
import Link from "next/link";
import { MdSearch } from "react-icons/md";
import { RiMenu5Line } from "react-icons/ri";
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <div className="center-header">
        <div className="header-left">
          <button title="Menu">
            <RiMenu5Line size={28} />
          </button>
          <div className="logo">
            <Link href="/">
              <a title="Voltar para o início">
                <Image
                  src={logoWebfadoni}
                  alt="WebFadoni"
                  width={163}
                  height={48}
                  loading="lazy"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="header-right">
          <button title="Buscar">
            <MdSearch size={32} />
          </button>
          <div className="search">
            <input type="text" placeholder="Buscar" />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}
