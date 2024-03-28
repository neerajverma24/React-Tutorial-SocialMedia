import React from 'react';
import GrandChildPropDril from './GrandChildPropDril';

export default function ChildPropDril({ counter }) {
    return (
        <div style={{ border: "2px solid red" }}>
            <h2>Child Prop Dril</h2>

            {/* Passing PROPS to GRANDCHILD */}
            <GrandChildPropDril counter={counter} />

        </div>
    )
}
