import React from 'react'
import { Spin, Icon } from 'antd';

const Spinner = ({spin}) => {   
    if(spin==false)
    return(
    <center><Icon type="loading" style={{ fontSize: 24, display: "none" }}  className="spinner" spin={false}/></center>
    );
    else
    return(
        <center><Icon type="loading" style={{ fontSize: 24 }}  className="spinner" spin={false}/></center>
        );
}

export default Spinner;