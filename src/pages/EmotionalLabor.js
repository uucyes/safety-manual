import React from "react";
import manualData from "../assets/data";

const EmotionalLabor = () => {
  const { title, items } = manualData["emotional"];

  return (
    <div className="container">
      <h2 style={{ marginBottom: "20px", color: "#2563eb" }}>{title}</h2>
      <div className="subcategory-list">
        {items.map((item, index) => (
          <div key={index} className="subcategory-item">
            <div className="subcategory-title">{item.title}</div>
            <div className="subcategory-desc">{item.description}</div>
            <div
              className="content-view"
              dangerouslySetInnerHTML={{ __html: item.content }}
              style={{ display: "block", marginTop: "15px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmotionalLabor;