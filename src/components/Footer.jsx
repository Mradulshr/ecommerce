import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  // border: 1px solid blue;
`;

const Logo = styled.h1`
  // padding: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: teal; #${(prop) => prop.color};
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  // border: 1px solid red;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  // border: 1px solid green;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Pyra Jewels</Logo>
        <Desc>
          Objects designed for the adornment of the body are called jewelry.
          While modern jewelry is made of gold, silver, or platinum, often with
          precious or semiprecious stones, it evolved from shells, animal teeth,
          and other items used as body decoration in prehistoric times.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Assessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contect</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Noida sector 3, 3 flore.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +9129989121
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          Contect@pyraSquare
        </ContactItem>
        <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OMsuZlxub1Fn9VpTXU364lV5UbC5aTWmQbxy7W53F96zW-t_tToTuGRAw4Pz0LE0dg&usqp=CAU" />
      </Right>
    </Container>
  );
};

export default Footer;
