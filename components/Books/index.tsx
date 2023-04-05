"use client";
import React, { useState, useEffect } from "react";

type Props = {
  id: string;
};

const Index = ({ id }: Props) => {
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
      {data?.hadiths.map((v, i) => {
        return (
          <div key={i} className="flex flex-col gap-2 my-4">
            <div className="text-xl">{v.arab}</div>
            <div>{v.id}</div>
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
