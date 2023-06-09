import AppBar from "../components/AppBar";
import { Providers } from "../components/Providers";
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppBar />
          <div className={"min-h-screen"}>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}