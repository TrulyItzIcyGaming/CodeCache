import { GitHubIcon } from "@components/Icons";
import LinkButton from "@components/LinkButton";
import Logo from "@components/Logo";
import SearchInput from "@components/SearchInput";
import ThemeToggle from "@components/ThemeToggle";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="primary-nav">
        <SearchInput />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
