const ProductCard = ({ product }: any) => {
  const { name, image, price, quantity } = product;
  return (
    <div className="shadow hover:shadow-xl rounded-md bg-white mb-4 md:mb-0 box-border overflow-hidden w-96">
      <div className="box-border h-56 overflow-hidden cursor-pointer">
        <img
          className=" hover:scale-105 duration-300 h-full w-full"
          src={image}
          alt=""
        />
      </div>
      <div className=" px-8 py-2">
        <h2 className="text-xl my-2 text-blue-500 font-semibold">{name}</h2>
        <div className="flex items-center justify-between my-3">
          <h5 className="text-lg font-medium">Quantity: {quantity}</h5>
        </div>

        <p className="text-2xl font-bold ">${price}</p>
      </div>
      <div className="flex justify-center mb-2">
        <button className=" px-3 py-1 bg-transparent border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded mt-5 duration-200 hover:scale-105">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
