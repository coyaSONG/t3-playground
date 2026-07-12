import { headers } from "next/headers";
import { Show } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  await headers();

  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((img) => (
        <div key={img.id} className="w-48">
          <Link href={`/img/${img.id}`}>
            <Image
              src={img.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={img.name}
            />
          </Link>
          <div>{img.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <Show when="signed-out">
        <div className="h-full w-full text-center text-2xl">Please sign in</div>
      </Show>
      <Show when="signed-in">
        <Images />
      </Show>
    </main>
  );
}
