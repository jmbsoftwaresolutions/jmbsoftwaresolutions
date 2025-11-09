import { AuthButton } from "@/components/auth/auth-button";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 mt-10">
      <Image
        className="rounded-full display-block"
        src="/images/headshot.png"
        alt="Headshot"
        width={200}
        height={200}
      />

      <h1 className="text-7xl">James Bales</h1>
      <p className="mt-4 text-2xl  text-muted-foreground">
        Software Engineer | Full Stack Developer
      </p>
      <p className="mt-2 text-xl">Reliable software solutions</p>
      <p className="mt-2 text-xl">20 Years of Experience</p>
      <p className="mt-2 text-xl">Dependable Results</p>
      <h1 className="text-2xl mt-10 font-semibold">Skills & Technologies</h1>
      <div className="grid grid-flow-col grid-rows-[100px_1fr] mt-6 gap-60 content-around">
        <div>
          <h1 className="text-xl font-semibold">Languages</h1>
          <ul className="list-inside mt-2 list-none">
            <li>JavaScript / TypeScript</li>
            <li>Python</li>
            <li>C#</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>PHP</li>
            <li>HTML & CSS</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Frameworks</h1>
          <ul className="list-inside mt-2 list-none">
            <li>React</li>
            <li>Next.js</li>
            <li>Nest.js</li>
            <li>JQuery</li>
            <li>Django</li>
            <li>.NET Framework/.NET 5+</li>
            <li>ASP.NET</li>
            <li>Entity Framwork</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Databases</h1>
          <ul className="list-inside mt-2 list-none">
            <li>MySQL</li>
            <li>SQL Server</li>
            <li>Oracle</li>
            <li>Postgres</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Hosting</h1>
          <ul className="list-inside mt-2 list-none ">
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Openshift</li>
            <li>IIS</li>
            <li>Weblogic</li>
            <li>Apache</li>
            <li>Apache Tomcat</li>
            <li>Nginx</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Architectures</h1>
          <ul className="list-inside mt-2 list-none ">
            <li>Microservices</li>
            <li>Serverless</li>
            <li>Monolithic</li>
            <li>REST APIs</li>
            <li>SOAP Web Serivces</li>
            <li>Integrations</li>
            <li>Single Page Applications</li>
            <li>Model-View-Controller</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Cloud</h1>
          <ul className="list-inside mt-2 list-none ">
            <li>Amazon Web Services</li>
            <li>Azure</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
