import React from 'react'
import Nav from '../components/Nav/nav'
import {
  DetailWrap,
  DetailMain,
  DetailTitle,
  DetailSubhead,
  DetailEm,
  DetailText,
  DetailReward,
  DetailCode,
    DetailRadio
} from "./_style/_detail";
import { Modal, Button, Radio } from "antd";
import Footer from "../components/Footer/Footer";

class Detail extends React.Component {
    state = {
        visible: false,
        value: 0,
        codeImg: [
            "../static/images/alibaba-code.jpg",
            "../static/images/wx-code.jpg"
        ],
    };

    showModal = () => {
        this.setState({
          visible: true
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

  render() {
    return (
      <div>
        <Nav />
        <DetailWrap className="main">
          <DetailMain>
            <DetailTitle>申请免费HTTPS</DetailTitle>
            <DetailSubhead>
              作者<code>uustoboy</code>发表于 <emDetailEm>1年前</emDetailEm>
              ，最后修改于<emDetailEm>1年前</emDetailEm>
            </DetailSubhead>
            <DetailText />
            <DetailReward>
              <Modal
                title="打赏"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                okText="确认"
                cancelText="取消"
              >
                <DetailCode>
                  <img src={this.state.codeImg[this.state.value]} />
                </DetailCode>
                <DetailRadio>
                    <Radio.Group
                        onChange={this.onChange}
                        value={this.state.value}
                    >
                        <Radio value={0}>支付宝</Radio>
                        <Radio value={1}>微信</Radio>
                    </Radio.Group>
                </DetailRadio>

              </Modal>
              <Button onClick={this.showModal} type="primary">
                打赏
              </Button>
            </DetailReward>
          </DetailMain>
          <Footer />
        </DetailWrap>
      </div>
    );
  }
}

export default Detail;
