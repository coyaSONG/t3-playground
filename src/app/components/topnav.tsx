import { SignInButton, SignedOut, UserButton, SignedIn } from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="text-semibold flex w-full items-center justify-between border-b p-4 text-xl">
      <div>Playground</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
