"use client";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();
  function handleSignout() {
    const response = fetch(`https://${process.env.VERCEL_URL}api/signout`, {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          router.push("/");
        }
      })
      .catch(console.log);
  }
  return <button onClick={handleSignout}>Sign Out</button>;
}
