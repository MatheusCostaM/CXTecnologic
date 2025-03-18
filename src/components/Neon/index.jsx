import React from 'react';
import styled from "styled-components";

const Neon = styled.div`

    > div {
        box-shadow: 0px 0px 10px 5px #6502fa; /* Neon roxo vivo */
    }

    h2 {
        color: rgb(209, 255, 240);
        text-shadow: 0px 0px 10px 5px #6502fa; /* Neon roxo vivo */
    }
`;

export default ({ children }) => {
    return (
        <Neon>
            {children}
        </Neon>
    )
}
