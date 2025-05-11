import Image from "next/image";

export default function PositionCard() {
  return (
    <div className="font-shippori-mincho space-y-4 px-[35.5px] mlg:px-0">
      <p className="flex items-center gap-4 text-xl">
        <span className="text-web-light">01</span>
        <span className="text-web-dark font-bold">見積もり・受注</span>
      </p>
      <hr />
      <p className="text-[13px] mlg:text-sm text-web-dark font-medium">
        要件をしっかり理解し、最適な見積もりを作成。お客様の課題解決を目指して、スピーディーに提案を行います。
      </p>

      <div className="relative aspect-video">
        <Image src="/images/capability-1.png" alt="position-card" fill />
      </div>
    </div>
  );
}
