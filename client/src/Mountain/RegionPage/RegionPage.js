import React from 'react';
import { useLocation } from "react-router-dom";
import { Region, Container, Content, Loc, PresentPage } from './styledRegionPage';
import { FaMountain, FaAngleRight } from "react-icons/fa";
import MountainList from './MountainList';

const RegionPage = () => {
    const search = useLocation().search;
    const region = new URLSearchParams(search).get('region');

    return (
        <Region>
            <Container>
                <Content>
                    <Loc>
                        <FaMountain />
                        <FaAngleRight />
                        <PresentPage> {region}</PresentPage>
                    </Loc>
                    <MountainList region={region}/>
                </Content>
            </Container>
        </Region>
    );
}

export default RegionPage;