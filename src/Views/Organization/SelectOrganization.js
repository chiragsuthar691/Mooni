import { Link } from "react-router-dom";
import { Card, CardItem } from "../../Components/Common";
import Nav from "../../Components/Navbar";

const SelectOrganization = () => {
  console.log("org");
  return (
    <div>
      <Nav />
      <Card>
        <CardItem>
          <Link to="select-organization">SelectOrganization</Link>
        </CardItem>
        <CardItem>SelectOrganization</CardItem>
        <CardItem>SelectOrganization</CardItem>
        <CardItem>SelectOrganization</CardItem>
      </Card>
    </div>
  );
};

export default SelectOrganization;
