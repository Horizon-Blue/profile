import React, { PureComponent } from 'react';
import { Icon, Row } from 'antd';
import info from 'info';
import link from 'link';

class Bio extends PureComponent {
    renderName = name => {
        return name.constructor === Array
            ? <h1>
                  {name[0]}{' | '}
                  <small>{name.slice(1, name.length).join(' | ')}</small>
              </h1>
            : <h1>{name}</h1>;
    };

    render = () => {
        return (
            <header>
                <Row>{this.renderName(info.name)}</Row>
                <Row className="header-contact" gutter={10}>
                    <div>
                        <a
                            href={`mailto:${info.email
                                .replace(/\s/g, '')
                                .replace('[at]', '@')}`}
                        >
                            <Icon type="mail" /> {info.email}
                        </a>
                    </div>
                    <div>
                        <a href={`${link.github}/${info.github}`}>
                            <Icon type="github" /> {info.github}
                        </a>
                    </div>
                </Row>
                <Row className="header-bio">{info.bio}</Row>
            </header>
        );
    };
}

export default Bio;
