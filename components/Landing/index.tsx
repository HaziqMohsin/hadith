"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Props = {};

const Index = (props: Props) => {
  const [data, setData] = useState<IResponse[]>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.hadith.gading.dev/books")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="grid grid-cols-3 gap-3">
      {data?.map((v, i) => {
        return (
          <Link href={`/books/${v.id}`} key={i}>
            <div className="p-4 border border-solid border-gray-400 rounded-lg cursor-pointer flex flex-auto h-full justify-center items-center text-center">
              <div className="text-black">{v.name}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

interface IResponse {
  available: number;
  id: string;
  name: string;
}

export default Index;
