import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 400px;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),url(${props => props.href});
    background-size: cover;
    display: flex;
    flex-direction : column;
    justify-content: flex-end;
`

const Likes = styled.div`
    min-height: 50px;
    width : 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Text = styled.div`
    margin: auto 20px;
    font-size: 20px;
    color: white;
    font-weight: bold;
    opacity: 0.7;
`

const User = ({image}) => {
    return (
        <Wrapper href = {image.url}>
            <Likes>
                <Text>
                    User : {image.account.username}
                </Text>
                <Text>
                    Likes : {image.likes}
                </Text>
            </Likes>
        </Wrapper>
    )
}

export default User;