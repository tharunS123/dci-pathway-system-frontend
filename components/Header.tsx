import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Badge, CirclePlay } from "lucide-react";
import { stackServerApp } from "@/stack/server";

async function Header() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 px-6 gap-12 py-12 lg:py-0">
        <div className="my-auto">
          <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
            Just released v1.0.0
          </Badge>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            Dream Center Indy Pathway System
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            Explore visual dashboards and impact tools engineered to highlight
            growth, opportunity, and the journey forward for every Pathways
            participant. Empower mentors with insights that truly make a
            difference.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
                <Link href="/" className="flex items-center gap-2">
                Explore Our Analysis <ArrowUpRight className="!h-5 !w-5" />
                </Link>
            </Button>
          </div>
        </div>
        <div className="w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen bg-accent rounded-xl lg:rounded-none" />
      </div>
    </div>
  );
}

export default Header;