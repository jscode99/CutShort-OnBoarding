//Antd
import { Row, Col } from "antd";
//Components
import AppHeader from "../../../common-components/AppHeader";
import AppButton from "../../../common-components/AppButton";
import AppCards from "../../../common-components/AppCard";

export default function ContentThree() {
  return (
    <Row>
      <div className="flex-row">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <AppHeader
            title={`How are you planning to use CutShort?`}
            des={`We'll streamline your setup experience accordingly.`}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <AppCards />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <AppButton label={`Create Workspace`} />
        </Col>
      </div>
    </Row>
  );
}
