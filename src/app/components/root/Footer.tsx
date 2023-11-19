const Footer = () => {
  return (
    <div className="bg-slate-200 p-2 print:hidden">
      <p className="text-center ">
        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
