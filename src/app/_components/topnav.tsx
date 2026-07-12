"use client";

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  const { isSignedIn } = useAuth();
  return (
    <nav className="text-semibold flex w-full items-center justify-between border-b p-4 text-xl">
      <div>Playground</div>
      <div className="flex flex-row items-center gap-4">
        {!isSignedIn && (
          <SignInButton />
        )}
        {isSignedIn && (
          <>
            <SimpleUploadButton />
            <UserButton />
          </>
        )}
      </div>
    </nav>
  );
}
