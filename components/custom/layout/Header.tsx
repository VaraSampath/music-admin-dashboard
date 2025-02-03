import { Input } from "@/components/ui/input";
import {
  Bell,
  Home,
  Link2,
  Mail,
  Menu,
  Mic,
  Music,
  Music2,
  Play,
  Search,
  ShoppingCart,
} from "lucide-react";
import IconNotification from "../icons/icon-notification";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="bg-white min-h-12 flex py-5 px-2">
      <div className="flex-1  px-4 flex items-center">
        <Sheet>
          <SheetTrigger>
            <Menu className="md:hidden" />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="w-20 p-0"
          >
            <div className="w-full px-3 bg-primary-blue-100 h-full py-16">
              <div className="flex flex-col gap-9 items-center text-white">
                <Home
                  className="size-5 "
                  color="white"
                  fontWeight={"bold"}
                />
                <Music className="size-4" />
                <Mic className="size-4" />
                <Music2 className="size-4" />
                <Play className="size-4" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex-1 flex items-center justify-between gap-4">
        <div className=" hidden md:flex flex-1 justify-between items-center max-w-72 w-full ">
          <Input
            type="text"
            className="border-none shadow-none  focus-visible:ring-none focus-visible:ring-0"
            placeholder="Search for Keyword..."
          />
          <Search className="size-4" />
        </div>
        <div className="flex gap-5 mx-8">
          <IconNotification
            icon={<ShoppingCart className="size-4" />}
            bgClassname="bg-[#4549A0]"
          />
          <IconNotification
            icon={<Mail className="size-4" />}
            bgClassname="bg-[#F16856]"
          />
          <IconNotification
            icon={<Bell className="size-4" />}
            bgClassname="bg-[#1ABCB0]"
          />
        </div>
        <div className="flex-1 mx-auto flex items-center gap-4">
          <span className="text-sm hidden md:block">Varasampath Borra</span>
          <Popover>
            <PopoverTrigger>
              <Avatar className="bg-black size-9">
                <AvatarFallback className="bg-black text-white">
                  VB
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-2">
              <div className="flex gap-4 text-sm items-center">
                <span>Resume: </span>
                <Link
                  href={
                    "https://drive.google.com/file/d/1dAeVyPoo-V1wgFZyt4wSyIl1UCmuq6ZV/view"
                  }
                >
                  <Link2 className="size-4" />
                </Link>
              </div>
              <div className="flex gap-4 text-sm items-center">
                <span>Github: </span>
                <Link href={"https://github.com/VaraSampath"}>
                  <Link2 className="size-4" />
                </Link>
              </div>
              <div className="flex gap-4 text-sm items-center">
                <span>Mail: </span>
                <Link href={"mailto:varasampath753@gmail.com"}>
                  <Link2 className="size-4" />
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
