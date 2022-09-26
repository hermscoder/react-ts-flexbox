import { Button } from 'antd';
import React from 'react'
import './Commands.css'
import data from '../../data';
import Property from '../../data/Property';

interface Props {
    level:  number,
    text: string,
    availableOptions: string[],
    properties: Property[],
    setLevel: (value: React.SetStateAction<number>) => void,
    setProperties: (value: React.SetStateAction<Property[]>) => void,
}



export const Commands: React.FC<Props> = ({ level, text, availableOptions, properties, setLevel, setProperties }) => {

    function changeProperty(propertyId: string, value: string): void {
        var property = data.properties.find((btn: { id: string; }) => btn.id === propertyId)!;
        property.selected = value
        setProperties([...properties])
    }

    return (
        <div className="command">
            <div className="level-text">
                <h2>{ level }</h2>
                { text }
            </div>
            <div className="level-options">
                { 
                    availableOptions.map(option => {
                        var property = properties.find((btn: { id: string; }) => btn.id === option)!;

                        
                        return property !== undefined && (
                            <div 
                                key={property.id}>
                                    { property.id }
                                    {
                                        property.values.map(value =>
                                            <Button 
                                                key={value} 
                                                type={value === property.selected ? "primary" : "default"}
                                                onClick={() => changeProperty(property.id, value)}>

                                                { value }
                                            </Button>
                                        )
                                        
                                    }                                
                            </div>)
                    })
                }
            </div>
            <Button 
                style={{ alignSelf: 'self-end', marginTop: '5px' }} 
                type="primary" 
                danger
                onClick={() => setLevel(level + 1)}>
                    Next
            </Button>
            
        </div>
    );
}


