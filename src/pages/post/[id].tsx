import type { NextPage } from "next";
import Head from "next/head";

import { useRouter } from "next/router";

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>POSTs</title>
        <meta name="description" content="Post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>posts - {id}</h1>
      </div>
    </div>
  );
};

export default Post;
