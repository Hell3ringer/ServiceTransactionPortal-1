import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Test extends React.Component {
    render() {
        return (
            <div style={{ width: '30%' }}>
            <ul className="nav nav-tabs">
               {
                   this.props.tabs.map(tab =>{
                       const active=(tab === this.props.selected ?'active' :'');
                   

                  
                  return (
                    <li className="nav-item" key={ tab }>
                      <a className={"nav-link " + active } onClick={ () => this.props.setSelected(tab) }>
                        { tab }
                      </a>
                    </li>
                  );




               })
    }
            </ul>
            { this.props.children }
          </div>
        );
}
}

export default Test;
