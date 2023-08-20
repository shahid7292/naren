import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
export const CONTACT_LIST = [
  {
    content: "198 West 21th Street, Suite 721 New York NY 10016",
    icon: MdLocationOn,
    path: "https://maps.google.com?q=198 West 21th Street, Suite 721 New York NY 10016",
    Title: "Address",
  },
  {
    content: "+ 1235 2355 98",
    icon: BsFillTelephoneFill,
    path: "tel:1-123-456-7890",
    Title: "Phone",
  },
  {
    content: "info@yoursite.com",
    icon: SiMinutemailer,
    path: "mailto:info@yoursite.com",
    Title: "Email",
  },
];
