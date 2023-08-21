import { PropsWithChildren, ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }: PropsWithChildren<ReactNode>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
