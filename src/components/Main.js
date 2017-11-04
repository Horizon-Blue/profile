import React, { PureComponent } from 'react';
import { Spin, Row, Col } from 'antd';
import Bio from '@Bio';

class Main extends PureComponent {
    render = () => {
        return (
            <div className="main-content">
                <Col xs={24} sm={18}>
                    <Row>
                        <Bio />
                    </Row>
                    <hr />
                    <Row>
                        <Col span={4} push={10} style={{ marginTop: 10 }}>
                            <Spin size="large" tip="Under Construction..." />
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    };
}

export default Main;
