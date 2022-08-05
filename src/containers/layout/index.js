//Antd
import { Row, Col } from "antd";
//Common-Components
import AppLoader from "../../common-components/appLoader";
//Styles
import styles from "./index.module.sass";
//Assets
import Logo from "../../assets/Logos/cutshort.png";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <AppLoader />
      <Row justify="center" align="middle" className="w-100 h-100">
        <Col xs={6} sm={8} md={14} lg={8} xl={8}>
          <div className="d-flex justify-content-center align-items-center w-100 h-100 mb-5">
            <img
              src={Logo}
              alt={`Org-Logo`}
              style={{ height: "25px", width: "25px" }}
            />
            <h4 className={`${styles.title} ms-2 m-0`}>CutShort</h4>
          </div>
          {children}
        </Col>
      </Row>
    </div>
  );
}
