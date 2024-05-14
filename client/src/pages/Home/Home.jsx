import { useState } from "react";
import { ExploreMenu } from "../../components/ExploreMenu/ExploreMenu";
import "./Home.css";
import { FoodDisplay } from "../../components/FoodDisplay/FoodDisplay";

export const Home = () => {
  const [category,setCategory] = useState('All')
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
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  );
};
