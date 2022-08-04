//Antd
import {Row,Col} from 'antd';
//Components
import AppHeader from '../../../common-components/AppHeader';

export default function ContentFour() {
    return (
      <Row>
         <div className="flex-row">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <AppHeader
            title={`Congratulations, User!`}
            des={`You have completed onboarding, you can start using CutShort!`}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <input />
        </Col>
      </div>
      </Row>
    );
  }