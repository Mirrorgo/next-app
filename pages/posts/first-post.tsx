import Image from "next/image";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>first post</h1>
      <h2>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </h2>

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
