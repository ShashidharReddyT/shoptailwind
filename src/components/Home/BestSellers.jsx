export default function BestSellers({ className }) {
  return (
    <div className={`w-full ${className || ""}`}>
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 xl:gap-[30px] gap-5">
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          className="item w-full flex flex-col items-center"
        >
          <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
            <img
              src={`${
                import.meta.env.VITE_PUBLIC_URL
              }/src/assets/images/saller-1.png`}
              alt=""
            />
          </div>
          <a to="/saller-page">
            <p className="text-base font-500 text-center">Shopno BD</p>
          </a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="200"
          className="item w-full flex flex-col items-center"
        >
          <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
            <img
              src={`${
                import.meta.env.VITE_PUBLIC_URL
              }/src/assets/images/saller-4.png`}
              alt=""
            />
          </div>
          <a to="/saller-page">
            <p className="text-base font-500 text-center">Rikayi Rox</p>
          </a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="100"
          className="item w-full flex flex-col items-center"
        >
          <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
            <img
              src={`${
                import.meta.env.VITE_PUBLIC_URL
              }/src/assets/images/saller-5.png`}
              alt=""
            />
          </div>
          <a to="/saller-page">
            <p className="text-base font-500 text-center">Habbriyi</p>
          </a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="100"
          className="item w-full flex flex-col items-center"
        >
          <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
            <img
              src={`${
                import.meta.env.VITE_PUBLIC_URL
              }/src/assets/images/saller-6.png`}
              alt=""
            />
          </div>
          <a to="/saller-page">
            <p className="text-base font-500 text-center">Rayhans</p>
          </a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="400"
          className="item w-full flex flex-col items-center"
        >
          <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
            <img
              src={`${
                import.meta.env.VITE_PUBLIC_URL
              }/src/assets/images/saller-2.png`}
              alt=""
            />
          </div>
          <a to="/saller-page">
            <p className="text-base font-500 text-center">Eecoms Shop</p>
          </a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="300"
          className="item w-full flex flex-col items-center"
        >
          <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
            <img
              src={`${
                import.meta.env.VITE_PUBLIC_URL
              }/src/assets/images/saller-3.png`}
              alt=""
            />
          </div>
          <a to="/saller-page">
            <p className="text-base font-500 text-center">Fusion X</p>
          </a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="200"
          className="item w-full flex flex-col items-center"
        >
          <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
            <img
              src={`${
                import.meta.env.VITE_PUBLIC_URL
              }/src/assets/images/saller-4.png`}
              alt=""
            />
          </div>
          <a to="/saller-page">
            <p className="text-base font-500 text-center">Rikayi Rox</p>
          </a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="100"
          className="item w-full flex flex-col items-center"
        >
          <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
            <img
              src={`${
                import.meta.env.VITE_PUBLIC_URL
              }/src/assets/images/saller-5.png`}
              alt=""
            />
          </div>
          <a to="/saller-page">
            <p className="text-base font-500 text-center">Habbriyi</p>
          </a>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="100"
          className="item w-full flex flex-col items-center"
        >
          <div className="w-[170px] h-[170px] rounded-full bg-white flex justify-center items-center overflow-hidden mb-2">
            <img
              src={`${
                import.meta.env.VITE_PUBLIC_URL
              }/src/assets/images/saller-6.png`}
              alt=""
            />
          </div>
          <a to="/saller-page">
            <p className="text-base font-500 text-center">Rayhans</p>
          </a>
        </div>
      </div>
    </div>
  );
}
