//Antd
import { Row, Col } from "antd";
//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

//Components
import AppHeader from "../../../common-components/AppHeader";
import AppButton from "../../../common-components/AppButton";
//Styles
import styles from "./index.module.sass";

export default function ContentFour() {
  return (
    <Row>
      <div className="flex-row mt-3">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className={`d-flex justify-content-center align-items-center ${styles.success_container}`}>
            <div
              className={`d-flex justify-content-center align-items-center rounded-circle ${styles.success}`}
            >
              <FontAwesomeIcon icon={faCheck} size="2x" beat inverse />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <AppHeader
            title={`Congratulations, User!`}
            des={`You have completed onboarding, you can start using CutShort!`}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <AppButton label={`Launch CutShort`} />
        </Col>
      </div>
    </Row>
  );
}
