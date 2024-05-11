import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <div className="flex justify-center p-2">
      <SignUp path="/sign-up" />
    </div>
}