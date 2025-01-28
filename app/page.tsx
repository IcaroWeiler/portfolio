"use client";
import Button from "@/components/Button/button";
import Link from "next/link";

export default function Home() {
  const seeResume = () => {
    window.open(
      "https://drive.google.com/file/d/1GSbvzkFiF1YQtrdxOwcVEIu4o5VF23qQ/view?usp=drive_link",
      "_newtab"
    );
  };

  return (
    <main className="">
      <div className="title fade-in animate-delay-500">
        <h1 className="inline text-[#808080]">I&apos;m </h1>

        <h1 className="inline">Icaro</h1>
      </div>

      <div className="mb-10">
        <span className="text-2xl text-[#808080] fade-in animate-delay-1000">
          a front-end developer focused on creating web and mobile applications.
          In addition to my professional work, I enjoy playing and developing
          games as a personal hobby.
        </span>
      </div>

      <div className="flex gap-4 fade-in animate-delay-1500">
        <Button type="primary" onClick={() => seeResume()}>
          See my resume
        </Button>
        <Link href="/contact">
          <Button type="primary" onClick={() => console.log("b")}>
            Get in touch
          </Button>
        </Link>
      </div>
    </main>
  );
}
