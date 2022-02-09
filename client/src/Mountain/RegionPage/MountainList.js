import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { List, Item, Cont, Image, Text } from './styledRegionPage';
import "../../assets/font/font.css";

const MountainList = ({region}) => {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get(`/mountain/region/info?region=${region}`)
        .then((res) => {
            if(res.data.Success == undefined)
                setList(res.data);
            else
                alert(res.data.message);
        })
        .catch((err) => console.log(err));
    }, [region]);

    const mountainList = list.map((item) => 
            <Item key={item._id}>
                <Cont>
                    <Image>
                        <img src={require(`../../assets/img/mountainImg/${item.name}.png`)} alt={`${item.name}`} />
                        <div className="img_hover" title="페이지 이동" onClick={() => navigate(`/mountain/info?region=${region}&mid=${item.mid}`)}>자세히 보기</div>
                    </Image>
                    <Text>{item.name}</Text>
                </Cont>
            </Item>
    )

    return (
        <List>
            {mountainList}
        </List>
    );
}

export default MountainList;