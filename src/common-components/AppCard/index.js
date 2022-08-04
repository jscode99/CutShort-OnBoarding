//Antd
import { Col, Row } from "antd";
//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
//Styles
import styles from "./index.module.sass";

export default function AppCards() {
  return (
    <div className="mt-4">
      <Row gutter={[12, 0]}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={`card shadow-sm hoverable rounded ${styles.card_container}`}>
            <div className="d-flex w-100 h-100 align-items-center ps-3 pt-3">
              <FontAwesomeIcon icon={faUser} size="2x" />
            </div>
            <div className="d-flex w-100 h-100 align-items-center ps-3">
              <p className={`${styles.card_title}`}>For myself</p>
            </div>
            <div className="d-flex w-100 h-100 align-items-center ps-3">
              <p className={`${styles.card_subtitle}`}>
                Write better.Think more clearly.Stay organized.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={`card shadow-sm rounded ${styles.card_container}`}>
            <div className="d-flex w-100 h-100 align-items-center ps-3 pt-3">
              <FontAwesomeIcon icon={faUsers} size="2x" />
            </div>
            <div className="d-flex w-100 h-100 align-items-center ps-3">
              <p className={`${styles.card_title}`}>With my team</p>
            </div>
            <div className="d-flex w-100 h-100 align-items-center ps-3">
              <p className={`${styles.card_subtitle}`}>
                Wikis,docs,tasks &amp; projects,all in one place.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
