const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 pt-8 mb-8 text-sm text-[#ffffff61] border-t-[1px] border-[#ffffff32] mr-2">
      <p className="mb-1">&copy; {new Date().getFullYear()} Ecommerce</p>
      <p>
        Designed and Developed by{" "}
        <a
          href="https://sayanmunshi.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="underline hover:no-underline hover:text-white transition-all"
        >
          Sayan Munshi
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/kumar29saranya"
          target="_blank"
          rel="noreferrer"
          className="underline hover:no-underline hover:text-white transition-all"
        >
          Saranya Kumar
        </a>
      </p>
    </div>
  );
};

export default Footer;
