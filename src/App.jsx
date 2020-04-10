import React from "react";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { ProductFilter } from "./components/ProductFilter";
import { ProductHuntProvider } from "./context/ProductState";
import { Card, CardContent, Grid, CardHeader } from "@material-ui/core";

function App() {
  return (
    <ProductHuntProvider>
      <Card>
        <CardContent>
          <CardHeader title="Product Hunt" />
          <Grid container direction="column" alignItems="center" spacing={0}>
            <ProductFilter />
            <ProductList />
          </Grid>
        </CardContent>
      </Card>
    </ProductHuntProvider>
  );
}

export default App;
