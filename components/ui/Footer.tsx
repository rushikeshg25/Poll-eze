const Footer = () => {
  return (
    <div className="flex justify-center p-5 text-sm text-gray-400">
      Built by&nbsp;{" "}
      <a
        target="_blank"
        className="font-medium underline cursor-pointer underline-offset-4"
      >
        {" "}
        Rushikeshg25
      </a>
      . The The source code is available on&nbsp;
      <a
        target="_blank"
        className="font-medium underline cursor-pointer underline-offset-4"
      >
        GitHub
      </a>
      .
    </div>
  );
};

export default Footer;
