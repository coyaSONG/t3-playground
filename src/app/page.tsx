import { headers } from "next/headers";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  headers();

  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((img) => (
        <div key={img.id} className="w-48">
          <img src={img.url} />
          <div>{img.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
