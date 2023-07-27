"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import { toast } from "sonner";
import ImageUpload from "@/components/image-uploader";
import Dropdown from "./ui/Dropdown";

interface post {
  image?: string | null;
  title: string;
  description: string;
  variant: string;
  githubLink?: string;
  demoLink?: string;
}

export type Variant = "Graphic Design" | "UI/UX Design" | "Web Development";

const CreateForm = () => {
  const [typeVariant, setTypeVariant] = useState<Variant>("Graphic Design");

  const [userData, setUserData] = useState<post>({
    title: "",
    description: "",
    variant: typeVariant,
    githubLink: "",
    demoLink: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { title, image, description, githubLink, demoLink } = userData;

  const handleImageChange = (imageUrl: string) => {
    setUserData((prev) => ({
      ...prev,
      image: imageUrl,
    }));
  };

  const handleImageRemove = (imageUrl: string) => {
    setUserData((prev) => ({
      ...prev,
      image: null,
    }));
  };

  const handleChangeVariant = (variant: Variant) => {
    setTypeVariant(variant);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setUserData((prev) => ({
      ...prev,
      variant: typeVariant,
    }));

    try {
      setIsLoading(true);

      const response = await fetch("/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      // Handle the response from the server
      if (response.ok) {
        toast.success("Successfully uploaded portfolio");

        setUserData({
          image: null,
          title: "",
          description: "",
          variant: typeVariant,
        });
      } else {
        toast.error("Error uploading portfolio:");
      }
    } catch (error) {
      toast.error("Something went wrong while uploading");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="lg:w-1/2 mx-auto md:w-[80%] w-[90%] p-4 rounded-lg flex flex-col gap-4"
      >
        <Input
          name="title"
          onChange={handleChange}
          value={title}
          placeholder="Title"
          disabled={isLoading}
        />
        <div className="w-full flex gap-4 items-center">
          <ImageUpload
            onChange={handleImageChange}
            onRemove={handleImageRemove}
            value={image ? [image] : []}
            disabled={isLoading}
          />
          <Dropdown onClick={handleChangeVariant} variant={typeVariant} />
        </div>
        {typeVariant === "Web Development" && (
          <div className="flex items-center gap-4">
            <Input
              name="githubLink"
              value={githubLink!}
              onChange={handleChange}
              placeholder="Github repo Link"
              disabled={isLoading}
            />
            <Input
              name="demoLink"
              value={demoLink!}
              onChange={handleChange}
              placeholder="Product demo link"
              disabled={isLoading}
            />
          </div>
        )}
        <Input
          name="description"
          onChange={handleChange}
          value={description}
          placeholder="Description"
          textarea
          disabled={isLoading}
        />
        <button
          className="px-12 py-2 rounded-md bg-secondary text-white"
          disabled={isLoading}
        >
          Upload Portfolio
        </button>
      </form>
    </>
  );
};

export default CreateForm;
