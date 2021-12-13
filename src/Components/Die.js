import React from 'react';

export default function Die(props) {
    const styles = {
        backgroundColor: props.held ? '#59E391' : '#fff'
    };

    return (
        <div 
            className="tenzies--die" 
            style={styles}
            onClick={props.holdDie}
        >
            {props.value}
        </div>
    )
}