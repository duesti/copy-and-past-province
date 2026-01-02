import { Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { copy } from "@/utils/copy-to-clipboard";

export function CopyButton({ text }: { text: string }) {
  return (
    <Button 
      className="cursor-pointer h-10" 
      variant={"outline"}
      onClick={() => copy(text)}
    >
      <Clipboard />
    </Button>
  );
}
