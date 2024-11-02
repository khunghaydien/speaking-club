import SignIn from "@/components/sign-in";
import SwitchTheme from "@/components/switch-theme";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import UserSession from "@/components/user-session";

async function layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex-grow h-full flex flex-col">
      <div className="flex items-center justify-center">
        <nav className="flex items-center justify-between gap-12 py-3 flex-grow max-w-[1400px]">
          <div className="font-bold text-3xl bg-gradient-to-r from-blue-400 to-violet-900 text-transparent bg-clip-text hover:cursor-pointer">
            Cam's English
          </div>
          <div className="flex items-center gap-3">
            <SwitchTheme />
            {!!session ? <UserSession session={session} /> : <SignIn />}
          </div>
        </nav>
      </div>
      <div className="bg-muted-foreground h-[0.5px]"></div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between gap-12 py-3 flex-grow max-w-[1400px]">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
export default layout;
