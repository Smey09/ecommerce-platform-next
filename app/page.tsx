import MainBody from "./Page/Home/page";
export default function Home() {
  return (
    <main className="flex min-h-screen bg-white">
      <div className="w-full">
        <hr className="w-full h-[1px] bg-gray-400" />
        <MainBody />
      </div>
    </main>
  );
}
