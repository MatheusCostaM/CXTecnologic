import { useEffect, useState } from 'react';
import styled from "styled-components";

const MoveSimple = styled.div`

    height: 100% ;

    img{
        height: 100% ;
    }

& > * {
    /* transição para a escala */
    transition: transform 0.7s ease-in-out;
    /* Mudança de escala */
    transform: scale(${({ $isMove }) => ($isMove ? 0.95 : 1)});
}
`

export default ({ children }) => {

    const [isMove, setMove] = useState(true);

    useEffect(() => {

        let newIsMove = isMove;

        const interval = setInterval(() => {

            if (newIsMove) {
                newIsMove = false;
            } else {
                newIsMove = true;
            }
            setMove(newIsMove);
        }, 1000)

        return () => clearInterval(interval);
    });

    return (
        <MoveSimple $isMove={isMove}>
            {children}
        </MoveSimple>
    );
}

