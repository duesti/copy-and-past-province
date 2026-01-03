"use client";

import { motion } from "framer-motion";
import { CopyButton } from "@/components/CopyButton";
import { Header } from "@/components/Header";
import { SettingsMenu } from "@/components/SettingsMenu";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { data, translation } from "@/storage/data-node";
import { useCopiedStore } from "@/stores/store";

export default function Home() {
  const lastCopied = useCopiedStore((state) => state.lastCopied);
  const tabs = Object.keys(data);

  return (
    <main className="select-none h-screen flex justify-center py-8 px-8">
      <Tabs defaultValue={tabs[0]} className="flex items-center p-16">
        <TabsList className="fixed top-8 z-10 flex gap-2">
          {tabs.map((value, index) => (
            <TabsTrigger value={value} key={index} className="cursor-pointer">
              {translation[value]}
            </TabsTrigger>
          ))}
          <SettingsMenu />
        </TabsList>
        <Header />
        {tabs.map((category, index) => (
          <TabsContent value={tabs[index]} key={index}>
            <motion.section
              className="flex gap-3 flex-wrap"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
            >
              {Object.keys(data[category]).map((value, index) => (
                <Card key={index} className="shrink grow basis-auto py-4">
                  <CardContent className="px-4 flex flex-col gap-3">
                    <p>~ {value}</p>
                    <section className="py-3 flex flex-col gap-3">
                      {data[category][value].map((value, index) => (
                        <Card
                          key={index}
                          className={cn(
                            "py-2 transition-colors",
                            value === lastCopied && "bg-muted",
                          )}
                        >
                          <CardContent className="flex items-center justify-between gap-3 px-2">
                            <p className="text-sm opacity-80">{value}</p>
                            <CopyButton text={value} />
                          </CardContent>
                        </Card>
                      ))}
                    </section>
                  </CardContent>
                </Card>
              ))}
            </motion.section>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
