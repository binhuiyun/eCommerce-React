export default function CartItem({ product }) {
  return (
    <div className="w-full h-24 flex flex-row pb-6">
      <div className="w-[20%] h-full bg-red-400">
        {/* TODO: add product image here */}
      </div>
      <div className="relative w-[80%]">
        <h3 className="absolute top-0 left-2 font-bold">
          {product.productName}
        </h3>
        <div className="absolute top-0 right-2 text-indigo-600">{`$${product.price.toFixed(
          2
        )}`}</div>
        <div className="absolute bottom-0 left-2 w-12 h-4 flex border border-grey-500">
          <div className="flex items-center justify-center w-[33%] h-full cursor-pointer">
            <div className="font-light text-sm text-grey-500">-</div>
          </div>
          <div className="flex items-center justify-center w-[33%] h-full border-left border-grey-500">
            <div className="font-light text-xs text-grey-500 border-x pl-1 pr-1">
              {product.quantity}
            </div>
          </div>
          <div className="flex items-center justify-center w-[33%] h-full cursor-pointer">
            <div className="font-light text-sm text-grey-500">+</div>
          </div>
        </div>
        <div className="absolute bottom-0 right-2 text-sm text-gray-600 underline cursor-pointer">
          Remove
        </div>
      </div>
    </div>
  );
}
