"use client";
import RecruitePosition from "./RecruitePosition";

export default function RecruitePositionList() {
  return (
    <div className="wrapper">
      <RecruitePosition index={1} />
      <RecruitePosition index={2} />
      <RecruitePosition index={3} />
      <RecruitePosition index={4} />
      <RecruitePosition index={5} />
    </div>
  );
}
