
import LinkButton from "@components/LinkButton";
import SearchInput from "@components/SearchInput";
import ThemeToggle from "@components/ThemeToggle";

const Header = () => {
  return (
    <header className="header">
      <nav className="primary-nav">
        <SearchInput />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
