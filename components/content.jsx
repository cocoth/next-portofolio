import React from "react";
import data from "@/components/data.json";


const datas = data.map((item, i)=>{
    const desLineBreak = item.description
    return(
        <div className="border border-gray-400 backdrop-blur-md rounded-xl p-2 md:p-4 leading-8 my-4 " key={i}>
            <h2 className="text-4xl font-ubuntu font-semibold text-sky-500">{item.title}</h2>
            <p className="mt-4 text-gray-300">
                {desLineBreak}
            </p>
        </div>
    )
});
const Content = () => {
    return(

        <div className="dark:bg-slate-950 rounded-2xl border border-dashed dark:border-none mx-4">
            <section className=" items-center justify-center mx-5 md:mx-10 text-center lg:text-left">
                <h1 className="text-4xl text-white text-center pt-10 pb-5 font-ubuntu font-bold">
                    Some Skills
                </h1>
                <div className="lg:grid lg:grid-cols-3 gap-3 py-5">
                    {datas}                    
                </div>
            </section>
        </div>

    )
}
export default Content;