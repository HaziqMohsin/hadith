import React from "react";
import Books from "../../../components/Books";

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params }: Props) => {
  return (
    <div className="p-4">
      <Books id={params.id} />
    </div>
  );
};

export default Page;
