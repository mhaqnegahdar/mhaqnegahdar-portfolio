// Components
import ActionButton from "@/app/(blog)/blog/components/posts/card/ActionButton";

export default function ActionButtonContainer() {
  return (
    <div className="flex items-center space-x-2">
      <ActionButton type="like" initialState={false} label="Like" />

      <ActionButton type="save" initialState={false} label="Save" />
    </div>
  );
}
