"use client";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();
  function handleSignout() {
    const response = fetch(`${process.env.API_URL}api/signout`, {
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
