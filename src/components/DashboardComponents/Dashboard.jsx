import React from "react";
import useStore from "../../store/zustandStore";
import Category from "./Category";

const Dashboard = () => {
  const { dashboard } = useStore();
  return (
    <div className="m-8 sm:m-8 sm:ml-16 flex">
      <div>
        {dashboard.categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
