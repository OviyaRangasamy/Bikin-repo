import { Component } from "react";
 class TitleComponent extends Component{
    render(){
        return(<>
            <div style={{
            textAlign: "center"
            }}>
                <h1>
                    BUILD BETTER WEBSITES WITH BIKIN
                </h1>
                <p>WE ARE TEAM OF TALENTED DESIGNERS MAKING WEBSITES WITH BOOTSTRAP</p>
                <button>Get Started</button>
            </div>
            <div style={{
                textAlign:"center",
                padding:"10px"
                
            }}>
            <img style={{width:"500px",}} src="https://bootstrapmade.com/demo/templates/Bikin/assets/img/hero-img.png" alt="heroimg" />

            </div>
            </>
        )
    }
 }

 export default TitleComponent;