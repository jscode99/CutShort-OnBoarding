import { useEffect, useContext, useState } from "react";
//Antd
import { Row, Col } from "antd";
import { Steps } from "antd";
//Components
import ContentOne from "./content-one";
import ContentTwo from "./content-two";
import ContentThree from "./content-three";
import ContentFour from "./content-four";
//Services
import AppContext from "../../services/AppContext";
//Styles
import styles from "./index.module.sass";

const { Step } = Steps;

export default function LandingPage() {
  const context = useContext(AppContext);
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      title: "First",
      content: <ContentOne />,
    },
    {
      title: "Second",
      content: <ContentTwo />,
    },
    {
      title: "third",
      content: <ContentThree />,
    },
    {
      title: "Last",
      content: <ContentFour />,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      context.setAppContext({ loader: false });
    }, 1000);
  });

  const onChange = (value) => {
    console.log("onChange:", current);
    setCurrent(value);
  };

  return (
    <Row gutter={[0, 24]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} className="my-3">
        <Steps current={current} onChange={onChange}>
          {steps.map((item) => (
            <Step key={item.title} />
          ))}
        </Steps>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={24}
        className={styles.form_container}
      >
        <div
          className={`${styles.content_container} d-flex justify-content-center steps-content`}
        >
          {steps[current].content}
        </div>
      </Col>
    </Row>
  );
}
