import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
export default function FirstPost() {
  const handleOnClick = async () => {
    const res = await fetch(
      "https://test-next-app-sfbxgclsch.cn-hangzhou.fcapp.run"
    );
    console.log(res);
    const content = await res.json();
    console.log(content);
  };
  return (
    <>
      <Head>
        <title>first post</title>
      </Head>
      <h1>first post</h1>
      <h2>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </h2>
      <Test>测试</Test>
      <button onClick={handleOnClick}>get按钮</button>
      <Image
        // src="/images/profile.jpg"
        src="/images/profile.jpg"
        alt="your name"
        height={144}
        width={144}
      />
    </>
  );
}
const Test = styled.div`
  color: green;
`;
