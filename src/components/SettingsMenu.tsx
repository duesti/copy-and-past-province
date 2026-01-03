import { Settings } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ThemeToggle } from "./ThemeToggler";
import { Button } from "./ui/button";

export function SettingsMenu() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer h-7 w-10" variant={"outline"}>
          <Settings />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Настройки</DialogTitle>
          <DialogDescription>
            Тут вы можете подстроить все под себя.
          </DialogDescription>
        </DialogHeader>
        <section className="mt-6 flex flex-col gap-3">
          <section className="flex justify-between items-center">
            <p className="opacity-80">Тема</p>
            <ThemeToggle />
          </section>
        </section>
      </DialogContent>
    </Dialog>
  );
}
