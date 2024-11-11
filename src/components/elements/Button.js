import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 15px;
  background-color: ${({color = "#2C2C2C"}) => color} ;
  color: black;
  border: none;
  border-radius: ${({rounded = "5px"}) => rounded };
  cursor: pointer;
 transition: background-color 0.3s;

  &:hover {
    background-color: ${({hover_color = "#2C2C2C"}) => hover_color} ;
    color: ${({color = "#2C2C2C"}) => color} ;
  }
`;

const ButtonTemplate = ({ color, size, rounded, children, hover_color }) => {
    return (
            <Button color= {color} size = {size} rounded = {rounded}
              hover_color = {hover_color}>
                {children}
            </Button>
            
    );
  };

  export default ButtonTemplate;