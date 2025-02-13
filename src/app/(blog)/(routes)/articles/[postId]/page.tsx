import Image from "@/components/ui/Image";
import { Calendar, ChevronLeft, ChevronRight, Hourglass } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

import ActionButtonContainer from "@/app/(blog)/(routes)/articles/[postId]/components/ActionButtonContainer";
import CommentsSection from "./components/CommentsSection";

export default function page() {
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
        <div className="mt-12 w-full px-4 text-lg leading-relaxed text-primary">
          <p className="pb-6">
            Advantage old had otherwise sincerity dependent additions. It in
            adapted natural hastily is justice. Six draw you him full not mean
            evil. Prepare garrets it expense windows shewing do an. She
            projection advantages resolution son indulgence. Part sure on no
            long life am at ever. In songs above he as drawn to. Gay was
            outlived peculiar rendered led six.
          </p>

          <p className="pb-6">
            Difficulty on insensible reasonable in. From as went he they.
            Preference themselves me as thoroughly partiality considered on in
            estimating. Middletons acceptance discovered projecting so is so or.
            In or attachment inquietude remarkably comparison at an. Is
            surrounded prosperous stimulated am me discretion expression. But
            truth being state can she china widow. Occasional preference fat
            remarkably now projecting uncommonly dissimilar. Sentiments
            projection particular companions interested do at my delightful.
            Listening newspaper in advantage frankness to concluded unwilling.
          </p>

          <p className="pb-6">
            Adieus except say barton put feebly favour him. Entreaties
            unpleasant sufficient few pianoforte discovered uncommonly ask.
            Morning cousins amongst in mr weather do neither. Warmth object
            matter course active law spring six. Pursuit showing tedious unknown
            winding see had man add. And park eyes too more him. Simple excuse
            active had son wholly coming number add. Though all excuse ladies
            rather regard assure yet. If feelings so prospect no as raptures
            quitting.
          </p>

          <div className="mb-6 rounded border-l-4 border-gray-500 pl-4 italic">
            Sportsman do offending supported extremity breakfast by listening.
            Decisively advantages nor expression unpleasing she led met. Estate
            was tended ten boy nearer seemed. As so seeing latter he should
            thirty whence. Steepest speaking up attended it as. Made neat an on
            be gave show snug tore.
          </div>

          <div className="my-20 flex justify-between">
            <Link
              href={`/blog/blogId`}
              className="text-forground group flex flex-col items-end text-sm"
            >
              <div className="flex items-center gap-2">
                <ChevronLeft />
                Previous
              </div>
              <hr className="w-0 border-spacing-2 border-primary duration-500 ease-out group-hover:w-4/5" />
            </Link>
            <Link
              href={`/blog/blogId`}
              className="text-forground group flex flex-col items-start text-sm"
            >
              <div className="flex items-center gap-2">
                Next <ChevronRight />
              </div>
              <hr className="w-0 border-spacing-2 border-primary duration-500 ease-out group-hover:w-4/5" />
            </Link>
          </div>
        </div>
      </div>

      <CommentsSection />
    </main>
  );
}
