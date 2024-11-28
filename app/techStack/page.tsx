"use client";
import Card from "@/components/Card/card";

import { languages } from "./languages";
import { frameworks } from "./frameworks";
import { others } from "./others";

export default function TechStack() {
  return (
    <main className="">
      <div className="title fade-in animate-delay-500">
        <h1 className="inline">Tech stack</h1>
        <p className="text-[#808080] text-[24px]">
          Just some tools i have some experience with.
        </p>
      </div>

      <div className="mb-10 mt-10">
        <h2 className="text-[48px] subtitle mb-8 fade-in animate-delay-1000">
          Frameworks
        </h2>
        <div className="flex flex-wrap gap-4 mb-8 fade-in animate-delay-1000">
          {frameworks.map((c) => (
            <Card
              title={c.title}
              subtitle={c.subtitle}
              key={c.title}
              image={c.image}
            />
          ))}
        </div>

        <h2 className="text-[48px] subtitle mb-8 fade-in animate-delay-1500">
          Languages
        </h2>
        <div className="flex flex-wrap gap-4 mb-8 fade-in animate-delay-1500">
          {languages.map((l) => (
            <Card
              title={l.title}
              subtitle={l.subtitle}
              key={l.title}
              image={l.image}
            />
          ))}
        </div>

        <h2 className="text-[48px] subtitle mb-8 fade-in animate-delay-2000">
          Others
        </h2>
        <div className="flex flex-wrap gap-4 mb-8 fade-in animate-delay-2000">
          {others.map((o) => (
            <Card
              title={o.title}
              subtitle={o.subtitle}
              key={o.title}
              image={o.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
