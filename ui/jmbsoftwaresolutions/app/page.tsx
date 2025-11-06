
import { AuthButton } from "@/components/auth/auth-button";
import Image from 'next/image';
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold text-lg md:text-4xl">
              JMB Software Solutions

            </div>
            <AuthButton />
          </div>
        </nav>

        <div className="flex-1 w-full flex justify-center">
          <div className="w-full flex">
            {/* Left sidebar / menu */}
            <aside className="hidden md:block w-64 shrink-0 bg-background/50 p-4 static" aria-label="Primary sidebar">
              <nav className="flex flex-col gap-2" aria-label="Main menu">
                <a href="#" className="text-sm font-medium px-2 py-2 rounded hover:bg-foreground/5">Dashboard</a>
                <a href="#" className="text-sm font-medium px-2 py-2 rounded hover:bg-foreground/5">Projects</a>
                <a href="#" className="text-sm font-medium px-2 py-2 rounded hover:bg-foreground/5">Services</a>
                <a href="#" className="text-sm font-medium px-2 py-2 rounded hover:bg-foreground/5">Contact</a>
              </nav>
            </aside>

            <main className="flex flex-col mx-14 gap-6 px-4 w-full mt-10 ">
              <div>
                <Image
                  className="rounded-full border float-right display-block"
                  src="/images/headshot.png" // Path to your image
                  alt="Headshot" // Essential for accessibility and SEO
                  width={200} // Desired width
                  height={200} // Desired height
                />
                <h1 className="text-xl font-bold">Welcome to JMB Software Solutions</h1>
                <p className="text-lg text-muted-foreground">
                  Your trusted partner for custom software development and IT solutions.

                </p>

              </div>


            </main>
          </div>
        </div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">


        </footer>
      </div>
    </main>
  );
}
