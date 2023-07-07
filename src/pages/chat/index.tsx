import { Link } from "react-router-dom";
import { Result, Button } from "antd"; // ~ "shared/ui/{...}"
import styles from "./styles.module.scss";
import NavbarFooter from "shared/ui/navbar";

type Props = import("react-router-dom").RouteChildrenProps<{}>;

const Chat = () => {
  return (
    <div>
      Chat
      <NavbarFooter />
    </div>
  );
};

export default Chat;
