import { useEffect,useState } from "react"
import SearchBar from "../Components/SearchBar/SearchBar"
import ProductCard from "../Components/ProductCard/ProductCard"
const MainContainer = () => {
    const [products, setProducts] = useState([])   
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then(res => res.json())
          .then(data => setProducts(data));
      }, []);
    
      const filteredProducts = products.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
        //aqui llamamos a la api y guardamos los productos en el estado products
        //aqui filtramos los productos por el search term
  return (
    <>
       <SearchBar setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
        
    </>
    //aqui renderizamos los productos filtrados
    //aqui renderizamos el search bar
  )
}

export default MainContainer
