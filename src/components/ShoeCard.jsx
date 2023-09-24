
const ShoeCard = ({ imgURL, changeShoe, shoeImg}) => {
 const handleClick = () => {
    if(shoeImg !== imgURL.bigShoe) changeShoe(imgURL.bigShoe)
 }
    return (
    <div className={`border-2 rounded-xl
    ${shoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1
    `} onClick={handleClick}>
        <div height={83} width={107} className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail} alt="shoe col" height={103} width={127} className="object-contain" onClick={changeShoe}/>
        </div>
    </div>
  )
}

export default ShoeCard