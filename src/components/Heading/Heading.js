import { Nav } from "react-bootstrap";
import PlayButton from "../icon/PlayButton";

const Heading = () => {
  return (
    <div style={{ textAlign: "center" }}> 
      
      <Nav.Link 
        href="#"
        style={{
            display: "inline-block",
            marginBottom: "20px",  
            fontSize: "23px",  
            color: "white",         
            fontWeight: "200",
            border: "2px solid skyblue", // Define width, style, and color
            padding: "10px 20px",        // Add padding for better visibility
            textDecoration: "none",      // Remove default underline
            borderRadius: "8px",         // Optional: rounded corners
            background: "inherit" 
        }}
      >
        get our latest album
      </Nav.Link>
      
      {/* Play button in the next row, centered */}
      <div style={{ marginTop: "20px", textAlign:"center" }}>
        <PlayButton />
      </div>
    </div>
  );
};

export default Heading;
