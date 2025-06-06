import React from "react";

const page = ({ params }: any) => {
  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p> profile page {params.id}</p>
    </div>
  );
};

export default page;
