//Antd
import { Row, Col, Input } from "antd";
//Styles
import styles from "./index.module.sass";

export default function AppInput({
  placeholderOne,
  placeholderTwo,
  labelOne,
  labelTwo,
}) {
  return (
    <div className="mt-4">
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <p className={`${styles.label}`}>{labelOne}</p>
          <Input placeholder={placeholderOne} allowClear />
        </Col>
        <br />
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className={`mt-3`}>
          <p className={`${styles.label}`}>{labelTwo}</p>
          <Input placeholder={placeholderTwo} allowClear />
        </Col>
      </Row>
    </div>
  );
}
