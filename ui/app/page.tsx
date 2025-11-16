import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-4 mt-10 mb-20">
        <Image
          className="rounded-full block mx-auto"
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

        <h1 className="text-2xl mt-10 font-semibold text-center">
          Skills & Technologies
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 w-full max-w-6xl mx-auto">
          <Card className="h-full bg-gray-100">
            <CardHeader>
              <h3 className="text-xl font-semibold text-center sm:text-left">
                Languages
              </h3>
            </CardHeader>
            <CardContent>
              <ul className="list-inside mt-2 list-none text-center sm:text-left">
                <li>JavaScript / TypeScript</li>
                <li>Python</li>
                <li>C#</li>
                <li>C/C++</li>
                <li>Java</li>
                <li>PHP</li>
                <li>HTML & CSS</li>
                <li>SQL</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="h-full bg-gray-100">
            <CardHeader>
              <h3 className="text-xl font-semibold text-center sm:text-left">
                Databases
              </h3>
            </CardHeader>
            <CardContent>
              <ul className="list-inside mt-2 list-none text-center sm:text-left">
                <li>MySQL</li>
                <li>SQL Server</li>
                <li>Oracle</li>
                <li>Postgres</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="h-full bg-gray-100">
            <CardHeader>
              <h3 className="text-xl font-semibold text-center sm:text-left">
                Frameworks
              </h3>
            </CardHeader>
            <CardContent>
              <ul className="list-inside mt-2 list-none text-center sm:text-left">
                <li>React</li>
                <li>Next.js</li>
                <li>Nest.js</li>
                <li>JQuery</li>
                <li>Django</li>
                <li>.NET Framework/.NET 5+</li>
                <li>ASP.NET</li>
                <li>Entity Framwork</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full bg-gray-100">
            <CardHeader>
              <h3 className="text-xl font-semibold text-center sm:text-left">
                Web & Application Servers
              </h3>
            </CardHeader>
            <CardContent>
              <ul className="list-inside mt-2 list-none text-center sm:text-left">
                <li>IIS</li>
                <li>Weblogic</li>
                <li>Apache</li>
                <li>Apache Tomcat</li>
                <li>Nginx</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="h-full bg-gray-100">
            <CardHeader>
              <h3 className="text-xl font-semibold text-center sm:text-left">
                Architectures
              </h3>
            </CardHeader>
            <CardContent>
              <ul className="list-inside mt-2 list-none text-center sm:text-left">
                <li>Microservices</li>
                <li>Serverless</li>
                <li>Monolithic</li>
                <li>REST APIs</li>
                <li>SOAP Web Serivces</li>
                <li>Integrations</li>
                <li>Single Page Applications</li>
                <li>Model-View-Controller</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="h-full bg-gray-100">
            <CardHeader>
              <h3 className="text-xl font-semibold text-center sm:text-left">
                Cloud & DevOps
              </h3>
            </CardHeader>
            <CardContent>
              <ul className="list-inside mt-2 list-none text-center sm:text-left ">
                <li>Amazon Web Services</li>
                <li>Azure</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Openshift</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
