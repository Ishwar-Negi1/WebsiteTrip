import "./Other.css";
import Input from "../../components/Input";

function Other({ handleChange }) {
  return (
    <div className="other">
      <h2 className="sidebar-title">Other</h2>
      <div>       
        <Input
          handleChange={handleChange}
          value="free cancellation"
          title="Free Cancellation"
          name="test"
        />  
      </div>
    </div>
  );
}

export default Other;
