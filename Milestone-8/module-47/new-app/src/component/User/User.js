import React from 'react';

const User = (props) => {
    console.log(props.name)
    const {name, email, phone, address :{city}} = props.name;
    const divStyle = {border:"1px solid black", margin:"10px auto", width:"25%",padding:"20px 0px",backgroundColor:"lightblue"}
    return (
        <div style={divStyle}>
            <h4>Name:{name}</h4>
            <small style={{fontWeight:"bold",margin:"5px 0",display:"block"}}>Email:{email}</small><br/>
            <small style={{fontWeight:"bold",margin:"5px 0",display:"block"}}>Phone:{phone}</small><br/>
            <small style={{fontWeight:"bold",margin:"5px 0",display:"block"}}>City:{city}</small>
        </div>
    );
};

export default User;
===