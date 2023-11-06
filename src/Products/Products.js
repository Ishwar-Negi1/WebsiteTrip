import "./Product.css";

const Products = ({ selectedCategory,result,results,query }) => {

  return (
    <>
     <section className="card-container">{selectedCategory === null && query ===''?results:result}</section>
    </>
  );
};

export default Products;
