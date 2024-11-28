"use client";
import Image from "next/image";

export interface CardProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function Card({ image, title, subtitle }: CardProps) {
  return (
    <div className="card w-[330px] h-[300px] rounded-3xl flex flex-col items-center justify-between p-6">
      <div className="flex-grow flex items-center justify-center">
        <Image
          width={114}
          height={114}
          src={image}
          alt="Card image"
          className="object-contain"
        />
      </div>

      <div className="w-full flex justify-between items-center">
        <p className="text-center mt-4 text-sm text-xl title">{title}</p>
        <p className="text-center mt-4 text-sm text-[#808080]">{subtitle}</p>
      </div>
    </div>
  );
}
