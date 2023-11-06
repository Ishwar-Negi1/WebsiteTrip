import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div className="bottomClass">
      <h4 className="sidebar-title">Category Types</h4>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="tours"
          title="Tours"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="attractions"
          title="Attractions"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="day trips"
          title="Day Trips"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="outdoor activities"
          title="Outdoor Activities"
          name="test"
        />
        <Input
        handleChange={handleChange}
        value="concert and shows"
        title="Concert And Shows"
        name="test"
      />
      </div>
    </div>
  );
}

export default Category;
