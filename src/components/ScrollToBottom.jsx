import { IconButton } from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Container } from "react-bootstrap";

const ScrollToBottom = ({scroll}) => { 

  const handleScroll = () => {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  
  return (
    <Container className="bottom__up--scroll">
      <IconButton onClick={handleScroll}>
        <ArrowUpwardIcon />
      </IconButton>
    </Container>
  );
}
 
export default ScrollToBottom;