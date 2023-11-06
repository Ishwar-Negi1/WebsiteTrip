import { useState } from "react";
import TopNav from "./TopNavigation/TopNav";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import { Pagination } from "@mui/material";
import Footer from "./Footer/Footer";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [page, setPage] = useState(1);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  console.log(filteredItems,'fi');

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;
   // products
    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, cancellation, location, newPrice,title,duration }) =>
          category === selected ||
          cancellation === selected ||
          location === selected ||
          (Number(newPrice)>=0 && Number(newPrice) <= Number(selected)) ||
          title === selected||
          duration === selected
      );
    }
    return filteredProducts!==undefined && filteredProducts.map(
      ({ img, title,title1,title2, star, reviews, category,duration,cancellation,location,newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          title1={title1}
          title2={title2}
          star={star}
          reviews={reviews}
          category={category}
          duration={duration}
          cancellation={cancellation}
          location={location}
          newPrice={newPrice}
        />
      )
    );
  }
  const result = filteredData(products, selectedCategory, query);
  const results = paginator(products, page, 3);
  console.log(result,results,'res');

  //-----------------pagination--------------//
  const count = Math.ceil(products.length / 3);
  function paginator(items, current_page, per_page_items) {
    const newData=[]
    let page = current_page || 1,
    per_page = per_page_items,
    offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, per_page_items),
    total_pages = Math.ceil(items.length / per_page);
  
    const newObj =  {
      page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems
    };
    newData.push(newObj);

    

    return newData  && newData[0].data!==undefined && newData[0].data.map(
      ({ img, title,title1,title2, star, reviews, category,duration,cancellation,location,newPrice}) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          title1={title1}
          title2={title2}
          star={star}
          reviews={reviews}
          category={category}
          duration={duration}
          cancellation={cancellation}
          location={location}
          newPrice={newPrice}
          page={newData[0].page}
        />
      )
    );
  }
  const handlePageChange = (event, value) => {
    setPage(paginator(products, value, 3)[0].props.page);
  };

  
  return (
    <>
     <TopNav/>
     <Navigation query={query} handleInputChange={handleInputChange} />
     <div  style={{display:'flex'}} className="parentComponent">
      <Sidebar handleChange={handleChange} />
      <div style={{width:'100%'}} className="productPage">
      <Products selectedCategory={selectedCategory} result={result} results={results} query={query}/>
      <Pagination
            count={count}
            page={page}
            onChange={handlePageChange}
            color="success"
          />
          </div>
      </div>
      <Footer/>

    </>
  );
}

export default App;
