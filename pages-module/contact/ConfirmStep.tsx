"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { SmallCheck } from "@/components/icons/Check";

interface ConfirmStepProps {
  formData: {
    category: string;
    company?: string | undefined;
    name: string;
    phone: string;
    email: string;
    message: string;
    privacy: boolean;
  };
  uploadedFile?: {
    name: string;
    size: string;
  } | null;
  onBack: () => void;
  onSubmit: () => void;
}

const LabelCondition = (require: { require?: boolean }) => {
  return (
    <div
      className={cn(
        "bg-web-light rounded-full",
        require.require && "bg-web-vivid"
      )}
    >
      <p className="text-normal text-[8px] md:text-[12px] text-white py-1 px-2 leading-[9px] font-bold relative -top-[1px]">
        {require.require ? "必須" : "任意"}
      </p>
    </div>
  );
};

export default function ConfirmStep({
  formData,
  uploadedFile,
  onBack,
  onSubmit,
}: ConfirmStepProps) {
  const formControlClass = "flex flex-col md:flex-row gap-6";
  const labelWrapperClass = "w-full md:w-1/4 flex items-center gap-2";
  const valueClass = "flex-1 text-jp-p2 text-web-dark";
  if (!formData) return null;
  return (
    <div className="space-y-6 md:space-y-8">
      {/* 1. Category */}
      <div className={formControlClass}>
        <div className={labelWrapperClass}>
          <Label asChild>
            <span className="text-jp-p2 font-bold">お問い合わせ区分</span>
          </Label>
          <LabelCondition require />
        </div>
        <p className={valueClass}>{formData.category}</p>
      </div>

      {/* 2. Company */}
      <div className={formControlClass}>
        <div className={labelWrapperClass}>
          <Label asChild>
            <span className="text-jp-p2 font-bold">会社名</span>
          </Label>
          <LabelCondition />
        </div>
        <p className={valueClass}>{formData.company?.trim() || "---"}</p>
      </div>

      {/* 3. Name */}
      <div className={formControlClass}>
        <div className={labelWrapperClass}>
          <Label asChild>
            <span className="text-jp-p2 font-bold">お名前(フルネーム)</span>
          </Label>
          <LabelCondition require />
        </div>
        <p className={valueClass}>{formData.name}</p>
      </div>

      {/* 4. Phone */}
      <div className={formControlClass}>
        <div className={labelWrapperClass}>
          <Label asChild>
            <span className="text-jp-p2 font-bold">電話番号</span>
          </Label>
          <LabelCondition require />
        </div>
        <p className={valueClass}>{formData.phone}</p>
      </div>

      {/* 5. Email */}
      <div className={formControlClass}>
        <div className={labelWrapperClass}>
          <Label asChild>
            <span className="text-jp-p2 font-bold">メールアドレス</span>
          </Label>
          <LabelCondition require />
        </div>
        <p className={valueClass}>{formData.email}</p>
      </div>

      {/* 6. Message */}
      <div className={formControlClass}>
        <div className={labelWrapperClass}>
          <Label asChild>
            <span className="text-jp-p2 font-bold">お問い合わせ内容</span>
          </Label>
          <LabelCondition require />
        </div>
        <p className={cn(valueClass, "whitespace-pre-wrap")}>
          {formData.message}
        </p>
      </div>

      {/* 7. File Upload */}
      <div className={formControlClass}>
        <div className={labelWrapperClass}>
          <Label asChild>
            <span className="text-jp-p2 font-bold">添付ファイル</span>
          </Label>
        </div>
        <div className={valueClass}>
          {uploadedFile ? (
            <p className="flex gap-1 items-center text-jp-p2">
              <SmallCheck /> {`${uploadedFile.name}(${uploadedFile.size})`}
            </p>
          ) : (
            <p className="text-jp-p2">---</p>
          )}
        </div>
      </div>

      {/* 8. Privacy Policy */}
      <div className={formControlClass}>
        <div className={labelWrapperClass}>
          <Label asChild>
            <span className="text-jp-p2 font-bold">プライバシーポリシー</span>
          </Label>
        </div>
        <p className={valueClass}>同意する</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-12">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="w-full md:w-auto md:px-[120px]"
        >
          修正する
        </Button>
        <Button
          type="button"
          onClick={onSubmit}
          className="w-full md:w-auto md:px-[120px]"
        >
          送信する
        </Button>
      </div>
    </div>
  );
}
