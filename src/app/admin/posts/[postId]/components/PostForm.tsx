"use client";

import * as Yup from "yup";

import FormContainer from "@/components/ui/form/FormContainer";
// import { useState } from "react";
// import { FetchedPost, Category } from "@/types/models";
import SubmitButton from "@/components/ui/form/SubmitButton";
import ResetButton from "@/components/ui/form/ResetButton";
import {
  createFormConfig,
  createFormInputs,
  FormSubmitType,
  submitFormData,
} from "@/lib/forms";

// Types
import { Category, FetchedPost } from "@/types/models";

interface PostFormProps {
  post: FetchedPost;
  categories: Category[];
}

export default function PostForm({ post, categories = [] }: PostFormProps) {
  // const [state, setState] = useState<FetchedPost>(post);

  const { initialValues, validationSchema, fields } = createFormConfig<
    Omit<FetchedPost, "id" | "userId" | "updatedAt" | "createdAt">
  >({
    title: {
      initialValue: post?.title || "",
      validation: Yup.string().required("Title is required"),
      inputProps: {
        type: "text",
        label: "Title",
        placeholder: "How to create a blog with Next.js",
      },
    },
    image: {
      initialValue: post?.image || "",
      validation: Yup.string().required("Image is required"),
      inputProps: { type: "image", label: "Image" },
    },
    status: {
      initialValue: post?.status || "draft",
      validation: Yup.string()
        .oneOf(["draft", "published"])
        .required("Status is required"),
      inputProps: {
        label: "Status",
        type: "radio",
        className: "grid-cols-2",
        data: [
          { value: "draft", label: "Draft" },
          { value: "published", label: "Published" },
        ],
      },
    },
    isFeatured: {
      initialValue: post?.isFeatured || false,
      validation: Yup.boolean().required("Is Featured is required"),
      inputProps: {
        label: "Is Featured",
        type: "checkbox",
      },
    },
    readTime: {
      initialValue: post?.readTime || "",
      validation: Yup.string().required("Read Time is required"),
      inputProps: { type: "text", label: "Read Time", placeholder: "5 min" },
    },

    categories: {
      initialValue: [],
      validation: Yup.array()
        .of(
          Yup.object().shape({
            id: Yup.string().required(),
            title: Yup.string().required(),
          }),
        )
        .required("Categories are required"),
      inputProps: {
        label: "Categories",
        type: "combobox",
        multiple: true,
        data: [
          ...categories.map((category) => ({
            value: category.id,
            label: category.title,
            // id: category.id,
          })),
        ],
      },
    },
    content: {
      initialValue: "",
      validation: Yup.string().required("Content is required"),
      inputProps: { type: "textarea", label: "Content" },
    },
  });

  const onSubmit: FormSubmitType<typeof initialValues> = async (
    values: typeof initialValues,
    { setSubmitting, resetForm },
  ) => {
    try {
      setSubmitting(true);

      // Simulate a delay for form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      await submitFormData(values);

      // Reset the form on success
      resetForm();

      // Show success message
      alert("Form submitted successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      // Ensure isSubmitting is set to false after submission is complete
      setSubmitting(false);
    }
  };

  return (
    <>
      <FormContainer
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {/* Creating all the form fields */}
        {createFormInputs(fields)}
        <div className="flex gap-4">
          <SubmitButton />
          <ResetButton />
        </div>
      </FormContainer>
    </>
  );
}
