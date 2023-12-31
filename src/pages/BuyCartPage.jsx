/* eslint-disable react/no-unescaped-entities */
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import CartItemCard from "../components/cartItemCard/CartItemCard";
import { NavLink } from "react-router-dom";
import PaperMessage from "../components/paperMessage/PaperMessage";
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";

const BuyCartPage = () => {
  const { cartItems, setCartItems, totalPrice } = useContext(ItemsContext);
  const confirmBuy = { title: "confirmBuy", path: "/confirmBuy" };
  const deleteeItem = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item.item !== itemToRemove);
    setCartItems(updatedCart);
  };
  return (
    <>
      <Container sx={{ py: 10, width: "50%" }}>
        <Grid container gap={2}>
          {cartItems.length === 0 ? (
            <>
              <PaperMessage message={"There aren't items to buy."} />
            </>
          ) : (
            cartItems.map((itemDet) => (
              <CartItemCard
                key={itemDet.item.id}
                itemDet={itemDet}
                deleteeItem={deleteeItem}
              />
            ))
          )}
          {cartItems.length === 0 ? (
            <></>
          ) : (
            <>
              <Paper sx={{ width: "100%", p: 10, textAlign: "center" }}>
                <Typography variant="h3" component="div">
                  Total:{totalPrice}$
                </Typography>
                <Button
                  sx={{ m: 2 }}
                  variant="contained"
                  component={NavLink}
                  to={confirmBuy.path}
                >
                  Confirm
                </Button>
              </Paper>
            </>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default BuyCartPage;
