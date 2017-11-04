import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import Main from '@Main';
import SideBar from '@SideBar';

const { Sider, Content } = Layout;

class App extends PureComponent {
    state = { collapsed: false };

    handleCollapse = collapsed => this.setState({ collapsed });

    render = () => {
        return (
            <Layout className="app-full">
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.handleCollapse}
                    breakpoint="sm"
                >
                    <SideBar collapsed={this.state.collapsed} />
                </Sider>
                <Content><Main /></Content>
            </Layout>
        );
    };
}

export default App;
