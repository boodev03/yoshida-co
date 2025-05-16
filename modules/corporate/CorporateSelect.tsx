"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CorporateSelect() {
  return (
    <div className="flex flex-col items-center mlg:justify-center mlg:flex-row gap-4 mlg:gap-8">
      <div className="flex-1 max-w-full w-[256px]">
        <Select defaultValue="代表挨拶">
          <SelectTrigger className="transition-all w-full rounded-full border-web-main font-bold bg-white text-web-main [&>svg]:!text-web-main hover:bg-web-main hover:text-white hover:[&>svg]:!text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="代表挨拶">代表挨拶</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1 max-w-full w-[256px]">
        <Select defaultValue="代表挨拶">
          <SelectTrigger className="transition-all w-full rounded-full border-web-main font-bold bg-white text-web-main [&>svg]:!text-web-main hover:bg-web-main hover:text-white hover:[&>svg]:!text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="代表挨拶">代表挨拶</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1 max-w-full w-[256px]">
        <Select defaultValue="代表挨拶">
          <SelectTrigger className="transition-all w-full rounded-full border-web-main font-bold bg-white text-web-main [&>svg]:!text-web-main hover:bg-web-main hover:text-white hover:[&>svg]:!text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="代表挨拶">代表挨拶</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
