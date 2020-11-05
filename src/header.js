import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <>
                <div style={{float:'left'}}>Logo</div>
                    <div style={{float:'right'}}>Home</div>
                    <div style={{float:'right'}}>About Us</div>
                    <div style={{clear: 'left'}} />
                 </>
        )
    }
}

export default Header