"use client";

export default function SignOutButton() {
  async function handleSignout() {
    fetch(`${process.env.NEXT_SITE_URL}api/signout`);
  }
  return <button onClick={handleSignout}>Sign Out</button>;
}
