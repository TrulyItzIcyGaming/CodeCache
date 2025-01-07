const Footer = () => {
  return (
    <>
      <hr className="divider" />

      <footer className="footer">
        <div className="footer__content flow" data-flow-space="sm">
          <p>
            <a href="/" className="styled-link">
              CodeCache
            </a>{" "}
            is an project that categorizes handy code snippets
            across various programming languages.
          </p>
          <p>
            Built with love and powered by an
              awesome community
            . 🚀
            <span class="text"><a id="linkanimation" href="https://stacksorted.com/links/jtb-studios" target="_blank">Stack sorted.</a> </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
