//Antd
import { Row, Col, Button } from "antd";
//Style
import style from "./index.module.sass";

export default function AppButton({label}) {
  return (
    <div className="pt-3">
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Button type="primary" block className={style.btn_style}>
            {label}
          </Button>
        </Col>
      </Row>
    </div>
  );
}
