import React from 'react';
import Nav from '../Nav';
function HeaderPage(props) {

  return (
    <header >
            <Nav currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
    
    </header>
  );
}

export default HeaderPage;