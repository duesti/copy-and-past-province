import { Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCopiedStore } from "@/stores/store";
import { copy } from "@/utils/copy-to-clipboard";

export function CopyButton({ text }: { text: string }) {
  const setLastCopied = useCopiedStore((state) => state.setLastCopied);

  return (
    <Button
      className="cursor-pointer h-8 w-8"
      variant={"outline"}
      onClick={() => {
        setLastCopied(text);
        copy(text);
      }}
    >
      <Clipboard />
    </Button>
  );
}
