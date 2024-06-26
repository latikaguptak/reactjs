import { useState, useEffect } from "react";
const Products = () => {
const [products, setProducts] = useState([]);

const getProducts = () => {
    fetch('https://dummyjson.com/products').then((response) =>{
        response.json().then((data) => {
            setProducts(data.products);
            console.log(data);
        });
    }).catch((error)=>{
        console.log(error);
    });



}

useEffect(() => {
    getProducts();
    console.log('products', products);
}, []);
    return (
    <>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
          <div className=   "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              
              <div className="mt-4 flex justify-between">
                <div>   
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.category}</p>
                <p className="text-sm font-medium text-gray-900">{product.brand}</p>
                <p className="text-md font-medium text-gray-900">Price: Rs{product.price}</p>
                <p className="text-md font-medium text-yellow-600">Rating: star{product.rating}</p>
                
                
              </div>
              <p className="text-sm font-medium text-blue-600">{product.description}</p>
            </div>
          ))} 
          </div>
        
        </div>
      </div>
      </>
    );
  }
  
  export default Products;
  
