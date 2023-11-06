import Category from "./Category/Category";
import Other from './Other/Other';
import Price from "./Price/Price";
import Duration from './Duration/Duration';
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <Category handleChange={handleChange} />
        <Other handleChange={handleChange}/>
        <Price handleChange={handleChange} />
        <Duration handleChange={handleChange}/>
      </section>
    </>
  );
};

export default Sidebar;
