import React from 'react';
import TeamCard from "./Style";
import { SMOOTH } from "./Info";
// import Button from '../Button';
import Info from "./Style";
const Latest = () => {
    return(
      <section className="py-6 sm:py-12 bg-gray-100 text-gray-800 mt-12">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Uncoming Events</h2>
          <p className="font-serif text-lgg dark:text-gray-900">Checkout Our Latest Events.</p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 w-full justify-center items-center">
  {SMOOTH.map((data) => {
    return <Info data={data} key={data.id} />;
  })}
</div>

      </div>
    </section>
    )
}
export default Latest;


