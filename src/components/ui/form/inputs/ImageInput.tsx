"use client";
import { useCallback, useRef, useState } from "react";
import { ImageKitProvider, IKUpload } from "imagekitio-next";
import { useFormikContext } from "formik";

// Types
import { ImageInputProps } from "@/lib/forms";
import {
  UploadError,
  IKUploadResponse,
} from "imagekitio-next/dist/types/components/IKUpload/props";

// Components

import { Button } from "@/components/ui/Button";
import Image from "@/components/ui/Image";

// Icons
import { ImagePlusIcon, Trash } from "lucide-react";

// Environment Variables

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

// Handlers
const authenticator = async (): Promise<{
  signature: string;
  expire: number;
  token: string;
}> => {
  try {
    const response = await fetch("/api/image-auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`,
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error}`);
  }
};

const onError = (err: UploadError) => {
  console.log("Error", err);
  console.log("public key", publicKey);
  console.log("url endpoint", urlEndpoint);
};

const onUploadProgress = (
  progress: ProgressEvent<XMLHttpRequestEventTarget>,
  setProgress: React.Dispatch<React.SetStateAction<number>>,
) => {
  const percentCompleted = Math.round((progress.loaded * 100) / progress.total);
  setProgress(percentCompleted);
};

function getPartAfterUrl(url: string) {
  return url.replace(urlEndpoint || "", "");
}

export default function ImageInput({
  field,

  disabled,
  multiple = false,
}: ImageInputProps) {
  //State & Ref
  const [uploadProgress, setUploadProgress] = useState(0);
  const ikUploadRefTest = useRef<HTMLInputElement | null>(null);

  // Props

  const { name } = field;

  const { setFieldValue, getFieldProps } = useFormikContext();

  // console.log("image val", getFieldProps(name).value);

  // Handlers
  const handleUploadSuccess = useCallback(
    (result: IKUploadResponse) => {
      if (result.$ResponseMetadata.statusCode == 200)
        if (multiple) {
          const values = getFieldProps(name).value;
          setFieldValue(name, [
            ...values,
            { url: getPartAfterUrl(result.url) },
          ]);
        } else {
          setFieldValue(name, getPartAfterUrl(result.url));
        }
      setUploadProgress(0);
    },
    [setFieldValue, name, multiple, getFieldProps],
  );

  const handleRemove = useCallback(
    (url?: string) => {
      if (multiple && url) {
        const values = getFieldProps(name).value;
        setFieldValue(name, [
          ...values.filter((current: { url: string }) => current.url !== url),
        ]);
      } else {
        setFieldValue(name, "");
      }
    },
    [setFieldValue, name, multiple, getFieldProps],
  );

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <div>
        <IKUpload
          folder={"/mhaqnegahdar/images/posts"}
          onError={onError}
          onSuccess={handleUploadSuccess}
          onUploadProgress={(progress) =>
            onUploadProgress(progress, setUploadProgress)
          }
          multiple={multiple}
          style={{ display: "none" }} // hide the default input and use the custom upload button
          ref={ikUploadRefTest}
          disabled={disabled}
        />

        {/* Upload Progress */}
        {uploadProgress > 0 && (
          <p className="mt-2 text-sm text-muted-foreground">
            {uploadProgress}% complete
          </p>
        )}
        <div className="mb-4 flex flex-wrap items-center gap-4">
          {/* Single Image Show */}
          {multiple === false && getFieldProps(name).value ? (
            <div className="relative mt-2 flex aspect-video items-center justify-center overflow-hidden rounded-md">
              <div className="absolute right-2 top-2 z-10">
                <Button
                  type="button"
                  size={`icon`}
                  onClick={() => handleRemove()}
                  variant={"destructive"}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
              <Image
                className="object-cover"
                alt="Image"
                path={`${getFieldProps(name).value}`}
                w={800}
                h={450}
              />
            </div>
          ) : null}
          {/* Multi Image Show */}
          {multiple === true && getFieldProps(name).value.length > 0 ? (
            <>
              {getFieldProps(name).value.map((image: { url: string }) => (
                <div
                  key={image.url}
                  className="relative mt-2 flex aspect-video items-center justify-center overflow-hidden rounded-md"
                >
                  <div className="absolute right-2 top-2 z-10">
                    <Button
                      type="button"
                      size={`icon`}
                      onClick={() => handleRemove(image.url)}
                      variant={"destructive"}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                  <Image
                    className="object-cover"
                    alt="Image"
                    path={image.url}
                  />
                </div>
              ))}
            </>
          ) : null}
        </div>
        {/* Custom Upload Button */}
        {ikUploadRefTest && (
          <Button
            type="button"
            disabled={disabled}
            variant={"secondary"}
            onClick={() => ikUploadRefTest?.current?.click()}
          >
            <ImagePlusIcon className="me-2 h-4 w-4" />
            Upload an image
          </Button>
        )}
      </div>
    </ImageKitProvider>
  );
}
