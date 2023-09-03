import React from 'react'

function HeaderDesktop() {
  return (
    <div style={header}>
        <div style={headerLeft}>
            <text style={{color: '#FFFFFF', fontSize: 'calc(18px + 0.5vw)', fontWeight: 'bold'}}>
                About
            </text>
            <text style={{color: '#EAB308', fontSize: 'calc(18px + 0.5vw)', fontWeight: 'bold'}}>
                Me.
            </text>
        </div>
        <div style={headerRight}>
            <text style={{color: '#FFFFFF', fontSize: 'calc(10px + 0.5vw)'}}>
                HOME
            </text>
            <text style={{color: '#FFFFFF', fontSize: 'calc(10px + 0.5vw)'}}>
                ABOUT
            </text>
            <text style={{color: '#FFFFFF', fontSize: 'calc(10px + 0.5vw)'}}>
                SERVICE
            </text>
        </div>
    </div>
  )
}

const header = {
    backgroundColor: '#020617',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    position: 'sticky'
  };

const headerLeft = {
    marginLeft: '15%',
    width: '25%'
}

const headerRight = {
    display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '80%',
    gap: '10%',
    marginRight: '15%'
}

export default HeaderDesktop