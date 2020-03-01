import React from 'react'
import menus from './../../config/menuConfig'

const Sidebar = (props) => {
    return (
        <nav className="sidebar">
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
                <li className="sidebar-header">Main</li>
                <li className="sidebar-item">
                    <a href="/dashboard" className="sidebar-link">
                        <i className="fa fa-home"></i>
                        <span className="align-middle">Dashboard</span>
                    </a>
                </li>
                <li className="sidebat-item">
                    <span data-toggle="collapse" data-target="#collapseExample" className="sidebar-link" aria-expanded="true">
                        <i className="fa fa-home"></i>
                        <span className="align-middle">Pages</span>
                    </span>
                    <div className="collapse" id="collapseExample" aria-expanded="true">
                        <ul id="item" className="sidebar-dropdown list-unstyled">
                            <li className="sidebar-item ">
                                <a className="sidebar-link" href="/pages/settings">Settings </a>
                            </li>
                            <li className="sidebar-item ">
                                <a className="sidebar-link" href="/pages/clients">Clients
                                    <span size="18" className="sidebar-badge badge badge-primary badge-pill">New</span>
                                </a>
                            </li>
                            <li className="sidebar-item ">
                                <a className="sidebar-link" href="/pages/invoice">Invoice </a>
                            </li>
                            <li className="sidebar-item ">
                                <a className="sidebar-link" href="/pages/pricing">Pricing </a>
                            </li>
                            <li className="sidebar-item ">
                                <a className="sidebar-link" href="/pages/tasks">Tasks </a>
                            </li>
                            <li className="sidebar-item ">
                                <a className="sidebar-link" href="/pages/blank">Blank Page </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="sidebar-header">Elements</li>
                <li className="sidebat-item">
                    <a href="/dashboard" className="sidebar-link">
                        <i className="fa fa-home"></i>
                        <span className="align-middle">Dashboard</span>
                    </a>
                </li>
                <li className="sidebat-item">
                    <span data-toggle="collapse" data-target="#collapse2" className="sidebar-link" aria-expanded="true">
                        <i className="fa fa-home"></i>
                        <span className="align-middle">Pages</span>
                    </span>
                    <div className="collapse" id="collapse2" aria-expanded="true">
                        <ul id="item" className="sidebar-dropdown list-unstyled">
                            <li className="sidebar-item ">
                                <a className="sidebar-link" href="/pages/settings">Settings </a>
                            </li>
                            <li className="sidebar-item ">
                                <a className="sidebar-link" href="/pages/clients">Clients
                                    <span size="18" className="sidebar-badge badge badge-primary badge-pill">New</span>
                                </a>
                            </li>
                            <li className="sidebar-item ">
                                <a className="sidebar-link" href="/pages/invoice">Invoice </a>
                            </li>
                            <li className="sidebar-item ">
                                <a className="sidebar-link" href="/pages/pricing">Pricing </a>
                            </li>
                            <li className="sidebar-item ">
                                <a className="sidebar-link" href="/pages/tasks">Tasks </a>
                            </li>
                            <li className="sidebar-item ">
                                <a className="sidebar-link" href="/pages/blank">Blank Page </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
