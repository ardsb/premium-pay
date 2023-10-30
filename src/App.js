import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, img, Col, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Img from "./Assets/Asset 3.png";
import heroImg from "./Assets/Group 1609.png";
import featureImg1 from "./Assets/Group 1599.png";
import featureImg2 from "./Assets/Group 1617.png";
import featureImg3 from "./Assets/Group 1618.png";
import featureImg4 from "./Assets/Group 1619.png";
import img1 from "./Assets/image_1-removebg-preview.png";
import pay from "./Assets/pay.png";
import nftremovebgpreview from "./Assets/nft-removebg-preview.png";
import Frame3 from "./Assets/Frame 3.png";
import Frame1 from "./Assets/Frame 1.png";
import Frame2 from "./Assets/Group 1623.png";
import Frame4 from "./Assets/Group 1624.png";

const items = [
  {
    label: "Home",
    key: "mail",
    img: "Img",
  },
  {
    label: "About",
    key: "app",

    disabled: true,
  },
  {
    label: "How it works",
    key: "app",

    disabled: true,
  },
  {
    label: "Features",
    key: "app",

    disabled: true,
  },
];
function App() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((state) => {
      const newLoadings = [...state];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((state) => {
        const newLoadings = [...state];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <>
      <div className="body">
        <Row className="topBar">
          <Col span={12}>
            {" "}
            <img className="logo" src={Img} />
          </Col>
          <Col span={12} className="navBarLayout">
            <Menu
              className="navBar"
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          </Col>
        </Row>
        <Row className="heroSection">
          <Col span={12} className="heroSectionRight">
            <h1 className="heroSectionHeading">
              Move your Money around the globe freely
            </h1>
            <h4>
              Send and receive money across the world the fast and easiest way
              without barriers. Enjoy free transfers and the lowest cross-border
              rates.
            </h4>
            <p>Install now</p>
            <Space direction="vertical">
              <Dropdown.Button
                icon={<DownOutlined />}
                loading={loadings[1]}
                menu={{
                  items,
                }}
                onClick={() => enterLoading(1)}
              >
                Play Store
              </Dropdown.Button>
            </Space>
          </Col>
          <Col span={12}>
            {" "}
            <img className="logoHeroImg" src={heroImg} />
          </Col>
        </Row>
        <Row className="featureSection">
          <Col className="featureColumn1">
            <div className="featureLayout1">
              <div className="featureLayoutIn">
                <img className="featureImg1" src={featureImg1} />
              </div>
            </div>
            <div className="featureLayout2">
              <div className="featureLayoutIn">
                <img className="featureImg1" src={featureImg2} />
              </div>
            </div>
            <div className="featureLayout2">
              <div className="featureLayoutIn">
                <img className="featureImg1" src={featureImg3} />
              </div>
            </div>
            <div className="featureLayout2">
              <div className="featureLayoutIn">
                <img className="featureImg1" src={featureImg4} />
              </div>
            </div>{" "}
          </Col>
        </Row>
      </div>
      <Row className="Section2">
        <Col span={12} className="heroSectionRight2">
          <h1 className="Section2Heading">
            Experience the joy of making transactions in any currency
          </h1>
          <p className="Section2Body">
            Make easy, secure and seamless purchases/transfers by means of
            virtual cards, cryptocurrency to any part of the world with little
            or no charge.
          </p>
          <p className="Section2Body">
            Premium pay allows you to send, withdraw and swap funds in any
            currency or cryptocurrency of your choice. You also have access to
            trading bot for financial trading leads and advices.
          </p>

          <Space direction="vertical">
            <Dropdown.Button
              icon={<DownOutlined />}
              loading={loadings[1]}
              menu={{
                items,
              }}
              onClick={() => enterLoading(1)}
            >
              Discover more
            </Dropdown.Button>
          </Space>
        </Col>
        <Col span={12}>
          {" "}
          <img className="section2Img" src={img1} />
        </Col>
      </Row>
      <Row className="Section2">
        <Col span={12} className="heroSectionRight">
          <h1 className="Section2Heading">
          Fund and Withdraw from your crypto wallet
          </h1>
          <p className="Section2Body">
          Make easy, secure and seamless purchases/transfers by means of virtual cards, cryptocurrency to any part of the world with little or no charge.
          </p>
          <p className="Section2Body">
          Premium pay allows you to send, withdraw and swap funds in any currency or cryptocurrency of your choice.
You also have access to trading bot for financial trading leads and advices.
          </p>

          <Space direction="vertical">
            <Dropdown.Button
              icon={<DownOutlined />}
              loading={loadings[1]}
              menu={{
                items,
              }}
              onClick={() => enterLoading(1)}
            >
              Discover more
            </Dropdown.Button>
          </Space>
        </Col>
        <Col span={12}>
          {" "}
          <img className="section2Img" src={pay} />
        </Col>
      </Row>

      <Row className="Section2">
        <Col span={12} className="heroSectionRight">
          <h1 className="Section2Heading">
          Bid and purchase NFT’s
of your choice
          </h1>
          <p className="Section2Body">
          Make easy, secure and seamless purchases/transfers by means of virtual cards, cryptocurrency to any part of the world with little or no charge.
          </p>
          <p className="Section2Body">
          Premium pay allows you to send, withdraw and swap funds in any currency or cryptocurrency of your choice.
You also have access to trading bot for financial trading leads and advices.
          </p>

          <Space direction="vertical">
            <Dropdown.Button
              icon={<DownOutlined />}
              loading={loadings[1]}
              menu={{
                items,
              }}
              onClick={() => enterLoading(1)}
            >
              Discover more
            </Dropdown.Button>
          </Space>
        </Col>
        <Col span={12}>
          {" "}
          <img className="section2Img" src={nftremovebgpreview} />
        </Col>
      </Row>
      <Row className="footerSection">
          <Col span={8} className="footerSectionRight">
          <img className="footerLogo" src={Frame3} />
          </Col>
          <Col span={8}>
            {" "}
            <img className="footerHeader" src={Frame2} />
            <img className="footertxt" src={Frame1} />
            
          </Col>
          <Col span={8}>
            {" "}
            <img className="followMoreTxt" src={Frame4} />
          
          </Col>
        </Row>
    </>
  );
}

export default App;
