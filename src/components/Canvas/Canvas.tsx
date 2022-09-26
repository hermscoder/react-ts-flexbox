import React, { useState, useEffect } from 'react'
import Property from '../../data/Property';
import './Canvas.css'

interface Props {
    text: string,
    properties: Property[]
}

export const Canvas: React.FC<Props> = ({ text, properties }) => {
    const [cssProps, setCssProps] = useState({})

    useEffect(() => {
        convertToCSSProperties(properties)
    }, [properties])
    
    function convertToCSSProperties(properties: Property[]) {
        var cssProps: {[k: string]: any} = {};
        properties.forEach(prop => cssProps[prop.id] = prop.selected)
        setCssProps(cssProps)
    }

    return (
        <div className="canvas" style={cssProps}>
            <img src='../logo192.png' alt="" width={'50px'} />
            <img src='../logo192.png' alt="" width={'30px'} />
            <img src='../logo192.png' alt="" width={'30px'} />
            <img src='../logo192.png' alt="" width={'30px'} />
        </div>
    );
}