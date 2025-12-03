"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, XAxis } from "recharts"
import {
  AlignLeft,
  ArrowRight,
  GalleryVerticalEnd,
  Lightbulb,
  ListChecks,
  RefreshCcw,
  ChevronDown,
  CreditCard,
  LifeBuoy,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { PieChart, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { MomList } from "./MomList";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

// Mom list data - same as MomList component
const momsList = [
  {
    title: "Sahara_Polk",
    link: "Sahara_Polk",
  },
  {
    title: "Ashley_McCracklin",
    link: "Ashley_McCracklin",
  },
  {
    title: "Brinika_Wells",
    link: "Brinika_Wells",
  },
  {
    title: "Candice_Talley",
    link: "Candice_Talley",
  },
  {
    title: "Jasmyne_West",
    link: "Jasmyne_West",
  },
  {
    title: "Kendra_Scott",
    link: "Kendra_Scott",
  },
  {
    title: "Kimmea_White",
    link: "Kimmea_White",
  },
  {
    title: "Layla_Purdy",
    link: "Layla_Purdy",
  },
  {
    title: "Natasha_McClung",
    link: "Natasha_McClung",
  },
  {
    title: "Teasia_Allen",
    link: "Teasia_Allen",
  },
  {
    title: "Zakiya_Hardley",
    link: "Zakiya_Hardley",
  },
  {
    title: "Alexis_Thomas",
    link: "Alexis_Thomas"
  }
];

function MindsetAnalysis() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedMom, setSelectedMom] = useState<{ title: string; link: string } | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const sections = Object.keys(sectionRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    let observer: IntersectionObserver | null = new IntersectionObserver(
      observerCallback,
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      },
    );

    sections.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        observer?.observe(element);
      }
    });

    return () => {
      observer?.disconnect();
      observer = null;
    };
  }, []);

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };
  return (
    <section className="py-3">
      <div className="container max-w-7xl">
        <div className="relative grid-cols-3 gap-20 lg:grid">
          <div className="lg:col-span-2">
            <section id="section1" ref={(ref) => addSectionRef("section1", ref)} className="prose dark:prose-invert mb-8">
              <div className="mb-3">
                <Badge variant="outline">Analyze</Badge>
                <h1 className="mt-3 text-3xl font-extrabold">
                  Sentiment Analysis
                </h1>
                <p className="text-muted-foreground mt-2 text-lg">
                To gain a clearer understanding of mindset changes recorded in the weekly notes. 
                To identify meaningful trends that were difficult to see in text form. 
                To help DCI evaluate how the program is progressing over time.​
                </p>
                {/* <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt="placeholder"
                  className="my-8 aspect-video w-full rounded-md object-cover"
                /> */}
              </div>
              <div className="ml-3.5">
                <div className="relative flex items-start pb-2">
                  <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                  <div className="absolute ml-[-14px] py-2">
                    <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                      <ListChecks className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div className="pl-12">
                    <h3 className="mt-2 text-base font-semibold">
                      Project Scope
                    </h3>
                    <p>
                      Review and organize weekly notes. 
                      Identify keywords and sentiment patterns. 
                      Build simple visuals that show trends over time.
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start pb-2">
                  <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                  <div className="absolute ml-[-14px] py-2">
                    <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                      <RefreshCcw className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div className="pl-12">
                    <h3 className="mt-2 text-base font-semibold">
                      Motivation
                    </h3>
                    <p>
                    To gain a clearer understanding of mindset changes recorded in the weekly notes
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start pb-2">
                <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                  <div className="absolute ml-[-14px] py-2">
                    <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                      <GalleryVerticalEnd className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div className="pl-12">
                    <h3 className="mt-2 text-base font-semibold">
                      Problem
                    </h3>
                    <p>
                    Patterns and shifts were not easy to track consistently. 
                    There was no standardized method for reviewing long-term changes.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section id="section2" ref={(ref) => addSectionRef("section2", ref)} className="prose dark:prose-invert mb-8">
              {/* <MomList /> */}
              <div className="mt-8">
                <Card className="border-muted/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-semibold">Select Mom to Analyze</CardTitle>
                    <CardDescription>
                      Choose a mom from the list below to view their sentiment analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full justify-between text-left font-normal hover:bg-accent"
                        >
                          <span className={selectedMom ? "text-foreground" : "text-muted-foreground"}>
                            {selectedMom ? selectedMom.title : "Select a mom..."}
                          </span>
                          <ChevronDown className="h-4 w-4 opacity-50" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full min-w-[var(--radix-dropdown-menu-trigger-width)] max-h-[300px] overflow-y-auto">
                        <DropdownMenuLabel>Cohort 2 Moms</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          {momsList.map((mom) => (
                            <DropdownMenuItem
                              key={mom.link}
                              asChild
                              onClick={() => setSelectedMom(mom)}
                            >
                              <Link 
                                href={`/${mom.link}`}
                                className="flex items-center justify-between w-full"
                              >
                                <span>{mom.title}</span>
                                <ArrowRight className="h-4 w-4 ml-2 opacity-50" />
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardContent>
                </Card>
                {/* <span className="flex items-center gap-2 text-sm">
                  <AlignLeft className="h-4 w-4" />
                  On this page
                </span>
                <nav className="mt-2 text-sm">
                  <ul>
                    <li>
                      <a
                        href="#section1"
                        className={cn(
                          "block py-1 transition-colors duration-200",
                          activeSection === "section1"
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-primary",
                        )}
                      >
                        What is Sentiment Analysis?
                      </a>
                    </li>
                    <li>
                      <a
                        href="#section2"
                        className={cn(
                          "block py-1 transition-colors duration-200",
                          activeSection === "section3"
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-primary",
                        )}
                      >
                        List of Moms
                      </a>
                    </li>
                  </ul>
                </nav> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MindsetAnalysis