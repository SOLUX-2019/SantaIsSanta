import React from 'react';
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaMountain, FaAngleRight } from "react-icons/fa";
import MountainList from './MountainList';

const RegionPage = () => {
    const search = useLocation().search;
    const region = new URLSearchParams(search).get('region');

    const Region = styled.div`
        height: 100%;
    `;
    
    const Container = styled.div`
        width: 100%;
    
    `;

    const Content = styled.div`
        width: 60%;
        display: flex;
        flex-direction: column;
        margin: 0px auto;
    `;
    
    const Loc = styled.div`
        width: 100%;
        margin-top: 40px;
        padding-bottom: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid #ddd;
    `;

    const PresentPage = styled.span`
        font-family: "Pretendard";
    `;

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