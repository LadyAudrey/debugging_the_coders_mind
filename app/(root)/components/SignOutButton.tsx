"use client";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();
  function handleSignout() {
    const response = fetch(`https://${process.env.NEXT_PUBLIC_URL}api/signout`, {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          router.push("/");
        }
      })
      .catch(console.log);
  }
  return (
    <button className="mr-5" onClick={handleSignout}>
      Sign Out
    </button>
  );
}
