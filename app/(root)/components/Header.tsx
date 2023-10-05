import TopHeader from "./TopHeader";
import TitleHeader from "./TitleHeader";
import NavHeader from "./NavHeader";

export function Header() {
  return (
    <header className="relative flex flex-col">
      <TopHeader />
      <TitleHeader />
      <NavHeader />
    </header>
  );
}
