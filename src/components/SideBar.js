import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import info from 'info';

const SubMenu = Menu.SubMenu;

class Bio extends PureComponent {
    propTypes = {
        collapsed: PropTypes.bool.isRequired, // use to trigger re-render
    };

    renderMenu = menus => {
        return menus.map(this.renderMenuItem);
    };

    renderMenuItem = m => {
        const title = (
            <a href={m.link}>
                {!!m.icon && <Icon type={m.icon} />}
                <span>{m.title}</span>
            </a>
        );

        return m.submenu
            ? <SubMenu key={m.key} title={title}>
                  {this.renderMenu(m.submenu)}
              </SubMenu>
            : <Menu.Item key={m.key}>
                  {title}
              </Menu.Item>;
    };

    render = () => {
        return (
            <Menu theme="dark" defaultSelectedKeys={['bio']} mode="inline">
                {this.renderMenu(info.menu)}
            </Menu>
        );
    };
}

export default Bio;
