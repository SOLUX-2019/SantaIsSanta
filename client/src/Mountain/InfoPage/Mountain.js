import React, { useEffect, useState }from 'react';
import Axios from 'axios';
import { useLocation } from "react-router-dom";
import { MountainWrapper, Container, Content } from './styledInfoPage';
import MountainLoc from './MountainLoc';
import MountainHeader from './MountainHeader';
import MountainInfo from './MountainInfo';
import MountainReview from './MountainReview';
import MountainMap from './MountainMap';

const Mountain = () => {
    const search = useLocation().search;
    // const region = new URLSearchParams(search).get('region');
    const mid = new URLSearchParams(search).get('mid');
    const [info, setInfo] = useState({});

    useEffect(() => {
        Axios.get(`/mountain/info?mid=${mid}`)
        .then((res) => {
            if(res.data.Success == undefined){
                setInfo(res.data);
                console.log(res.data);
            }
            else
                console.log(res.data.message);
        })
        .catch((err) => console.log(err));
    }, [])

    return (
        <MountainWrapper>
            <Container>
                <Content>
                    <MountainLoc info={info}/>
                    <MountainHeader info={info} />
                    <MountainInfo info={info}/>
                    <MountainMap info={info}/>
                    <MountainReview info={info} />
                </Content>
            </Container>
        </MountainWrapper>
    );
}

export default Mountain;
