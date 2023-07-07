import { Link } from "react-router-dom";
import { Result, Button } from "antd"; // ~ "shared/ui/{...}"
import styles from "./styles.module.scss";
import NavbarFooter from "shared/ui/navbar";

type Props = import("react-router-dom").RouteChildrenProps<{}>;

const More = () => {
  return (
    <div>
      More
      <NavbarFooter />
    </div>
  );
};

export default More;
