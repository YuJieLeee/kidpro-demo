import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      bgcolor={(theme) => theme.palette.grey[200]}
      display="flex"
      flexDirection="column"
      gap="10px"
      width="100%"
      padding="10px"
      boxSizing={"border-box"}
      marginTop="20px"
    >
      <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="5px">
        <Link textAlign="center" color="secondary">
          使用者條款
        </Link>
        <Link textAlign="center" color="secondary">
          隱私權條款
        </Link>
        <Link textAlign="center" color="secondary">
          會員權利
        </Link>
        <Link textAlign="center" color="secondary">
          退費政策
        </Link>
        <Link textAlign="center" color="secondary">
          社會責任
        </Link>
        <Link textAlign="center" color="secondary">
          徵才資訊
        </Link>
        <Link textAlign="center" color="secondary">
          上課中心
        </Link>
      </Box>

      <Box>
        <Typography>Copyright © 2018-2025</Typography>
        <Typography>KidPro醫學級兒童發展教育團隊</Typography>
        <Typography>板橋中心：220075 台灣新北市板橋區板新路27號9樓</Typography>
        <Typography>
          華山中心：100024 台灣台北市中正區忠孝東路一段138號3樓(7-11樓上)
        </Typography>
        <Typography>
          辦公室：100009 台灣台北市中正區忠孝東路一段83號15樓之2
        </Typography>
        <Typography>電話：+886-2-7756-6368(週一至週五10:00-18:00)</Typography>
        <Typography>
          商務營運及專業內容：智寶教育股份有限公司-90849836｜技術開發：光立資訊有限公司-90699908
        </Typography>
      </Box>
    </Box>
  );
}
