"use client";

import { toast } from "sonner";

export async function copy(text: string) {

  const audio = new Audio("/sounds/notification.mp3")
  audio.volume = 0.1

  await navigator.clipboard.writeText(text);
  audio.play()

  toast.success("Строка успешно скопирована");
}
