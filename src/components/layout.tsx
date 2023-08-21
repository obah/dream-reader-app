import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import "./styles/componentStyles.css";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="container">
      <Header />
      <main className="main-body">{children}</main>
      <Footer />
    </div>
  );
}
