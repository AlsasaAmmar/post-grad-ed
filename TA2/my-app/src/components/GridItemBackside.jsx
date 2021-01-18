import React from "react";
import { CapitalizeAndRemoveSpace } from "../helpers/functions";
import { Fade } from "react-awesome-reveal";

function GridItemBackside({ data, keys, ...props }) {
    return (
        <Fade>
            <div className={props.class}>
                <h4 style={{ color: 'yellow' }}>{data.name}</h4>
                {keys.map((key, i) => (
                    <p id={i}>
                        <span style={{ fontWeight: 'bolder' }}>{CapitalizeAndRemoveSpace(key)}: </span>
                        {data[key]}
                    </p>
                ))}
            </div>
        </Fade>
    );
}

export default GridItemBackside;
