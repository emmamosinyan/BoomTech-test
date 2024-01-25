import styled from "styled-components";

//creation of styled-components

const PictureButtonWrapper = styled.button`
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
`;

const PictureButtonImage = styled.img`
  width: 0.75rem; // Set the width and height according to your design
  height: 0.75rem;
  border-radius: 50%; // Make it circular, adjust as needed

  &:hover {
    transform: scale(1.1); // Add a zoom effect on hover
  }
`;

// Functional component for rendering a 'clickable image' button based on the path passed by the src property

export const PictureButton = ({ src, alt }) => (
  <PictureButtonWrapper>
    <PictureButtonImage src={src} alt={alt} />
  </PictureButtonWrapper>
);
