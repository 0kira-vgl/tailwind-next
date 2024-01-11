import { LogOut } from "lucide-react";

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
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  );
}
