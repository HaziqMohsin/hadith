import Landing from "../components/Landing";

export default function Home() {
  return (
    <main className="min-h-screen max-w-lg gap-9 mx-auto flex flex-col justify-center items-center w-full p-4">
      <h1 className="text-white text-2xl">Kumpulan hadiths</h1>
      <Landing />
    </main>
  );
}
