const OfferingTile = ({title, price, stars}) => 
<div style={{
  display: "flex",
  height: "12em",
  width: "12em",
  backgroundImage: "url('/location-11.jpeg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",  
  borderRadius: "12px",
  alignItems: "flex-end",
}}>
  <div style={{
    display: "flex",
    height: "39%",
    backgroundColor: "#ffffff91",
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-evenly",
    padding: "0px 6px 3px 6px",
  }}>
    <div style={{
      fontSize: "23px",
    }}>{title}</div>
    <div style={{
      fontWeight: "bold"
    }}>{price}</div>
    <div style={{
      display: "flex"
    }}>
      { [...Array(stars).keys()].map(it => <img src="/star.png" width="15px" alt="star"/>) }
    </div>
  </div>
</div>

export default OfferingTile;
