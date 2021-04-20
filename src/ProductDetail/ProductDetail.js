/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { useParams } from "react-router-dom";

import { commerce } from "../lib/commerce";
import Loading from "../Loading/Loading";

function ProductDetail({ handleAddToCart }) {
  const { id } = useParams();
  const [detail, setdetail] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setloading(true);
      const data = await commerce.products.retrieve(id);
      setdetail(data);
      setloading(false);
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Grid container spacing={2}>
          <Grid item sm={12} lg={6}>
            <Button variant="outlined">Back To Home</Button>
            <img
              src={detail.media.source}
              alt={detail.name}
              heigt="60%"
              width="100%"
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <Typography variant="h3" gutterBottom>
              {detail.name}
            </Typography>

            <Typography
              style={{ wordWrap: "break-word" }}
              variant="h5"
              dangerouslySetInnerHTML={{ __html: detail.description }}
              noWrap={false}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4">
                Price: {detail.price.formatted_with_symbol}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAddToCart(detail.id, 1)}
              >
                Add To Cart
              </Button>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default ProductDetail;
