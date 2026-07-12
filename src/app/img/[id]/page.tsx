import FullImagePage from "~/common/full-image-page";

export default async function PhotoPage({ params }: {
  params: Promise<{ id: string }>;
}) {
  const { id: photoId } = await params;
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  return (
    <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
      <FullImagePage id={idAsNumber} />
    </div>
  );
}
