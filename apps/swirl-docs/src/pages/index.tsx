import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const Home: NextPage = ({}: any) => {
  return (
    <>
      <Head>
        <title>Swirl | NextJS Bootstrap</title>
      </Head>
      <main className="flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="text-6xl font-bold">
          Storybook Doc dynamically sourced 🚀
        </h1>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<{}> = async () => {
  return { props: {} };
};

export default Home;
