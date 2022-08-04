//Antd
import { Row, Col } from "antd";
//Components
import AppHeader from "../../../common-components/AppHeader";
import AppInput from "../../../common-components/AppInput";
import AppButton from "../../../common-components/AppButton";
//Styles
import styles from "./index.module.sass";

export default function ContentOne() {
  return (
    <Row>
      <div className="flex-row">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <AppHeader
            title={`Welcome! First things first...`}
            des={`You can always change them later.`}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <AppInput
            placeholderOne={`Steve Jobs`}
            placeholderTwo={`Steve`}
            labelOne={`Full Name`}
            labelTwo={`Display Name`}
          />
          <AppButton label={`Create Workspace`} />
        </Col>
      </div>
    </Row>
  );
}
