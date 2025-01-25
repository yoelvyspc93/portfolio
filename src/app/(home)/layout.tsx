import { ReactNode } from "react";

export default function HomeLayout({
  modal,
}: Readonly<{
  modal: ReactNode;
}>) {
  return (
    <main id="main">
      <h1>Yoelvys</h1>
      {modal}
    </main>
  );
}
