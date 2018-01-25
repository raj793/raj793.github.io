import React from 'react'
import { Spin, Icon } from 'antd';

const Spinner = (spin) => {   
    return(
    <center><Icon type="loading" style={{ fontSize: 24 }}  className="spinner" spin={false}/></center>
    );
}

export default Spinner;