"use client";

import { SignInButton, SignedOut, UserButton, SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  const router = useRouter();
  return (
    <nav className="text-semibold flex w-full items-center justify-between border-b p-4 text-xl">
      <div>Playground</div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
