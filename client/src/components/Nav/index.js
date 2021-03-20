import React, {useEffect} from 'react';

function Nav(props) {
  const tabs = ['Home', 'Dashboard', 'Login', 'Signup', 'Contact', 'About'];

  useEffect(() => {
    document.title = props.currentPage;
  }, [props.currentPage]);
  return (
    <div className="headerImage">
    <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-dark px-1 navbar-fixed-top container-fluid" style={{zIndex:1}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content" id="navbarTogglerDemo01">
                <a className="navbar-brand w-25" href="/"  style={{ color: '#f0e6ef' }}>iT Solutions</a>
                <ul className="navbar-nav  border-0 text-small-dark w-50">
                    {tabs.map(tab => (
                      <li className="nav-item px-1" key={tab}>
                        <a
                          href={'/' + tab.split(' ')[0].toLowerCase()}
                          onClick={() => props.handlePageChange(tab)}
                          style={{ color: '#f0e6ef' }}
                          className={
                            props.currentPage === tab ? 'nav-link active font-weight-bold' : 'nav-link' 
                          }
                        >
                          {tab}
                        </a>
                      </li>
                    ))}
                </ul>
            </div>
    </nav>
    </div>
     
  );
}

export default Nav;
