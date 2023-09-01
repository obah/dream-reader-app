import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import "./styles/componentStyles.css";

interface Props {
  children: JSX.Element;
}

export function Layout({ children }: PropsWithChildren<Props>) {
  return (
    <div className="container">
      <Header />
      <main className="main-body">{children}</main>
      <Footer />
    </div>
  );
}
