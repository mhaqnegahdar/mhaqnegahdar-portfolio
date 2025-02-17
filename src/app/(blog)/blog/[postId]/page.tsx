// Hooks / Packages
import Image from "@/components/ui/Image";
import React, { Suspense } from "react";

// Icons
import { Calendar, Hourglass } from "lucide-react";

// Components
import ActionButtonContainer from "@/app/(blog)/blog/[postId]/components/ActionButtonContainer";
import CommentsSection from "./components/CommentsSection";
import { ContentEditor } from "./components/DynamicContentEditor";

export default async function page() {
  const initialContent = [
    {
      type: "heading",
      content: "Heading",
    },
    {
      type: "paragraph",
      content: "Welcome to this demo!",
    },
    {
      type: "paragraph",
      content:
        "Welcome to this demo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque libero minima nobis fugiat corrupti ipsam excepturi vitae, nesciunt nulla cupiditate debitis rerum nam tempora quo veritatis nemo esse non tenetur perspiciatis. Reiciendis sapiente sed laudantium similique eius quas sunt expedita?",
    },
    { type: "paragraph" },
    {
      type: "codeBlock",
      props: { language: "javascript" },
      content: "console.log('Hello, world!');",
    },
    { type: "paragraph" },

    {
      type: "paragraph",
    },
  ];

  return (
    <main className="mx-auto max-w-5xl">
      <div className="relative mx-auto mb-4 w-full md:mb-0">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold leading-tight text-primary">
            Title of The Post
          </h2>
          <div className="flex items-start justify-between py-2 md:items-center">
            <div className="flex flex-col-reverse items-start gap-2 md:flex-row md:items-center">
              <a href="#" className="text-blue-400">
                Nextjs
              </a>
              <div className="flex flex-col items-start md:flex-row md:gap-2">
                <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Hourglass className="h-3 w-3" /> 10min read
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-3 w-3" /> 14th Oct 2023
                </span>
              </div>
            </div>
            {/* Like and Bookmark */}
            <Suspense>
              <ActionButtonContainer />
            </Suspense>
          </div>
        </div>

        <Image
          path="/images/projects/netflix-clone.webp"
          w={800}
          h={450}
          alt="profile"
          className="mr-2 aspect-video w-full rounded-xl object-cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <ContentEditor initialContent={initialContent} />
      </div>

      <CommentsSection />
    </main>
  );
}
