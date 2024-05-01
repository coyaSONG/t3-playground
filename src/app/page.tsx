import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/f84f23b3-e9c6-499e-9432-462620412cd5-506y70.jpeg",
  "https://utfs.io/f/2a948109-e75f-4531-b86c-0fccfb3fdc4f-506y6z.jpeg",
  "https://utfs.io/f/23930f67-71cd-4e4f-a72b-645b3d62665d-506y6y.jpeg",
  "https://utfs.io/f/4c693ab5-f6d0-4dac-a47e-f1a7024ea348-506y6w.jpeg",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((img) => (
          <div key={img.id} className="w-48">
            <img src={img.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
