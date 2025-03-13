import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>My Homepage, alright</h1>
      <Image
        className="rounded-full"
        src="/SteffenMFureli.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}
