const Marquee = () => {
  return (
    <div className="w-full h-6 z-5 text-xl bg-white text-black lg:static absolute top-0">
      <marquee behavior="scroll" direction="left">
        Copyright &copy; 2025 | Designed & Built by Muhammad Ali. All Rights
        Reserved.
      </marquee>
    </div>
  );
};

export default Marquee;
