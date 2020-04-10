import React from "react";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { ProductFilter } from "./components/ProductFilter";
import { ProductHuntProvider } from "./context/ProductState";
import { CommentsContextProvider } from "./context/CommentState";
import { Card, CardContent, Grid, CardHeader } from "@material-ui/core";
import { Header } from "./components/Header";

function App() {
  return (
    <CommentsContextProvider>
      <ProductHuntProvider>
        <Card>
          <CardContent>
            <Grid container direction="column" alignItems="center" spacing={0}>
              <CardHeader title="Product Hunt" />
              <Header />
              <ProductFilter />
              <ProductList />
            </Grid>
          </CardContent>
        </Card>
      </ProductHuntProvider>
    </CommentsContextProvider>
  );
}

export default App;
