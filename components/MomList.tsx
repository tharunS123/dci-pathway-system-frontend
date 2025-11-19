import {
  ArrowRight,
  Award,
  Building2,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Trophy,
} from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ListItem {
  title: string;
  link: string;
}

interface List2Props {
  heading?: string;
  items?: ListItem[];
}

const MomList = ({
  heading = "Cohort Moms",
  items = [
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
      title: "KTeasia_Allen",
      link: "Teasia_Allen",
    },
    {
      title: "Zakiya_Hardley",
      link: "KZakiya_Hardley",
    }
  ],
}: List2Props) => {
  return (
    <section className="py-2">
      <div className="container px-0 md:px-8">
        <h1 className="mb-10 px-4 text-3xl font-semibold md:mb-14 md:text-4xl">
          {heading}
        </h1>
        <div className="flex flex-col">
          <Separator />
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="grid items-center gap-4 px-4 py-5 md:grid-cols-4">
                <div className="order-2 flex items-center gap-2 md:order-none">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <a
                    className="order-3 ml-auto w-fit gap-2 md:order-none"
                    href={item.link}
                  >
                    <span>View project</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <Separator />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export { MomList };
