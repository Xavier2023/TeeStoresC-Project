import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { Product } from "../../app/models/product";
import { Link } from "react-router-dom";
import { useAddCartItemMutation } from "../cart/cartApi";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const [addCartItem, { isLoading }] = useAddCartItemMutation();
  return (
    <Card
      elevation={3}
      sx={{
        width: 280,
        borderRadius: 2,
        displa: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ height: 240, backgroundSize: "cover" }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle2"
          sx={{ textTransform: "uppercase" }}
        >
          {product.name}
        </Typography>
        <Typography variant="h6" sx={{ color: "secondary.main" }}>
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          disabled={isLoading}
          onClick={() => addCartItem({ product, quantity: 1 })}
        >
          Add to cart
        </Button>
        <Button component={Link} to={`/catalog/${product.id}`}>
          View details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
