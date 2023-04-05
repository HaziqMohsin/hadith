"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

const Index = ({ id }: Props) => {
  const router = useRouter();
  const [data, setData] = useState<IResponse>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.hadith.gading.dev/books/${id}?range=1-200`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="max-w-lg mx-auto my-4">
      <div
        className="underline text-gray-400 text-sm cursor-pointer"
        onClick={() => router.push("/")}
      >
        Kembali
      </div>
      {data?.hadiths.map((v, i) => {
        return (
          <div key={i} className="flex flex-col gap-2 my-4">
            <div className="text-3xl">{v.arab}</div>
            <div className="leading-7">{v.id}</div>
          </div>
        );
      })}
    </div>
  );
};

interface IResponse {
  number: number;
  id: string;
  arab: string;
}

export default Index;
