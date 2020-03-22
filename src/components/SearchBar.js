import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width : 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    min-height: 60px;
    border: 1px solid rgba(170, 170, 170, 0.56);
    transition: 0.3s all;

    &:hover {
        box-shadow: 1px 1px 2px 3px rgba(0,0,0,0.1);
    }
`

// https://medium.com/@willhowardgb/building-a-beautiful-text-input-component-in-react-f85564cc7e86
//Discuss about positioning. Is it ever used in production?

const PHoldText = styled.input`
    display: inline;
    color: rgba(68, 68, 68, 0.54);
    min-width: 50px;
    border :none;
    line-height: 60px;
    flex: 3;
    padding: 0 20px;
    font-size: 15px;

    &:focus {
        outline : none;
    }
`

const SearchButton = styled.div`
    display: inline;
    min-width: 10%; /* Best practices for setting width and height for reusable components*/
    line-height: 60px;
    cursor: pointer;
    padding: auto;
    text-align: center;
    border-radius: 1%;
    background: rgba(170, 170, 170, 0.56);

    &:hover {
        background : rgba(68, 68, 68, 0.62);
    }
    `


const SearchBar = () => {
    return (
        <Container>
            <PHoldText placeholder = "Search images..."/>
            <SearchButton>Go</SearchButton>
        </Container>
    )
}

export default SearchBar;