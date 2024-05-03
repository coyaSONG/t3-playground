import { headers } from "next/headers";
import { db } from "../server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  headers();
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((img, idx) => (
          <div key={img.id + "-" + idx} className="w-48">
            <img src={img.url} />
            <div>{img.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
