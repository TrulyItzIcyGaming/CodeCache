
import SearchInput from "@components/SearchInput";
import ThemeToggle from "@components/ThemeToggle";

const Header = () => {
  return (
    <header className="header">
      <nav className="primary-nav">
        <SearchInput />
        <ThemeToggle />
        <button class="chronicle-button">
          <span>
            <em>Stack Sorted.</em>
          </span>
          <span>
            <em>Stack Sorted.</em>
            </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
