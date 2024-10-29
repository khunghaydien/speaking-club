import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center w-full">
      <section className="flex-grow h-full flex flex-col w-full max-w-[1400px]">
        {children}
      </section>
    </div>
  );
}

export default layout;
