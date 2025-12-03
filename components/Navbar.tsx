import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronDown, FileIcon, HomeIcon, ListIcon, LogIn, LogOut, Sprout } from "lucide-react";
import ModeToggle from "./ModeToggle";
import { stackServerApp } from "@/stack/server";
import { UserButton } from "@stackframe/stack";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Mindset Analysis",
    href: "/mindset-analysis",
    description: "This is the mindset analysis page.",
  },
  {
    title: "Pay Stubs",
    href: "/",
    description: "This is the pay study page.",
  }
];

async function Navbar() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7x1 mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              DCI Pathway System
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/">
                <HomeIcon className="w-4 h-4" />
                <span className="hidden lg:inline">Home</span>
              </Link>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/data_collection">
                <FileIcon className="w-4 h-4" />
                <span className="hidden lg:inline">Data Collection</span>
              </Link>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="text-left">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                >
                  <ListIcon className="w-4 h-4" />
                  <span>Analysis List</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 text-left">
                {components.map((item) => (
                  <DropdownMenuItem key={item.title} asChild>
                    <Link
                      href={item.href}
                      className="flex flex-col space-y-1 text-left"
                    >
                      <span className="text-sm font-medium leading-none">
                        {item.title}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <ModeToggle /> */}
            {user ? (
              <>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link href={app.signOut}>
                    <LogOut className="w-4 h-4" />
                    <span className="hidden lg:inline">Sign Out</span>
                  </Link>
                </Button>
                <UserButton />
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link href={app.signIn}>
                    <LogIn className="w-4 h-4" />
                    <span className="hidden lg:inline">Sign In</span>
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
