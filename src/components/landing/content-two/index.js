//Antd
import { Row, Col } from "antd";
//Components
import AppHeader from "../../../common-components/AppHeader";
import AppInput from "../../../common-components/AppInput";

export default function ContentTwo() {
  return (
    <Row>
      <div className="flex-row">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <AppHeader
            title={`Let's set up a home for all your work`}
            des={`You can always choose another workspace later.`}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <AppInput
            placeholderOne={`CutShort`}
            placeholderTwo={`Example`}
            labelOne={`Workspace Name`}
            labelTwo={`Workspace URL`}
          />
        </Col>
      </div>
    </Row>
  );
}
