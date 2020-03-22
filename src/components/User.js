import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
    height: 400px;
    background : lightcoral;
    display: flex;
    flex-direction : column;
    justify-content: flex-end;
`

const Likes = styled.div`
    min-height: 50px;
    width : 100%;
    background: gray;
    opacity: 0.1;
`

const User = () => {
    return (
        <Wrapper href = "">
            <Likes/>
        </Wrapper>
    )
}

export default User;