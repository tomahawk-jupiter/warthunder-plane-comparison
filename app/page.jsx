// import Image from "next/image";
import planeData from "../planeData";
import PlaneDisplay from "./_components/planeDisplay";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex flex-col min-h-screen items-center p-24">
      <h1>Warthunder planes!!!</h1>
      <div className="flex flex-row">
        <PlaneDisplay planeData={planeData} />
        <PlaneDisplay planeData={planeData} />
      </div>
    </main>
  );
}
