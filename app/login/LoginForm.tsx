"use client";

import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`Email: ${email}`);
  }

  return (
    <form
      className="flex flex-col p-5 gap-2 mt-72 w-1/2 self-center border-4 rounded-3xl border-midTan text-2xl bg-ltGreen"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="emailInput"
        className="pointer-events-none mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
      >
        Please enter your email:
      </label>
      <input
        type="text"
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&amp;:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="emailInput"
        placeholder="Email address"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="my-7 text-4xl font-medium hover:font-bold"
      >
        Login Here
      </button>
    </form>
  );
}