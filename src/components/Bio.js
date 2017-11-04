import React, { PureComponent } from 'react';
import { Row } from 'antd';
import info from 'info';

class Bio extends PureComponent {
    render = () => {
        return (
            <div>
                <Row><h1>{info.name}</h1></Row>
                <Row>{info.bio}</Row>
            </div>
        );
    };
}

export default Bio;
