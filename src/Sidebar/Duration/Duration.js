import "./Duration.css";
import Input from "../../components/Input";

function Duration({ handleChange }) {
  return (
    <div className="durationClass">
      <h2 className="sidebar-title">Duration</h2>

      <div>
        <Input
          value="up to 1 hour"
          title="Up To 1 Hour"
          name="test"
        />
        <Input
          value="1 to 4 hours"
          title="1 To 4 Hours"
          name="test"
        />
        <Input
          value="4 hours to 1 day"
          title="4 Hours to 1 Day"
          name="test"
        />
       
      </div>
    </div>
  );
}

export default Duration;
