import React from 'react';
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import MountainLoc from './MountainLoc';
import MountainHeader from './MountainHeader';
import MountainInfo from './MountainInfo';
import MountainReview from './MountainReview';
import MountainMap from './MountainMap';

const Mountain = () => {
    const search = useLocation().search;
    const region = new URLSearchParams(search).get('region');
    const mid = new URLSearchParams(search).get('mid');

    const Mountain = styled.div`
        height: 100%;
    `;
    
    const Container = styled.div`
        width: 100%;
        height: 100%;
    `;

    const Content = styled.div`
        width: 60%;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
    `;

    return (
        <Mountain>
            <Container>
                <Content>
                    <MountainLoc region={region} mid={mid} />
                    <MountainHeader mid={mid} />
                    <MountainInfo mid={mid}/>
                    <MountainMap mid={mid}/>
                    <MountainReview mid={mid} />
                </Content>
            </Container>
        </Mountain>
    );
}

export default Mountain;
