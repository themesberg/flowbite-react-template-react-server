import { ThemeModeScript } from "flowbite-react";

import { ThemeInit } from "../.flowbite-react/init";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Flowbite React Template React-Server</title>
        <ThemeModeScript />
      </head>
      <body className="antialiased">
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
