import styled from 'styled-components';

export const StyledUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 20px;
  border: 1px black solid;
  margin: 10px;

  h1 {
    padding: 0 10px 10px;
    font-size: 1em;
    font-weight: normal;
  }
`;

export const StyledDragAndDrop = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 10px;
  border-style: dashed;
  border-color: #9b9b9b;
  background-color: #f0f0f0;
  color: #9b9b9b;
  font-weight: bold;
  font-size: 1.4rem;
  outline: none;
  transition: border 0.24s ease-in-out;

  img {
    padding-top: 50px;
  }
`;

export const StyledAcceptedFilesP = styled.p`
  color: #9b9b9b;
  font-size: 0.6em;
  margin-top: 50px;
  span {
    color: #008074;
  }
`;