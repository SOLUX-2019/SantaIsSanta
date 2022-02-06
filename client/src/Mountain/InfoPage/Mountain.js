import React from 'react';
import { useLocation } from "react-router-dom";
import { MountainWrapper, Container, Content } from './styledInfoPage';
import MountainLoc from './MountainLoc';
import MountainHeader from './MountainHeader';
import MountainInfo from './MountainInfo';
import MountainReview from './MountainReview';
import MountainMap from './MountainMap';

const Mountain = () => {
    const search = useLocation().search;
    const region = new URLSearchParams(search).get('region');
    const mid = new URLSearchParams(search).get('mid');

    return (
        <MountainWrapper>
            <Container>
                <Content>
                    <MountainLoc region={region} mid={mid} />
                    <MountainHeader mid={mid} />
                    <MountainInfo mid={mid}/>
                    <MountainMap mid={mid}/>
                    <MountainReview mid={mid} />
                </Content>
            </Container>
        </MountainWrapper>
    );
}

export default Mountain;
