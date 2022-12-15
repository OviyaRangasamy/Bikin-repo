import { Component } from "react";

class HeadComponent extends Component {
  render() {
    return (
      <>
        <div style={{display:"flex",
      justifyContent:"space-between",
      backgroundColor:"thistle",
      padding:"0 5px"
      }}>
          <div>
            <p style={{fontSize:"20px",
            fontWeight:900,
          }}>BIKIN</p>
          </div>
          <div style={{display:"flex",
          justifyContent:"flex-end"
        }}>
          <div >
            <ul style={
              {listStyleType:"none",
              display:"flex",
              flexDirection:"row",
              columnGap:"10px"
          }}>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Team</li>
              <li>Pricing</li>
              <li>Drop Down</li>
              <li>Contact</li>
            </ul>
          </div>
          <div><button style={{
            padding:0,
            margin:"15px"
          }}>Get Started </button></div>
        
        </div>
        </div>
      
      </>
    )
  }
}

export default HeadComponent;