"use client";

import { SmallCheck } from "@/components/icons/Check";
import { ChevronRight } from "@/components/icons/ChervonRight";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";
import * as z from "zod";
import ConfirmStep from "./ConfirmStep";

// Form Schema
const formSchema = z.object({
  category: z
    .string({
      required_error: "お問い合わせ区分を選択してください。",
    })
    .min(1, "お問い合わせ区分を選択してください。"),

  company: z.string().optional(),

  name: z
    .string({
      required_error: "お名前を入力してください。",
    })
    .min(1, "お名前を入力してください。"),

  phone: z
    .string({
      required_error: "電話番号を入力してください。",
    })
    .min(1, "電話番号を入力してください。")
    .regex(/^\d{2,4}-\d{2,4}-\d{4}$/, "正しい電話番号形式で入力してください。"),

  email: z
    .string({
      required_error: "メールアドレスを入力してください。",
    })
    .min(1, "メールアドレスを入力してください。")
    .email("正しいメールアドレス形式で入力してください。"),

  message: z
    .string({
      required_error: "お問い合わせ内容を入力してください。",
    })
    .min(1, "お問い合わせ内容を入力してください。"),

  privacy: z
    .boolean({
      required_error: "プライバシーポリシーに同意してください。",
    })
    .refine((val) => val === true, "プライバシーポリシーに同意してください。"),
});

const LabelCondition = (require: { require?: boolean }) => {
  return (
    <div
      className={cn(
        "bg-web-light  rounded-full",
        require.require && "bg-web-vivid"
      )}
    >
      <p className="text-normal text-[8px] md:text-[12px] text-white py-1 px-2 leading-[9px] font-bold relative -top-[1px]">
        {require.require ? "必須" : "任意"}
      </p>
    </div>
  );
};

export default function Contact() {
  const formControlClass = "flex flex-col md:flex-row gap-6";
  const labelClass = cn(
    "w-full md:w-1/4 flex items-center gap-2",
    "text-jp-p2 font-bold"
  );

  // Form definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      company: "",
      name: "",
      phone: "",
      email: "",
      message: "",
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
      return;
    }
    // Handle final form submission
    console.log("Final submission:", values);
  }

  // Add handleBack function
  function handleBack() {
    setStep(1);
  }

  return (
    <>
      {step === 2 && formValues ? (
        <ConfirmStep
          formData={formValues} // Pass stored values instead of getValues()
          uploadedFile={uploadedFile}
          onBack={handleBack}
          onSubmit={() => {
            // Handle final submission here
            console.log("Final submission:", formValues);
          }}
        />
      ) : (
        <section className="pt-[82px] mlg:pt-[90px]">
          {/* Decor */}
          <div className="relative mt-10">
            <div
              style={{
                clipPath:
                  "polygon(20% 0%, 100% 0%, 66.67% 100%, 0% 100%, 0% 60%)",
              }}
              className="bg-web-main h-[90%] w-1/2 absolute top-[10%] left-0 z-10"
            >
              <p className="flex flex-col gap-4 text-white absolute bottom-[120px] left-1/2 -translate-x-1/2">
                <span className="section-title">NEWS</span>
                <span className="text-jp-h1">新着記事</span>
              </p>
            </div>
            <div className="flex-1 flex flex-col items-end">
              <div className="relative aspect-video w-[68.88889%]">
                <Image src="/images/achivement.png" alt="blog-decor" fill />
              </div>

              <div className="hidden md:flex items-center gap-2 container mx-auto justify-end mt-4 text-web-main">
                <p className="text-normal text-sm text-web-dark font-normal">
                  Top
                </p>
                <ChevronRight />
                <p className="text-normal text-sm text-web-dark font-normal">
                  新着記事
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto mt-[60px] md:mt-[120px]">
            <div className="space-y-8 md:space-y-12">
              <h2 className="text-jp-h2 text-web-dark">お問い合わせフォーム</h2>
              <p className="text-jp-p2 text-web-dark text-center">{`弊社へお問い合わせの際は、下記入力フォームに必要事項をご記入のうえ「送信」ボタンをクリックしてください。
自動処理で返信メールをお送りいたします。後ほど、メールまたはお電話で折り返しご連絡させて頂きます。
お問い合わせいただきました内容は、弊社の掲げる個人情報保護方針に沿って管理し、お客様の同意なく第三者に開示・提供することはございません。※20Mバイトを超えるファイルの添付をご希望の場合には、soumu@ysd-k.co.jpまで直接メールをお送りください。`}</p>
            </div>

            <div className="my-12 md:my-16 border-t border-line-gray" />

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 md:space-y-8"
              >
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className={formControlClass}>
                      <Label className={labelClass}>
                        お問い合わせ区分
                        <LabelCondition require />
                      </Label>
                      <div className="flex-1 flex flex-col gap-2">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="---" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="見積り依頼">
                              見積り依頼
                            </SelectItem>
                            <SelectItem value="製品への質問">
                              製品への質問
                            </SelectItem>
                            <SelectItem value="その他">その他</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-sm" />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className={formControlClass}>
                      <Label className={labelClass}>
                        会社名
                        <LabelCondition />
                      </Label>
                      <div className="flex-1 flex flex-col gap-2">
                        <FormControl>
                          <Input placeholder="〇〇〇株式会社" {...field} />
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
                        お名前(フルネーム)
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
                  name="phone"
                  render={({ field }) => (
                    <FormItem className={formControlClass}>
                      <Label className={labelClass}>
                        電話番号
                        <LabelCondition require />
                      </Label>
                      <div className="flex-1 flex flex-col gap-2">
                        <FormControl>
                          <Input placeholder="123-4567-8900" {...field} />
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
                          <Input placeholder="123@example.com" {...field} />
                        </FormControl>
                        <FormMessage className="text-sm" />
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className={formControlClass}>
                      <Label className={labelClass}>
                        お問い合わせ内容
                        <LabelCondition require />
                      </Label>
                      <div className="flex-1 flex flex-col gap-2">
                        <FormControl>
                          <Textarea
                            placeholder="お問い合わせ内容を記入してください。"
                            className="min-h-[371px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-sm" />
                      </div>
                    </FormItem>
                  )}
                />

                {/* Dropzone */}
                <div className={formControlClass}>
                  <Label className={labelClass}>添付ファイル</Label>

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
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="my-12 md:my-20 flex flex-col gap-2">
                      <FormControl>
                        <CustomCheckbox
                          checked={field.value}
                          onChange={() => field.onChange(!field.value)}
                        >
                          <p className="text-normal text-[13px] md:text-[14px] text-web-vivid">
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

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="mb-[167px] w-full md:mb-[123px] md:w-auto md:px-[120px]"
                  >
                    確認画面に進む
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </section>
      )}
    </>
  );
}
