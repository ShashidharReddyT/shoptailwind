import SearchBox from "../SearchBox";

export default function Middlebar({ className, type }) {
  return (
    <div className={`w-full h-[86px] bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div>
              {type === 3 ? (
                <a to="/">
                  <img
                    width="152"
                    height="36"
                    src={`${
                      import.meta.env.VITE_PUBLIC_URL
                    }/src/assets/images/logo-3.svg`}
                    alt="logo"
                  />
                </a>
              ) : type === 4 ? (
                <a to="/">
                  <img
                    width="152"
                    height="36"
                    src={`${
                      import.meta.env.VITE_PUBLIC_URL
                    }/src/assets/images/logo-4.svg`}
                    alt="logo"
                  />
                </a>
              ) : (
                <a to="/">
                  <img
                    width="152"
                    height="36"
                    src={`${
                      import.meta.env.VITE_PUBLIC_URL
                    }/src/assets/images/logo.svg`}
                    alt="logo"
                  />
                </a>
              )}
            </div>
            <div className="w-[517px] h-[44px]">
              <SearchBox type={type} className="search-com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
