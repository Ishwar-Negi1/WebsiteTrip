import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="price">
        <h2 className="sidebar-title price-title">Price</h2>
        <input onChange={handleChange} type="range" id="vol" name="vol" min="0" max="500" style={{padding:'0px'}}/>     
      </div>
    </>
  );
};

export default Price;

