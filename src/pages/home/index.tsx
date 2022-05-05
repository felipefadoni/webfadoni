import Button from "@/components/Button";
import Header from "@/components/Header";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <Link href="/post/010101">post - 01 - 010101</Link>
        </div>
        <div>
          <Link href="/post/asdasdasd">post - 02 - asdasd</Link>
        </div>
        <div>
          <Link href="/post/asdasdasdasdasd">post - 03 - asdasdasd</Link>
        </div>
        <div>
          <Button>Teste OK</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
