import React from 'react'

const Navbar = ({toggleSidebar}) => {
    return (
        <nav className="navbar-theme navbar navbar-expand">
            <span className="sidebar-toggle d-flex mr-2" onClick={()=>toggleSidebar()}>
                <i className="hamburger align-self-center"></i>
            </span>
            <form className="form-inline">
                <input placeholder="Search projects..." aria-label="Search"
                       type="text" className="form-control-lite form-control"/>
            </form>
            <div className="collapse navbar-collapse" aria-expanded="false">
                <ul className="ml-auto navbar-nav">
                    <li className="ml-lg-1 dropdown nav-item">
                        <a href="#" data-toggle="dropdown" id="dropdownMessage" aria-haspopup="true"
                           className="nav-icon position-relative nav-link" aria-expanded="true">
                            <i className="fa fa-envelope-open fa-w-16 align-middle"></i>
                        </a>
                        <div tabIndex="-1" role="menu" aria-hidden="false" aria-labelledby="dropdownMessage"
                             className="dropdown-menu-lg py-0 dropdown-menu dropdown-menu-right">
                            <div className="dropdown-menu-header position-relative">4 New Messages</div>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="align-items-center no-gutters row">
                                        <div className="col-2">
                                            <img className="avatar img-fluid rounded-circle"
                                                 src="/logo192.png"
                                                 alt="Michelle Bilodeau"/></div>
                                        <div className="pl-2 col-10">
                                            <div className="text-dark">Michelle Bilodeau</div>
                                            <div className="text-muted small mt-1">Nam pretium turpis et
                                                arcu. Duis arcu tortor.
                                            </div>
                                            <div className="text-muted small mt-1">5m ago</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="align-items-center no-gutters row">
                                        <div className="col-2"><img
                                            className="avatar img-fluid rounded-circle"
                                            src="/logo192.png" alt="Kathie Burton"/>
                                        </div>
                                        <div className="pl-2 col-10">
                                            <div className="text-dark">Kathie Burton</div>
                                            <div className="text-muted small mt-1">Pellentesque auctor neque
                                                nec urna.
                                            </div>
                                            <div className="text-muted small mt-1">30m ago</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="align-items-center no-gutters row">
                                        <div className="col-2">
                                            <img className="avatar img-fluid rounded-circle"
                                                 src="/logo192.png"
                                                 alt="Alexander Groves"/></div>
                                        <div className="pl-2 col-10">
                                            <div className="text-dark">Alexander Groves</div>
                                            <div className="text-muted small mt-1">Curabitur ligula sapien
                                                euismod vitae.
                                            </div>
                                            <div className="text-muted small mt-1">2h ago</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="align-items-center no-gutters row">
                                        <div className="col-2"><img
                                            className="avatar img-fluid rounded-circle"
                                            src="/logo192.png" alt="Daisy Seger"/>
                                        </div>
                                        <div className="pl-2 col-10">
                                            <div className="text-dark">Daisy Seger</div>
                                            <div className="text-muted small mt-1">Aenean tellus metus,
                                                bibendum sed, posuere ac, mattis non.
                                            </div>
                                            <div className="text-muted small mt-1">5h ago</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <h6 tabIndex="-1" className="dropdown-menu-footer dropdown-header">
                                <span className="text-muted">Show all messages</span>
                            </h6>
                        </div>
                    </li>
                    <li className="ml-lg-1 dropdown nav-item">
                        <a href="#" id="dropdownNotification"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                           className="nav-icon position-relative nav-link">
                            <i className="fa fa-bell fa-w-14 align-middle"></i>
                            <span className="indicator"></span>
                        </a>
                        <div tabIndex="-1" role="menu" aria-labelledby="dropdownNotification"
                             className="dropdown-menu-lg py-0 dropdown-menu dropdown-menu-right">
                            <div className="dropdown-menu-header position-relative">4 New Notifications</div>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="align-items-center no-gutters row">
                                        <div className="col-2">
                                            <i className="fa fa-bell fa-w-14 text-danger"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">Update completed</div>
                                            <div className="text-muted small mt-1">Restart server 12 to
                                                complete the update.
                                            </div>
                                            <div className="text-muted small mt-1">2h ago</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="align-items-center no-gutters row">
                                        <div className="col-2">
                                            <i className="fa fa-envelope-open fa-w-16 text-warning"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">Lorem ipsum</div>
                                            <div className="text-muted small mt-1">Aliquam ex eros,
                                                imperdiet vulputate hendrerit et.
                                            </div>
                                            <div className="text-muted small mt-1">6h ago</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="align-items-center no-gutters row">
                                        <div className="col-2">
                                            <i className="fa fa-building fa-w-14 text-primary"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">Login from 192.186.1.1</div>
                                            <div className="text-muted small mt-1"></div>
                                            <div className="text-muted small mt-1">8h ago</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="align-items-center no-gutters row">
                                        <div className="col-2">
                                            <i className="fa fa-bell-slash fa-w-20 text-success"></i>
                                        </div>
                                        <div className="col-10">
                                            <div className="text-dark">New connection</div>
                                            <div className="text-muted small mt-1">Anna accepted your
                                                request.
                                            </div>
                                            <div className="text-muted small mt-1">12h ago</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <h6 tabIndex="-1" className="dropdown-menu-footer dropdown-header">
                                <span className="text-muted">Show all notifications</span>
                            </h6>
                        </div>
                    </li>
                    <li className="ml-lg-1 dropdown nav-item">
                        <a href="#"
                           id="dropdownSetting"
                           className="nav-link"
                           data-toggle="dropdown"
                           aria-haspopup="true"
                           aria-expanded="false">
                            <i className="fa fa-cog fa-w-16 align-middle"></i>
                        </a>
                        <div tabIndex="-1" role="menu" aria-hidden="true"
                             aria-labelledby="dropdownSetting"
                             className="dropdown-menu dropdown-menu-right">
                            <button type="button" tabIndex="0" role="menuitem" className="dropdown-item">
                                <i className="fa fa-user fa-w-14 fa-fw mr-2 align-middle"></i>
                                View Profile
                            </button>
                            <button type="button" tabIndex="0" role="menuitem" className="dropdown-item">
                                <i className="fa fa-comments fa-w-18 fa-fw mr-2 align-middle"></i>
                                Contacts
                            </button>
                            <button type="button" tabIndex="0" role="menuitem" className="dropdown-item">
                                <i className="fa fa-pie-chart fa-w-17 fa-fw mr-2 align-middle"></i>
                                Analytics
                            </button>
                            <button type="button" tabIndex="0" role="menuitem" className="dropdown-item">
                                <i className="fa fa-cogs fa-w-20 fa-fw mr-2 align-middle"></i>
                                Settings
                            </button>
                            <div tabIndex="-1" className="dropdown-divider"></div>
                            <button type="button" tabIndex="0" role="menuitem" className="dropdown-item">
                                <i className="fa fa-arrow-circle-right fa-w-16 fa-fw mr-2 align-middle"></i>
                                Sign out
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;
