import TopHeader from "./TopHeader";
import TitleHeader from "./TitleHeader";
import NavHeader from "./NavHeader";

export function Header() {
  return (
    <header className="w-full h-full">
      <TopHeader />
      <TitleHeader />
      <NavHeader />
    </header>
  );
}
