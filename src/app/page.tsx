"use client";

import { motion } from "framer-motion";
import { CopyButton } from "@/components/CopyButton";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { data, translation } from "@/storage/data-node";

export default function Home() {
  const tabs = Object.keys(data);
  return (
    <main className="select-none h-screen flex justify-center py-8 px-8">
      <Tabs defaultValue={tabs[0]} className="flex items-center p-16">
        <TabsList className="fixed top-8 z-10">
          {tabs.map((value, index) => (
            <TabsTrigger value={value} key={index} className="cursor-pointer">
              {translation[value]}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((category, index) => (
          <TabsContent value={tabs[index]} key={index}>
            <motion.section initial={{ opacity: 0.6, y: "20px" }} animate={{ opacity: 1, y: "0px" }}>
              {Object.keys(data[category]).map((value, index) => (
                <motion.section key={index}>
                  <p>~ {value}</p>
                  <section className="py-3 px-6 flex flex-col gap-3">
                    {data[category][value].map((value, index) => (
                      <Card key={index}>
                        <CardContent className="flex items-center justify-between gap-3">
                          <p className="">{value}</p>
                          <CopyButton text={value} />
                        </CardContent>
                      </Card>
                    ))}
                  </section>
                </motion.section>
              ))}
            </motion.section>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
