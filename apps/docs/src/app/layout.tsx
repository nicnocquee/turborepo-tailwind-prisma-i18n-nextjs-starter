import "../styles/globals.css";
// include styles from the ui package

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-900">
      <body>{children}</body>
    </html>
  );
}
