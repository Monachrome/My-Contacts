import React from "react";
import Card from "./Card"
import Avatar from "./Avatar";

function App() {
  return (


    <div>
      <Avatar img="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg" />
      <h1 className="heading">My Contacts</h1>
      
      <Card 
        name="Noah"
        img="https://images.iphonephotographyschool.com/24755/portrait-photography.jpg"
        tel="+983345778"
        email="noah@outlook.com"
      />

      <Card 
        name="Selina"
        img="https://cutt.ly/hXUjW9y"
        tel="+973345678"
        email="s@outlook.com"
      />

    </div>
  );
}

export default App;