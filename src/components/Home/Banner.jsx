import Star from "../svg/Star";
export default function Banner({ className }) {
  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card xl:flex xl:space-x-[30px] xl:h-[600px]  mb-[30px]">
              <div data-aos="fade-right" className="xl:w-[740px] w-full h-full">
                <a to="/single-product">
                  <picture>
                    <source
                      media="(min-width:1025px)"
                      srcSet={`${
                        import.meta.env.VITE_PUBLIC_URL
                      }/src/assets/images/banner-1.png`}
                    />
                    <img
                      src={`${
                        import.meta.env.VITE_PUBLIC_URL
                      }/src/assets/images/banner-1.2.png`}
                      alt=""
                      className="w-full max-w-full h-auto object-cover"
                    />
                  </picture>
                </a>
              </div>
              <div
                data-aos="fade-left"
                className="flex-1 flex xl:flex-col flex-row  xl:space-y-[30px] h-full"
              >
                <div className="w-full xl:h-1/2">
                  <a to="/single-product">
                    <img
                      src={`${
                        import.meta.env.VITE_PUBLIC_URL
                      }/src/assets/images/banner-2.png`}
                      alt=""
                      className="w-full h-full"
                    />
                  </a>
                </div>
                <div className="w-full xl:h-1/2">
                  <a to="/single-product">
                    <img
                      src={`${
                        import.meta.env.VITE_PUBLIC_URL
                      }/src/assets/images/banner-3.png`}
                      alt=""
                      className="w-full h-full"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="best-services w-full bg-white flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10"
            >
              <div className="item">
                <div className="flex space-x-5 items-center">
                  <div>
                    <span>
                      <Star />
                    </span>
                  </div>
                  <div>
                    <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                      Free Shipping
                    </p>
                    <p className="text-sm text-qgray">
                      When ordering over $100
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="flex space-x-5 items-center">
                  <div>
                    <span>
                      <Star />
                    </span>
                  </div>
                  <div>
                    <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                      Free Return
                    </p>
                    <p className="text-sm text-qgray">
                      Get Return within 30 days
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="flex space-x-5 items-center">
                  <div>
                    <span>
                      <Star />
                    </span>
                  </div>
                  <div>
                    <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                      Secure Payment
                    </p>
                    <p className="text-sm text-qgray">
                      100% Secure Online Payment
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="flex space-x-5 items-center">
                  <div>
                    <span>
                      <Star />
                    </span>
                  </div>
                  <div>
                    <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                      Best Quality
                    </p>
                    <p className="text-sm text-qgray">
                      Original Product Guarenteed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
