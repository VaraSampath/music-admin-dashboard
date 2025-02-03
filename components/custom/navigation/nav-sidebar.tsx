import { Home, Mic, Music, Music2, Play } from "lucide-react";

const NavSideBar = () => {
  return (
    <div className="w-full hidden md:block max-w-20 px-3 bg-primary-blue-100 h-full py-16">
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
  );
};

export default NavSideBar;
