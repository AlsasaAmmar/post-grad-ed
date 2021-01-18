import React from 'react'
import { useLocation } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import { useHttpRequest } from '../hooks/Http-request'


import Card from '../components/Card'
import GridItem from '../components/GridItems'

import { itemsKeys } from '../helpers/itemsData'
import defaultAvatar from '../pics/avatar.png'

import './SearchResults.css'

export default function SearchResults() {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search)
    const searchTerm = searchParams.get('name')
    const [loading, , data] = useHttpRequest(`${process.env.REACT_APP_ROOT_PATH}/people/?name=${searchTerm}`)

    return (
        <div>
            {!loading && (
                <Fade duration={500}>
                    <div className="tabs_body">
                        {data.results.length < 1 ?
                            <Card>
                                <h3>No character was found</h3>
                            </Card>
                            : data.results.map(character => <GridItem data={character} defaultPhoto={defaultAvatar} elKeys={itemsKeys.characterKeys} activeTab={'Characters'} />)}
                    </div>
                </Fade>
            )}
        </div>
    )

}

