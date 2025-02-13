import React from "react";
import ActionButton from "@/app/(blog)/(routes)/articles/components/posts/card/ActionButton";

export default function ActionButtonContainer() {
  return (
    <div className="flex items-center space-x-2">
      <ActionButton
        type="like"
        initialState={false}
        userId={undefined}
        label="Like"
      />

      <ActionButton
        type="save"
        initialState={false}
        userId={undefined}
        label="Save"
      />
    </div>
  );
}
