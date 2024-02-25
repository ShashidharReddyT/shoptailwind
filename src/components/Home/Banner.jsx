import Star from "../svg/Star";
export default function Banner({ className }) {
  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="banner-card xl:flex xl:space-x-4 xl:h-[600px] mb-4">
              <div data-aos="fade-right" className="w-full xl:w-1/2">
                <a href="/single-product">
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
                      className="w-full h-auto xl:h-full object-fill"
                    />
                  </picture>
                </a>
              </div>
              <div
                data-aos="fade-left"
                className="w-full xl:w-1/2 mb-4 xl:mb-0"
              >
                <a href="/single-product">
                  <img
                    src={`${
                      import.meta.env.VITE_PUBLIC_URL
                    }/src/assets/images/banner-3.png`}
                    alt=""
                    className="w-full h-auto xl:h-full object-fill"
                  />
                </a>
              </div>

              <div
                data-aos="fade-left"
                className="w-full xl:w-1/2 mb-4 xl:mb-0"
              >
                <a href="/single-product">
                  <img
                    src={`${
                      import.meta.env.VITE_PUBLIC_URL
                    }/src/assets/images/banner-2.png`}
                    alt=""
                    className="w-full h-auto xl:h-full object-fill"
                  />
                </a>
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
