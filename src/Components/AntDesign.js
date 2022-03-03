import { useState } from 'react';
import { Button, Row, Col, InputNumber, Input, Select, Switch, Tooltip, Spin, Modal } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
// Button, Input/InputNumber, Select, Switch, Icon, Tooltip, Spin and possibly Modal. Th

const { Option } = Select;
function AntDesign() {
    function onChange(value) {
        console.log('changed', value);
    }
    function inputOnChange(event) {
        console.log('changed', event.target.value);
    }
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    function switchOnChange(checked) {
        console.log(`switch to ${checked}`);
    }


    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (
        <div>
            Cem
            <Row>
                <Col span={24}>Button: 
                    <Button type="primary">primary Button</Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>InputNumber: 
                    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                </Col>
            </Row>
            <Row>
                <Col span={24}>Input: 
                    <Input placeholder="Basic usage" onChange={inputOnChange} />
                </Col>
            </Row>
            <Row>
                <Col span={24}>Select: 
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Cem">Cem</Option>
                    </Select>
                </Col>
            </Row>
            <Row>
                <Col span={24}>Switch: 
                    <Switch defaultChecked onChange={switchOnChange} />
                </Col>
            </Row>
            <Row>
                <Col span={24}>icon: 
                    <CheckOutlined />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Tooltip title="prompt text">
                        <span>Tooltip will show on mouse enter.</span>
                    </Tooltip>
                </Col>
            </Row>
            <Row>
                <Col span={24}>Spin: 
                    <Spin />
                </Col>
            </Row>
            <Row>
                <Col span={24}>Modal: 
                    <Button type="primary" onClick={showModal}>
                        Open Modal
                    </Button>
                    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </Col>
            </Row>

        </div>
    );
}

export default AntDesign;
