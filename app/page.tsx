// required for the routing to happen (other option is route.tsx)
// I AM ROOT
import { TopHeader } from "./components/TopHeader/page"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TopHeader />
      <h1>Hi, I'm an H1 div</h1>
    </main>
  )
}
