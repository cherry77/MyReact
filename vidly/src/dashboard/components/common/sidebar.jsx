import React, {Component} from 'react'
import menuList from './../../config/menuConfig'

class Sidebar extends Component {
    renderMenuList = (menuList) => {
        return menuList.map(item => {
            return (
                <React.Fragment key={item.header}>
                    <li className="sidebar-header">{item.header}</li>
                    {this.renderMenu(item.content)}
                </React.Fragment>
            )
        });
    };
    renderMenu = (menus) => {
        return menus.map(menu => {
            if(!menu.children){
                return (
                    <li className="sidebar-item" key={menu.path}>
                        <a href={menu.path} className="sidebar-link">
                            <i className="fa fa-home"></i>
                            <span className="align-middle">{menu.title}</span>
                        </a>
                    </li>
                );
            }else{
                return (
                    <li className="sidebar-item" key={menu.title}>
                         <span data-toggle="collapse" data-target={'#collapse' + menu.title}
                               className="sidebar-link" aria-expanded="true">
                            <i className="fa fa-home"></i>
                            <span className="align-middle">{menu.title}</span>
                         </span>
                        <div className="collapse" id={'collapse' + menu.title} aria-expanded="true">
                            <ul className="sidebar-dropdown list-unstyled">
                                {menu.children.map(item => (
                                    <li className="sidebar-item" key={item.title}>
                                        <a className="sidebar-link" href={item.path}>
                                            {item.title}
                                            {item.isNew &&
                                            <span size="18"
                                                  className="sidebar-badge badge badge-primary badge-pill">New</span>}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                );
            }
        })
    };
    render(){
        const {toggled} = this.props;
        return (
            <nav className={toggled?"sidebar": "sidebar toggled"}>
                <div className="sidebar-content">
                    <a href="/" className="sidebar-brand">
                        <i className="fa fa-home"></i>
                        <span className="align-middle">Spark</span>
                    </a>
                </div>
                <div className="sidebar-user">
                    <img src="/logo192.png"
                         className="img-fluid rounded-circle mb-2" alt="Linda Miller" />
                    <div className="font-weight-bold">Linda Miller</div>
                    <small>Front-end Developer</small>
                </div>
                <ul className="sidebar-nav">
                    {this.renderMenuList(menuList)}
                </ul>
            </nav>
        );
    }
}

export default Sidebar;
