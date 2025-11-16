import Link from "next/link";

export default function ContactSuccess() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-4 mt-10 mb-20">
        <h1 className="text-4xl font-semibold mt-10">Thank You!</h1>
        <p className="mt-4 text-xl text-center">
          Your message has been received. I will get back to you as soon as
          possible.
        </p>
        <Link href="/" className="mt-6 underline">
          Return to Home
        </Link>
      </main>
    </>
  );
}
