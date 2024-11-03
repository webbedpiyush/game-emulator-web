import { ReactNode } from "react";

export const metadata = {
  title: "game-emulator",
  description: "made by piyush",
};

export default function layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
