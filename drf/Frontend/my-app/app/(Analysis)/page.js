"use client"
import React from 'react'
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ArrowUp10Icon,
  CircleDollarSignIcon,
  CodeIcon,
  DollarSignIcon,
  FileInputIcon,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  PercentIcon,
  PercentSquareIcon,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Input from user",
    icon: FileInputIcon,
    color: "text-violet-500",
    bgcolor: "bg-violet-500/10",
    href: "/inputUser",
  },
  {
    label: "Number of Results",
    icon: ArrowUp10Icon,
    color: "text-violet-500",
    bgcolor: "bg-violet-500/10",
    href: "/1query",
  },

  {
    label: "Mean Salary",
    icon: CircleDollarSignIcon,
    href: "/2query",
    color: "text-pink-700",
    bgcolor: "bg-pink-700/10 ",
  },

  {
    label: "Median Salary",
    icon: DollarSignIcon,
    href: "/3query",
    color: "text-orange-700",
    bgcolor: "text-orange-700/10",
  },

  {
    label: "25 Percentile Salary",
    icon: PercentIcon,
    href: "/4query",
    color: "text-emerald-500",
    bgcolor: "text-emerald-500/10",
  },

  {
    label: "75 Percentile Salary",
    icon: PercentSquareIcon,
    href: "/code",
    color: "text-green-700",
    bgcolor: "text-green-700",
  },
];

const analysis = () => {
  
    const router=useRouter();
  return (
    <div> <div className="mb-8 space-y-4 py-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Explore the power of Data Analysis
      </h2>
      <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
        find the query related to Salary
      </p>

    </div>
    <div className="px-4 md:px-15 lg:px-32 space-y-4">
      {tools.map((tool)=>(
        <Card
        onClick={()=> router.push(tool.href)}

        key={tool.href}
        className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
         <div className="flex items-center gap-x-4">
          <div className={cn("p-2 w-fit rounded-md", tool.bgcolor)}>
          <tool.icon className={cn("w-8 h-8",tool.color)} />
          </div> 
          <div className="font-semibold">
            {tool.label}
          </div>
          </div>
          <ArrowRight className="w-5 h-5" />
        </Card>
      ))}
    </div>
    </div>

  )
}

export default analysis