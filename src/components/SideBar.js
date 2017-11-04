import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import info from 'info';

const SubMenu = Menu.SubMenu;

class Bio extends PureComponent {
    static propTypes = {
        collapsed: PropTypes.bool.isRequired, // use to trigger re-render
    };

    renderMenu = menus => {
        return menus.map(this.renderMenuItem);
    };

    renderMenuItem = m => {
        let title = (
            <span>
                {!!m.icon && <Icon type={m.icon} />}
                <span>{m.title}</span>
            </span>
        );

        if (m.link) title = <a href={m.link}>{title}</a>;

        return m.submenu
            ? <SubMenu key={m.key} title={title}>
                  {this.renderMenu(m.submenu)}
              </SubMenu>
            : <Menu.Item key={m.key}>
                  {title}
              </Menu.Item>;
    };

    getMenuKeys = (menus, property) => {
        let retval = [];
        for (let m of menus) {
            if (m[property]) retval.push(m.key);
            if (m.submenu) retval.concat(this.getMenuKeys(m.submenu, property));
        }
        return retval;
    };

    render = () => {
        return (
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={this.getMenuKeys(info.menu, 'selected')}
                defaultOpenKeys={this.getMenuKeys(info.menu, 'opened')}
            >
                {this.renderMenu(info.menu)}
            </Menu>
        );
    };
}

export default Bio;
