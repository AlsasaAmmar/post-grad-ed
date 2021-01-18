import React from 'react';
import './GridItems.css';
import { useHttpRequest } from '../hooks/Http-request'


import HoverableComponent from "./HoverableComponent"
import GridItemBackside from './GridItemBackside';

import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/core";
import Card from './Card';

const override = css`
  display: block;
  top: 35%; 
  margin: auto;
`;

function GridItem({ data, url, activeTab, defaultPhoto, elKeys }) {
    //the component can take a link or data as props.. 
    //maybe the logic can be improved by checking if the data coming is a link or an object 

    const [loading, err, fetchedData] = useHttpRequest(url)
    //gets photos from another Api
    const [characterPhotoLoading, , characterPhoto] = useHttpRequest('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json')
    const details = data ? data.properties : !loading && fetchedData.result.properties;

    //filters photos from the api and matches according to name 
    const characterAvatar = !characterPhotoLoading ? characterPhoto.filter(photo => photo.name === details.name)[0] : null;
    const speciesName = !loading ? details.name.toLowerCase() : null;
    const speciesAvatar = !characterPhotoLoading ? characterPhoto.find(photo => photo.species === speciesName) : null;

    const renderPhoto = () => {
        switch (activeTab) {
            case 'Characters':
                return characterAvatar ? characterAvatar.image : defaultPhoto
            case 'Species':
                return speciesAvatar ? speciesAvatar.image : defaultPhoto
            default:
                return defaultPhoto
        }
    }
    return (
        <Card hover class="item" >
            <HoverableComponent timeout={3000} hoverChildren={<GridItemBackside class="item_backside" keys={elKeys} data={details} />}>
                <div className='gridItem'>
                    {!data && loading && <DotLoader color={'white'} css={override} />}
                    {!data && err && <>
                        <img src={defaultPhoto} alt={'no photos found'} />
                        <h3>Error loading data</h3>
                    </>}
                    {data || !loading ?
                        <>
                            <img src={renderPhoto()} alt={details.name} />
                            <h3>{details.name}</h3>
                        </>
                        : null
                    }
                </div>
            </HoverableComponent >
        </Card>

    );
}

export default GridItem;
