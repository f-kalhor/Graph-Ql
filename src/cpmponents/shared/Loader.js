import { FallingLines } from 'react-loader-spinner'
import React from 'react';
const Loader = () => {
    return (
        <div style={{
            width: "100% ",
            height: "1000px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "100px"
        }}>
            <FallingLines
                color="gray"
                width="100"
                visible={true}
                ariaLabel='falling-lines-loading'
            />
        </div>
    );
};

export default Loader;