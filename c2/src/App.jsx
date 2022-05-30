
import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import { useState } from "react";

function App() {
  const [value ,setValue] = useState("")

  return (
    <div className="container">
      <Input  type={"text"} size={"md"} onChange={(e)=>{setValue(e.target.value)}}/>

      <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"}
      alt={"username"}
      borderRadius={100}
      width={200}
      height={200}
      fit={"cover"}
      />

      <Pagination total={10}  />
    </div>
  );
}

export default App;
