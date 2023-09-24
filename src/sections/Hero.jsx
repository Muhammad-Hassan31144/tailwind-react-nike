import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { shoes } from "../constants"
import { useState } from "react"
const Hero = () => {
  const [ bigShoe, setBigShoe ] = useState(bigShoe1)
  return (
  <section id="home" className="w-full flex  xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
    <div className="flex xl:w-2/5 flex-1 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
    <p className="mb-10 text-xl font-montserrat text-coral-red">Our Summer collections</p>
    <h1 className=" font-palanquin text-[72px] max-sm:text-[64px] max-sm:leading-[72px] font-bold xl:text-8xl">
      <span className="lg:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span> 
      <br />
    <span className="text-coral-red inline-block xl:mt-3">Nike</span> Shoes</h1>
    <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 ">Discover stylish Nike arrivals, quality <br />
    comfort, and innovation for your active life.</p>
    <Button label="Shop Now" icon={arrowRight}/>
    <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
      {statistics.map((item) => (
        <div key={item.label} >
          <p className="text-4xl font-bold font-palanquin">{item.value}</p>
          <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
        </div>
      ))}
    </div>
    </div>
    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-contain bg-center">
      <img src={bigShoe} alt="image hero" height={460} width={580} className="relative object-contain z-2"/>
    
    <div className="flex sm:gap-6 absolute p-0 top-[92%] gap-4 max-sm:px-6 max-sm:m-0 max-sm:z-3">
      {shoes.map((item) => (
      <div key={item}>
        <ShoeCard
          imgURL={item}
          changeShoe={(item)=> setBigShoe(item)}
          shoeImg={bigShoe}/>
          </div>))}
    </div>
    </div>
  </section>
  )
}

export default Hero