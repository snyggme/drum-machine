import React from 'react'

export const Control = (props) => {
  const justify = props.trigger ? {justifySelf: 'start'} : {justifySelf: 'end'}
  const styles = {width: '100%', height: '30px', backgroundColor: '#435872', display: 'grid', alignItems: 'center', marginBottom: '20px', borderRadius: '15px', cursor: 'pointer'}
  return (
    <div style={{width:'75px', marginLeft: '30px', fontSize: '20px', fontWeight: 'bold', textAlign: 'center'}}>
      {props.name}
      <div onClick={props.onClick} style={styles}>
        <div className='control-btn' style={justify}></div>
      </div>
    </div>
  )
}