import { useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Acer2 from "../../assets/acservice_xupu4o (1).svg";
import Acer from "../../assets/acrepair_tqmii5 (1).svg";
import Ac from "../../assets/AC-Duct-Repair_qhd6tf.jpg";
import Duct from "../../assets/ductclean_rtdtwi (1).svg";

function Subservicesbackimg2() {
  const navigate = useNavigate();

  const cards = [
    { img: Acer2, title: "AC Services", route: "/subservices/2/subdetailservice/2", bgIndex: 0 },
    // { img: Acer, title: "AC Repair", route: "/subservices/2/subdetailservice/2", bgIndex: 1 },
    // { img: Ac, title: "Duct Cleaning", route: "/subservices/2/subdetailservice/2", bgIndex: 2 },
    // { img: Duct, title: "AC Duct Fabrication", route: "/subservices/2/subdetailservice/2", bgIndex: 3 },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <Card
          key={index}
          onClick={() =>
            navigate(card.route, { state: { bgIndex: card.bgIndex } })
          }
          sx={{ cursor: "pointer" }}
        >
          <CardMedia component="img" image={card.img} />
          <CardContent>
            <Typography>{card.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
export default Subservicesbackimg2;
