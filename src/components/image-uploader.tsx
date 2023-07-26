"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useState, useEffect, FormEvent } from "react";
import { Trash, ImagePlus } from "lucide-react";

interface imageUploaderProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<imageUploaderProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMount, setIsMount] = useState<boolean>(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMount) {
    return null;
  }

  return (
    <div>
      <div className="flex mb-4 gap-4 items-center">
        {value.map((url) => {
          return (
            <div
              key={url}
              className="rounded-md w-[200px] h-[200px] overflow-hidden relative"
            >
              <div className="absolute top-2 right-2 z-10">
                <button
                  onClick={() => onRemove(url)}
                  className="bg-rose-500 cursor-pointer p-2 rounded-md text-white"
                >
                  <Trash />
                </button>
              </div>
              <Image fill alt="text" src={url} className="object-cover" />
            </div>
          );
        })}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="skaleway">
        {({ open }) => {
          const onClick = (e: FormEvent) => {
            e.preventDefault();
            open();
          };

          return (
            <button
              disabled={disabled}
              onClick={onClick}
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <ImagePlus size={20} />
              <span>Upload an image</span>
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
