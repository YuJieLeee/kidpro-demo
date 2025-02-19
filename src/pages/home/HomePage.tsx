import { Box, Button, Typography } from "@mui/material";
import Swiper from "../../components/Swiper";

const categories = [
  {
    categoryName: "線上育兒課程",
    categoryId: "home",
    imageUrl:
      "https://storage.googleapis.com/lightup-public/8be808ef-f929-4c1d-b24c-4eb7f394e07a/988460b3-1db4-4662-b586-acc615fffb51/f7c758d2-bfe2-4ba1-b448-1cfe587f3e7f.png",
  },
  {
    categoryName: "實體親子正式課",
    categoryId: "work",
    imageUrl:
      "https://storage.googleapis.com/lightup-public/8be808ef-f929-4c1d-b24c-4eb7f394e07a/988460b3-1db4-4662-b586-acc615fffb51/f7c758d2-bfe2-4ba1-b448-1cfe587f3e7f.png",
  },
  {
    categoryName: "實體親子體驗課",
    categoryId: "travel",
    imageUrl:
      "https://storage.googleapis.com/lightup-public/8be808ef-f929-4c1d-b24c-4eb7f394e07a/988460b3-1db4-4662-b586-acc615fffb51/f7c758d2-bfe2-4ba1-b448-1cfe587f3e7f.png",
  },
  {
    categoryName: "客製化課程",
    categoryId: "fitness",
    imageUrl:
      "https://storage.googleapis.com/lightup-public/8be808ef-f929-4c1d-b24c-4eb7f394e07a/988460b3-1db4-4662-b586-acc615fffb51/f7c758d2-bfe2-4ba1-b448-1cfe587f3e7f.png",
  },
  {
    categoryName: "專業培訓課程",
    categoryId: "food",
    imageUrl:
      "https://storage.googleapis.com/lightup-public/8be808ef-f929-4c1d-b24c-4eb7f394e07a/988460b3-1db4-4662-b586-acc615fffb51/f7c758d2-bfe2-4ba1-b448-1cfe587f3e7f.png",
  },
  {
    categoryName: "評估諮詢服務",
    categoryId: "music",
    imageUrl:
      "https://storage.googleapis.com/lightup-public/8be808ef-f929-4c1d-b24c-4eb7f394e07a/988460b3-1db4-4662-b586-acc615fffb51/f7c758d2-bfe2-4ba1-b448-1cfe587f3e7f.png",
  },
  {
    categoryName: "嚴選商品",
    categoryId: "books",
    imageUrl:
      "https://storage.googleapis.com/lightup-public/8be808ef-f929-4c1d-b24c-4eb7f394e07a/988460b3-1db4-4662-b586-acc615fffb51/f7c758d2-bfe2-4ba1-b448-1cfe587f3e7f.png",
  },
];

const products = [
  {
    productImg: "/product1.png",
    originalPrice: 2000,
    specialPrice: 1000,
  },
  {
    productImg: "/product2.png",
    originalPrice: 2000,
    specialPrice: 1000,
  },
  {
    productImg: "/product3.png",
    originalPrice: 2000,
    specialPrice: 1000,
  },
  {
    productImg: "/product4.png",
    originalPrice: 2000,
    specialPrice: 1000,
  },
];

export default function Homepage() {
  return (
    <Box>
      <img src="/banner.png" width="100%" />
      <Swiper categories={categories} />
      <Box display="flex" flexDirection="column" gap="20px" padding="10px">
        <Typography variant="h4">線上育兒課程</Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2,1fr)"
          rowGap="20px"
          columnGap="10px"
        >
          {products.map((product) => (
            <Box
              gridColumn="span 1"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <img src={product.productImg} alt="product" width="100%" />

              <Box display="flex" alignItems="end" gap="5px">
                {product.specialPrice && (
                  <Typography variant="h4">${product.specialPrice}</Typography>
                )}
                <Typography
                  sx={{
                    textDecoration: product.specialPrice
                      ? "line-through"
                      : "none",
                  }}
                >
                  ${product.originalPrice}
                </Typography>
              </Box>
              <Button>加入購物車</Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
