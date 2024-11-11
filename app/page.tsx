"use client";
import Button from "@/components/Button/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="title fade-in animate-delay-500">
          <h1 className="inline text-[#808080]">I'm </h1>

          <h1 className="inline">Icaro</h1>
        </div>

        <div className="mb-10">
          <span className="text-2xl text-[#808080] fade-in animate-delay-1000">
            a front-end developer focused on creating web and mobile
            applications. In addition to my professional work, I enjoy playing
            and developing games as a personal hobby.
          </span>
        </div>

        <div className="flex gap-4 fade-in animate-delay-1500">
          <Button type="primary" onClick={() => console.log("a")}>
            See my resume
          </Button>
          <Button type="primary" onClick={() => console.log("b")}>
            Get in touch
          </Button>
        </div>
      </main>
    </div>
  );
}
