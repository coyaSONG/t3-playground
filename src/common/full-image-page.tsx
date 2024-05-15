import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { getImage } from "~/server/queries";
import { deleteImage } from "~/server/queries";

export default async function FullImagePage(props: { id: number }) {
  const idAsNumber = Number(props.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid phot id");
  const image = await getImage(props.id);

  const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>

      <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
        <div className=" border-b p-2 text-center text-xl">{image.name}</div>

        <div className="p-2">
          <span>Uploaded By:</span>
          <span>{userInfo.fullName}</span>
        </div>

        <div className="p-2">
          <span>Created On:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="p-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(idAsNumber);
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
