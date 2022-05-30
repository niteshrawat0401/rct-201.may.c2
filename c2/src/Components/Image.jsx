
export const Image = ({ src, alt, borderRadius, width, height, fit }) => {

  const picture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"
  return (
    <div>
      <img src={picture} alt={"eye"} 

      borderRadius={"100px"} 

      width="100px" height={"100x"}
      
       fit={"cover"}/>
    </div>
  );
};
