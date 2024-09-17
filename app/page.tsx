import SelectionResult from "./Selection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-center text-5xl text-gray-100">Malang</h1>
      <SelectionResult />
    </div>
  );
}
