import Heading from "../Heading/Heading";

const GenericsButton = () =>{
    return (
        <h1 style={{
            textAlign: "center",
            color: "white", // Green color for the text
            fontFamily: "Times New Roman", // Font style
            backgroundColor: "grey", // Light background color
            paddingBottom: "100px",
            borderRadius: "8px",
            marginTop: "2px",
            fontWeight: "bold",
            fontSize: "70px"
          }}>The Generics <Heading style={{ color: "blue" }} /></h1>
    );
};

export default GenericsButton;