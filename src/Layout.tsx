import { ThemeModeScript } from "flowbite-react";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Flowbite React Template React-Server</title>
        <ThemeModeScript />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
