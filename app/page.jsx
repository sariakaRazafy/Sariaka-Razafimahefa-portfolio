export default function Home() {
  return (
    <main className="min-h-screen text-center p-10">
      <h1 className="text-4xl font-bold">
        Hello 👋 <br />
        I&apos;m <span className="text-green-500">Harintsoa</span>
      </h1>

      <img
        src="/photo.jpg"
        alt="profile"
        className="mx-auto mt-10 rounded-full w-40"
      />

      <p className="mt-4 text-gray-600">
        Passionate about web development.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="/cv.pdf"
          className="bg-green-400 px-6 py-3 rounded-lg text-white"
        >
          Download Resume
        </a>

        <a
          href="#projects"
          className="border border-green-400 px-6 py-3 rounded-lg"
        >
          Project
        </a>
      </div>
    </main>
  );
}
