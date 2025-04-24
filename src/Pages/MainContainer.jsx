import { useEffect,useState } from "react"
import SearchBar from "../Components/SearchBar/SearchBar"
import ProductCard from "../Components/ProductCard/ProductCard"
import "../Styles/MainContainer.css"
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
      <div className="product-grid">
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
