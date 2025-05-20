interface IProps {
  sectionName: string;
  title: string;
  description?: string;
}
export default function CorporateHeading({
  sectionName,
  title,
  description,
}: IProps) {
  return (
    <div className="w-full space-y-12">
      <div className="space-y-2">
        <div className="relative">
          <div
            className="absolute top-0 left-0 -translate-x-1/2 size-[30px] bg-web-light rotate-[135deg]"
            style={{ clipPath: "polygon(50% 0%, 100% 82%, 0% 82%)" }}
          />
          <p className="text-web-main font-bold text-[13px] md:text-base -tracking-[0.02em] relative z-10">
            {sectionName}
          </p>
        </div>
        <p className="font-bold text-web-dark text-xl md:text-[32px] -tracking-[0.02em] whitespace-pre-line">
          {title}
        </p>
      </div>
      {description && (
        <p className="text-web-dark text-base-tracking-[0.02em] whitespace-pre-line">
          {description}
        </p>
      )}
    </div>
  );
}
