import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/0kira-vgl.png"
        alt=""
        className="w-10 h-10 rounded-full"
      />
      <div className="truncate flex flex-col">
        <span className="text-sm font-semibold text-zinc-700">
          Matheus Tiburcio
        </span>
        <span className="truncate text-sm text-zinc-500 ">
          matheusgtiburcio@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  );
}
