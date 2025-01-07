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
          <style>
          .text {
  font-size: 25px;
}
#linkanimation {
  text-decoration: none;
  text-decoration-color: none;
  color: white;
  position: relative;
}
#linkanimation::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #FEFEFE;
  transform: scale(1,1);
  transition: background-color .5s ease-in-out;
  bottom: 0px;
}
#linkanimation:hover::before {
  animation: link ease 1s 1 300ms;
  transform-origin: right;  
}
@keyframes link {
  50%{
    transform: scaleX(0);
  }
  50.1% {
    transform: translateX(-100%) scalex( -0.01);   
  }
  100% {
    transform: translateX(-100%) scalex(-1);
  }
}
          </style>
        </div>
      </footer>
    </>
  );
};

export default Footer;
