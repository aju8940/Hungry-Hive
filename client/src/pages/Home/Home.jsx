import { ExploreMenu } from "../../components/ExploreMenu/ExploreMenu";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="header-contents">
          <h2>Order your favourite food here </h2>
          <p>
            From savory to sweet, find your cravings fulfilled! Order now for a
            delightful culinary journey right at your doorstep.
          </p>
          <button>View Menu</button>
        </div>
      </div>
      <ExploreMenu/>
    </div>
  );
};
