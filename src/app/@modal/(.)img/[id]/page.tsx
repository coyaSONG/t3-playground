import { Modal } from "./modal";
import FullImagePage from "~/common/full-image-page";

export default async function PhotoModal({ params }: {
  params: Promise<{ id: string }>;
}) {
  const { id: photoId } = await params;
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  return (
    <Modal>
      <FullImagePage id={idAsNumber} />
    </Modal>
  );
}
