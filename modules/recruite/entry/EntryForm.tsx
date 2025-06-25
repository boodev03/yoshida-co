"use client";

import { SmallCheck } from "@/components/icons/Check";
import { Button } from "@/components/ui/button";
import { CustomCheckbox } from "@/components/ui/custom-checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";
import * as z from "zod";
import ConfirmStep from "./ConfirmStep";

// Form Schema
const formSchema = z.object({
  type: z.enum(["新卒採用", "キャリア採用"], {
    required_error: "種別を選択してください。",
  }),
  jobType: z
    .string({
      required_error: "応募職種を選択してください。",
    })
    .min(1, "応募職種を選択してください。"),

  name: z
    .string({
      required_error: "お名前を入力してください。",
    })
    .min(1, "お名前を入力してください。"),

  furigana: z
    .string({
      required_error: "ふりがなを入力してください。",
    })
    .min(1, "ふりがなを入力してください。"),

  email: z
    .string({
      required_error: "メールアドレスを入力してください。",
    })
    .min(1, "メールアドレスを入力してください。")
    .email("正しいメールアドレス形式で入力してください。"),

  phone: z
    .string({
      required_error: "電話番号を入力してください。",
    })
    .min(1, "電話番号を入力してください。")
    .regex(/^\d{2,4}-\d{2,4}-\d{4}$/, "正しい電話番号形式で入力してください。"),

  message: z.string().optional(),

  privacy: z
    .boolean({
      required_error: "プライバシーポリシーに同意してください。",
    })
    .refine((val) => val === true, "プライバシーポリシーに同意してください。"),
});

interface StepHeading {
  title: string;
  description: string;
}

const stepHeadings: StepHeading[] = [
  {
    title: "エントリー",
    description: `ご応募希望の方は、下記入力フォームに必要事項をご記入のうえ「送信」ボタンをクリックしてください。
自動処理で返信メールをお送りしたうえで、後ほどあらためてメールまたはお電話で折り返しご連絡させて頂きます。
なお、お送りいただきました内容は、弊社の掲げる個人情報保護方針に沿って管理し、お客様の同意なく第三者に開示・提供することはございません。`,
  },

  {
    title: "エントリー内容確認画面",
    description: `以下の内容で送信してよろしいでしょうか？ご確認ください。`,
  },
  {
    title: "エントリーが完了しました",
    description: `この度は、お問い合わせいただき誠にありがとうございました。
    お送りいただきました内容を確認の上、担当者よりご連絡させていただきます。お急ぎの場合はお電話にてご連絡ください。

また、ご確認メールが届かない場合は、フォームご入力のメールアドレスの誤りがある可能性がございます。
その際はお手数ですが、もう一度フォームよりお問合せいただくか、お電話にてお問い合わせくださいますようお願い申し上げます。
また、まれに迷惑メールフォルダへ入っている場合がございますので、合わせてご確認ください。`,
  },
];

const LabelCondition = (require: { require?: boolean }) => {
  return (
    <div
      className={cn(
        "bg-web-light  rounded-[1px]",
        require.require && "bg-web-vivid"
      )}
    >
      <p className="text-normal text-[8px] md:text-[12px] text-white py-1 px-2 leading-[9px] font-bold relative -top-[1px]">
        {require.require ? "必須" : "任意"}
      </p>
    </div>
  );
};

export default function EntryForm() {
  const formControlClass = "flex flex-col md:flex-row gap-6";
  const labelClass = cn(
    "w-full md:w-1/4 flex items-center gap-2",
    "text-jp-p2 font-bold"
  );

  const contentRef = useRef<HTMLDivElement | null>(null);

  // Form definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "新卒採用",
      jobType: "エンジニア",
      name: "田中太郎",
      furigana: "たなかたろう",
      email: "tanaka@example.com",
      phone: "090-1234-5678",
      message: "よろしくお願いいたします。",
      privacy: false,
    },
  });

  const [fileError, setFileError] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    size: string;
  } | null>(null);

  // Add state for step
  const [step, setStep] = useState<number>(1);

  // Update the onSubmit function and add state for form data
  const [formValues, setFormValues] = useState<z.infer<
    typeof formSchema
  > | null>(null);

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (step === 1) {
      setFormValues(values); // Store form values
      setStep(2);
      if (contentRef.current) {
        const yOffset = -100;
        const y =
          contentRef.current.getBoundingClientRect().top +
          window.scrollY +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      return;
    }
    // Handle final form submission
    console.log("Final submission:", values);
  }

  // Add handleBack function
  const onConfirmStepBack = () => {
    setStep(1);
    if (contentRef.current) {
      const yOffset = -100;
      const y =
        contentRef.current.getBoundingClientRect().top +
        window.scrollY +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const onConfirmStepSubmit = () => {
    setStep(3);
    if (contentRef.current) {
      const yOffset = -100;
      const y =
        contentRef.current.getBoundingClientRect().top +
        window.scrollY +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const onPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove all hyphens
    let value = e.target.value.replace(/-/g, "");

    // Remove all non-digit characters
    value = value.replace(/[^\d]/g, "");

    // Format according to Japanese phone number format
    if (value.length > 0) {
      // Format: XXX-XXXX-XXXX
      if (value.length <= 3) {
        // Only show first 3 digits
      } else if (value.length <= 7) {
        // Format: XXX-XXXX
        value = `${value.slice(0, 3)}-${value.slice(3)}`;
      } else {
        // Full format: XXX-XXXX-XXXX
        value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(
          7,
          11
        )}`;
      }
    }

    return value;
  };

  return (
    <section className="pt-[82px] mlg:pt-[90px]">
      {/* Content */}
      {/* px-6 mlg:px-[95px] py-[60px] mlg:py-[120px] space-y-12 shadow-[4px_4px_12px_0px_#0000001A] bg-white */}
      <div
        ref={contentRef}
        className="container mx-auto mt-[60px] md:mt-[120px] mb-[60px] md:mb-12"
      >
        <div className="space-y-8 md:space-y-12">
          <h2 className="text-jp-h2 text-web-dark text-center">
            {stepHeadings[step - 1].title}
          </h2>
          <p className="text-jp-p2 text-web-dark text-center whitespace-pre-line">
            {stepHeadings[step - 1].description}
          </p>
        </div>

        {/* Form */}
        {step === 1 && (
          <div className="my-12 mlg:my-[120px] px-6 mlg:px-[95px] py-[60px] mlg:py-[120px] space-y-12 shadow-[4px_4px_12px_0px_#0000001A] bg-white">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 md:space-y-8"
              >
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className={formControlClass}>
                      <Label className={labelClass}>
                        種別
                        <LabelCondition require />
                      </Label>
                      <div className="flex-1 flex flex-col gap-2">
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex items-center gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="新卒採用" id="shinsotsu" />
                              <Label
                                htmlFor="shinsotsu"
                                className="text-web-dark"
                              >
                                新卒採用
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="キャリア採用"
                                id="career"
                                className="text-web-vivid"
                              />
                              <Label htmlFor="career" className="text-web-dark">
                                キャリア採用
                              </Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage className="text-sm" />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="jobType"
                  render={({ field }) => (
                    <FormItem className={formControlClass}>
                      <Label className={labelClass}>
                        応募職種 必須
                        <LabelCondition require />
                      </Label>
                      <div className="flex-1 flex flex-col gap-2">
                        <FormControl>
                          <Input placeholder="営業職" {...field} />
                        </FormControl>
                        <FormMessage className="text-sm" />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className={formControlClass}>
                      <Label className={labelClass}>
                        お名前
                        <LabelCondition require />
                      </Label>
                      <div className="flex-1 flex flex-col gap-2">
                        <FormControl>
                          <Input placeholder="吉田　太郎" {...field} />
                        </FormControl>
                        <FormMessage className="text-sm" />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="furigana"
                  render={({ field }) => (
                    <FormItem className={formControlClass}>
                      <Label className={labelClass}>
                        ふりがな
                        <LabelCondition require />
                      </Label>
                      <div className="flex-1 flex flex-col gap-2">
                        <FormControl>
                          <Input placeholder="よしだ　たろう" {...field} />
                        </FormControl>
                        <FormMessage className="text-sm" />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className={formControlClass}>
                      <Label className={labelClass}>
                        メールアドレス
                        <LabelCondition require />
                      </Label>
                      <div className="flex-1 flex flex-col gap-2">
                        <FormControl>
                          <Input placeholder="yoshida@○○○○○.com" {...field} />
                        </FormControl>
                        <FormMessage className="text-sm" />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className={formControlClass}>
                      <Label className={labelClass}>
                        電話番号
                        <LabelCondition require />
                      </Label>
                      <div className="flex-1 flex flex-col gap-2">
                        <FormControl>
                          <Input
                            placeholder="123-4567-8900"
                            {...field}
                            value={field.value}
                            onChange={(e) => {
                              const value = onPhoneNumberChange(e);
                              field.onChange(value);
                            }}
                            maxLength={13}
                          />
                        </FormControl>
                        <FormMessage className="text-sm" />
                      </div>
                    </FormItem>
                  )}
                />

                {/* Dropzone */}
                <div className={formControlClass}>
                  <Label className={labelClass}>
                    添付ファイル
                    <LabelCondition require />
                  </Label>

                  <div className="space-y-2 flex-1">
                    <Dropzone
                      onDrop={(acceptedFiles) => {
                        const file = acceptedFiles[0];
                        if (file && file.size > 1024 * 1024) {
                          const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
                          setFileError(
                            `ファイルサイズが${sizeMB}MBを超えています。`
                          );
                          setUploadedFile(null);
                        } else if (file) {
                          setFileError(null);
                          // Convert size to KB and format it
                          const sizeKB = Math.round(file.size / 1024);
                          setUploadedFile({
                            name: file.name,
                            size: `${sizeKB}KB`,
                          });
                          console.log(acceptedFiles);
                        }
                      }}
                      onDropRejected={() => {
                        setFileError("ファイルサイズが1MBを超えています。");
                        setUploadedFile(null);
                      }}
                      maxSize={1024 * 1024}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <section className="border border-dashed border-line-gray rounded-[3px] flex justify-center items-center h-[120px]">
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p className="text-normal text-[13px] md:text-[14px] text-line-gray">
                              <span className="text-web-vivid cursor-pointer">
                                ファイルを追加
                              </span>
                              またはファイルをドロップ
                            </p>
                          </div>
                        </section>
                      )}
                    </Dropzone>
                    <div className="space-y-1">
                      {fileError ? (
                        <p className="text-normal text-[13px] md:text-[14px] text-brand-accent">
                          {fileError}
                        </p>
                      ) : uploadedFile ? (
                        <p className="flex gap-1 items-center text-normal text-[13px] md:text-[14px] text-web-dark">
                          <SmallCheck />{" "}
                          {`${uploadedFile.name}(${uploadedFile.size})`}
                        </p>
                      ) : (
                        <p className="text-normal text-[13px] md:text-[14px] text-web-dark">
                          ファイル上限は、1ファイルにつき1MBです。
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className={formControlClass}>
                      <Label className={labelClass}>
                        備考・ご質問
                        <LabelCondition />
                      </Label>
                      <div className="flex-1 flex flex-col gap-2">
                        <FormControl>
                          <Textarea
                            placeholder="備考やご質問がございましたらご記入ください。"
                            className="min-h-[371px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-sm" />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="my-12 md:mt-20 md:mb-6 flex flex-col gap-2 items-center">
                      <FormControl>
                        <CustomCheckbox
                          checked={field.value}
                          onChange={() => field.onChange(!field.value)}
                        >
                          <p className="text-normal underline text-[13px] md:text-[14px] text-web-vivid">
                            プライバシーポリシー
                          </p>
                          <p className="text-normal text-[13px] md:text-[14px] text-web-dark">
                            に同意する。
                          </p>
                        </CustomCheckbox>
                      </FormControl>
                      <FormMessage className="text-sm" />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center pt-20">
                  <Button
                    type="submit"
                    className="w-full md:w-auto md:px-[120px] rounded-[5px] h-[72px]"
                  >
                    確認画面に進む
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}

        {step === 2 && formValues && (
          <ConfirmStep
            formData={formValues} // Pass stored values instead of getValues()
            uploadedFile={uploadedFile}
            onBack={onConfirmStepBack}
            onSubmit={onConfirmStepSubmit}
          />
        )}
      </div>
    </section>
  );
}
