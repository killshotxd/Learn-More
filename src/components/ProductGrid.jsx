const ProductGrid = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-1">
        <div className="bg-gray-100">
          <div>
            <img
              className="h-[50%] w-auto px-6 py-6 object-cover"
              src="https://m.media-amazon.com/images/I/61LlQRdDZ2L._SL1500_.jpg"
              alt="buds"
            />

            <div className="px-7">
              <h3 className="text-2xl ">Popular Products</h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                nisi impedit vero eum. Modi, amet.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="btn btn-outline">Shop Now</button>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="bg-gray-200">
          <div>
            <img
              className="h-[50%] w-auto px-6 py-6 object-cover"
              src="https://m.media-amazon.com/images/I/61LlQRdDZ2L._SL1500_.jpg"
              alt="buds"
            />

            <div className="px-7">
              <h3 className="text-2xl ">Popular Products</h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                nisi impedit vero eum. Modi, amet.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="btn btn-outline">Shop Now</button>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="bg-gray-300">
          <div>
            <img
              className="h-[50%] w-auto px-6 py-6 object-cover"
              src="https://m.media-amazon.com/images/I/61LlQRdDZ2L._SL1500_.jpg"
              alt="buds"
            />

            <div className="px-7">
              <h3 className="text-2xl ">Popular Products</h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                nisi impedit vero eum. Modi, amet.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="btn btn-outline">Shop Now</button>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="bg-neutral text-white">
          <div>
            <img
              className="h-[50%] w-auto px-6 py-6 object-cover"
              src="https://m.media-amazon.com/images/I/61LlQRdDZ2L._SL1500_.jpg"
              alt="buds"
            />

            <div className="px-7">
              <h3 className="text-2xl ">Popular Products</h3>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                nisi impedit vero eum. Modi, amet.
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="btn btn-outline text-white">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
