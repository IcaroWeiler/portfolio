"use client";
import Image from "next/image";
import Link from "next/link";

interface Question {
  q: string;
  a: string;
  url?: string;
}

export default function License() {
  const list: Question[] = [
    {
      q: "did you code this by yourself?",
      a: "Yes, i did follow a design guide, but all the components inside the code were made from scratch by me",
    },

    {
      q: "did you use any framework?",
      a: "Yes, this site was built using NextJS and Tailwind",
    },
  ];

  const renderQuestions = () => {
    return list.map((question, index) => (
      <div key={index} className="mb-10">
        <p className="text-[#808080] font-bold">{question.q.toUpperCase()}</p>
        <span className="text-[#808080]">{question.a} </span>{" "}
        {question.url ? (
          <span
            className="text-[#808080] underline cursor-pointer"
            onClick={() => window.open(question.url)}
          >
            {question.url}
          </span>
        ) : (
          <></>
        )}
      </div>
    ));
  };

  return (
    <div className="">
      <main className="">
        <h1 className="text-[80px] text-white mb-8">About this website</h1>
        {renderQuestions()}
        <p className="text-[#808080] font-bold">
          WHERE CAN I FIND THE DESIGN GUIDE?
        </p>
        <p
          onClick={() =>
            window.open(
              "https://www.figma.com/community/file/1266863403759514317"
            )
          }
          className="text-[#808080] underline cursor-pointer"
        >
          Here.
        </p>

        <span className="text-[#808080]">
          This design is called Geist, was made by Eihab Khan and is licensed
          under{" "}
        </span>

        <span
          onClick={() =>
            window.open("https://creativecommons.org/licenses/by/4.0/")
          }
          className="text-[#808080] underline cursor-pointer"
        >
          CC BY 4.0 License.
        </span>
      </main>
    </div>
  );
}
