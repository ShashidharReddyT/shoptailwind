import { useState } from "react";
import CategoryCard from "../components/CategoryCard";
import ProductCardStyleOne from "../components/ProductCardStyleOne";
import DataIteration from "./DataIteration";
import ViewMoreTitle from "./ViewMoreTitle";

export default function SectionStyleOne({
  className,
  categoryTitle,
  sectionTitle,
  seeMoreUrl,
  brands = [],
  products = [],
  categoryBackground,
}) {
  const filterBrands = brands.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  const [productLength] = useState(3);
  // useEffect(() => {
  //   if (window.matchMedia("(max-width: 1024px)")) {
  //     setLength(2);
  //   }
  // }, []);
  return (
    <div data-aos="fade-up" className={`section-style-one ${className || ""}`}>
      <ViewMoreTitle categoryTitle={sectionTitle} seeMoreUrl={seeMoreUrl}>
        <div className="products-section w-full">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
            <DataIteration
              datas={products}
              startLength={0}
              endLength={productLength}
            >
              {({ datas }) => (
                <div key={datas.id} className="item">
                  <ProductCardStyleOne datas={datas} />
                </div>
              )}
            </DataIteration>
          </div>
        </div>
      </ViewMoreTitle>
    </div>
  );
}
