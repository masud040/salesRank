"use client";

import CountUp from "react-countup";

export default function Count({ number }) {
  return <CountUp end={number} duration={2} />;
}
