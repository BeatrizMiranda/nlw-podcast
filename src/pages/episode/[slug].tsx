import React from "react";
import { useRouter } from "next/router";

const Episode = () => {
  const router = useRouter();

  return <div>{router.query.slug}</div>;
};

export default Episode;
