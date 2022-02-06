import React from 'react';
import { List, Item, Cont, Image, Text } from './styledRegionPage';
import jirisan from '../../assets/img/jirisan.png';
import guemo from '../../assets/img/guemo.png';
import juwang from '../../assets/img/juwang.png';
import palgak from '../../assets/img/palgak.png';
import palgong from '../../assets/img/palgong.png';
import "../../assets/font/font.css";

const MountainList = ({region}) => {

    return (
        <List>
            <Item>
                <Cont>
                    <Image>
                        <img src={guemo} alt="금오산" />
                        <div className="img_hover" title="페이지 이동">자세히 보기</div>
                    </Image>
                    <Text>금오산</Text>
                </Cont>
            </Item>
            <Item>
                <Cont>
                    <Image>
                        <img src={jirisan} alt="지리산" />
                        <div className="img_hover" title="페이지 이동" onClick={() => window.location.href=`/mountain/info?region=${region}&mid=지리산`}>자세히 보기</div>
                    </Image>
                    <Text>지리산</Text>
                </Cont>
            </Item>
            <Item>
                <Cont>
                    <Image>
                        <img src={juwang} alt="주왕산" />
                        <div className="img_hover" title="페이지 이동">자세히 보기</div>
                    </Image>
                    <Text>주왕산</Text>
                </Cont>
            </Item>
            <Item>
                <Cont>
                    <Image>
                        <img src={palgak} alt="팔각산" />
                        <div className="img_hover" title="페이지 이동">자세히 보기</div>
                    </Image>
                    <Text>팔각산</Text>
                </Cont>
            </Item>
            <Item>
                <Cont>
                    <Image>
                        <img src={palgong} alt="팔공산" />
                        <div className="img_hover" title="페이지 이동">자세히 보기</div>
                    </Image>
                    <Text>팔공산</Text>
                </Cont>
            </Item>
        </List>
    );
}

export default MountainList;