import React, {useEffect} from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import User from './User';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

const Header = styled.div`
  width: 80%;
  min-height: 100px;
  padding: 10px 0;
  margin : auto;
`

const Title = styled.div`
  text-align: center;
  font-size: 40px;
`

const Users = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin: 50px auto;
    width: 90%;
`

const Search = () => {
    const search = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        // async function fetchData() {
        //     // let res = await axios.get('http://localhost:1337/api.gravityaround.com/images');
        //     // console.log(res.data);
        // }
        // fetchData();

        dispatch({
            type: "Users"
            // payload: res.data
        });
        }, [])

    return (
    <div>
        <Header>
        <Title>
            Gravity Search
        </Title>
        </Header>
        <SearchBar/>
        <Users>
            {function() {
                console.log(search.images);
            }()}
            {search.images ? search.images.map((user) => 
                <User key = {user.id}/>
            ) : <div>There are no users!</div>}
        </Users>
    </div>
    )
}

export default Search;