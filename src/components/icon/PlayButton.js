

        const PlayButton = () => {
            return (
              <button
                style={{
                  background: "none",
                  border: "2px solid skyblue", // Light blue border
                  borderRadius: "50%",        // Circle shape
                  padding: "10px",            // Adjust padding for proper sizing
                  cursor: "pointer",
                  display: "inline-flex",     // Center the SVG inside the button
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="skyblue" // Light blue color for the play icon
                  viewBox="0 0 16 16"
                >
                  <path d="M11.596 8.697l-6.363 3.692A.5.5 0 0 1 4 11.983V4.018a.5.5 0 0 1 .765-.424l6.363 3.692a.5.5 0 0 1 0 .847z" />
                </svg>
              </button>
      );
  };
  
  export default PlayButton;