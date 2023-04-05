"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Props = {};

const Index = (props: Props) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.hadith.gading.dev/books")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="grid grid-cols-3 gap-3">
      {data?.data.map((v, i) => {
        return (
          <Link href={`/books/${v.id}`} key={i}>
            <div className="p-4 border border-solid border-gray-400 rounded-lg w-[150px] cursor-pointer">
              <div className="text-black">{v.name}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Index;
