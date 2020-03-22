import React, {useEffect} from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Image from './Image';
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

const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin: 50px auto;
    width: 90%;
`

const Search = () => {
    //Adding a loading gif
    const search = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            let res = await axios.get('https://api.gravityaround.com/images');

                 dispatch({
                    type: "Images",
                    payload: res.data
                });
        }
        fetchData();
        }, [])

    useEffect(() => {
        async function updateData() {
            if(search.name){

                let res = await axios.get('https://api.gravityaround.com/images');

                dispatch({
                type: "Images",
                payload: res.data.filter(image => {
                    for(let i = 0; i < image.categories.length; ++i)
                        if(image.categories[i].includes(search.name)) return true;

                    return false;
                })}
                );
            }
        }
        updateData();
    },[search.name])

    return (
    <div>
        <Header>
        <Title>
            Gravity Search
        </Title>
        </Header>
        <SearchBar/>
        <Images>
            {search.images ? search.images.map((image) => 
                <Image key = {image.id} image={image}/>
            ) : <div>There are no images!</div>}
        </Images>
    </div>
    )
}

export default Search;