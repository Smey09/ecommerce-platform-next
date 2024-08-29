import React from "react";
import Part1 from "@/app/components/Home/Part1";
import Today from "@/app/components/Today/Today";
import CategoriesForm from "@/app/components/Categories/CategoriesForm";
import BestSelling from "@/app/components/Best Selling/BestSelling";
import OurProducts from "@/app/components/OurProducts/OurProducts";
import Feature from "@/app/components/Featured/Feature";
import Service from "@/app/components/Featured/Service";
import FormFooter from "@/app/components/Footer/FormFooter";

const MainBody = () => {
  return (
    <div>
      <Part1 />
      <div className="h-16"></div>
      <Today />
      <div className="flex justify-center w-[83%] mx-auto my-10">
        <hr className="w-full border-t border-gray-300" />
      </div>
      <CategoriesForm />
      <div className="flex justify-center w-[83%] mx-auto my-10">
        <hr className="w-full border-t border-gray-300" />
      </div>
      <BestSelling />
      <div className="m-10"></div>
      <OurProducts />
      <div className="m-10"></div>
      <Feature />
      <Service />
      <FormFooter />
    </div>
  );
};

export default MainBody;
