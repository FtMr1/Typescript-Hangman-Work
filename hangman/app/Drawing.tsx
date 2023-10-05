const HEAD = (
   <div
     style={{
       width: "50px",
       height: "50px",
       borderRadius: "100%",
       border: "10px solid black",
       position: "absolute",
       top: "75px",
       right: "1080px",
     }}
   />
 )
 
 const BODY = (
   <div
     style={{
       width: "10px",
       height: "100px",
       background: "black",
       position: "absolute",
       top: "140px",
       right: "1110px",
     }}
   />
 )
 
 const RIGHT_ARM = (
   <div
     style={{
       width: "100px",
       height: "10px",
       background: "black",
       position: "absolute",
       top: "150px",
       right: "1009px",
       rotate: "-30deg",
       transformOrigin: "left bottom",
     }}
   />
 )
 
 const LEFT_ARM = (
   <div
     style={{
       width: "100px",
       height: "10px",
       background: "black",
       position: "absolute",
       top: "150px",
       right: "1120px",
       rotate: "30deg",
       transformOrigin: "right bottom",
     }}
   />
 )
 
 const RIGHT_LEG = (
   <div
     style={{
       width: "100px",
       height: "10px",
       background: "black",
       position: "absolute",
       top: "225px",
       right: "1020px",
       rotate: "60deg",
       transformOrigin: "left bottom",
     }}
   />
 )
 
 const LEFT_LEG = (
   <div
     style={{
       width: "100px",
       height: "10px",
       background: "black",
       position: "absolute",
       top: "225px",
       right: "1110px",
       rotate: "-60deg",
       transformOrigin: "right bottom",
     }}
   />
 )
 
 const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
 
 type DawingProps = {
   numberOfGuesses: number
 }
 
const Drawing = ({numberOfGuesses}:DawingProps) => {
  return (
   

    <div className=" relative ">
    {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: "28px",
          right: "1109px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} /> 
       </div>
   
  );
};

export default Drawing;