import SwitchTheme from "@/components/switch-theme";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center w-full">
      <section className="flex-grow h-full flex flex-col w-full max-w-[1400px]">
        <div className="flex items-center justify-between gap-12">
          <div className="font-bold text-3xl bg-gradient-to-r from-blue-400 to-violet-900 text-transparent bg-clip-text hover:cursor-pointer">
            Cam's English
          </div>
          <div className="flex items-center gap-3">
            <SwitchTheme />
          </div>
        </div>
        {children}
      </section>
    </div>
  );
}

export default layout;
