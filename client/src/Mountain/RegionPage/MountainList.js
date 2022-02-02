import React from 'react';
import styled from "styled-components";
import jirisan from '../../assets/img/jirisan.png';
import guemo from '../../assets/img/guemo.png';
import juwang from '../../assets/img/juwang.png';
import palgak from '../../assets/img/palgak.png';
import palgong from '../../assets/img/palgong.png';
import "../../assets/font/font.css";

const MountainList = ({region}) => {

    const List = styled.div`
        width: 100%;
        padding: 60px 0px 100px 0px;
        display: flex;
        flex-flow: row wrap;
    `;

    const Item = styled.div`
        width: 33.33%;
    `;

    const Cont = styled.div`
        padding: 15px 10px;
        display: flex;
        flex-direction: column;

        :hover .img_hover {
            opacity: 0.80;
            transition: opacity 0.2s linear;
            cursor: pointer;
        }
    `;

    const Image = styled.div`
        position: relative;

        img{
            width: 100%;
            height: 200px;
            border-radius: 4px;
        }

        .img_hover {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 200px;

            background-color: #222;
            opacity: 0;
            border-radius: 4px;
            color: white;
            font-weight: 600;
            text-align: center;
            line-height: 200px;
        }
    `;

    const Text = styled.div`
        margin: auto;
        margin-top: 5px;
        font-size: 20px;
        color: #222;
        font-family: "Jalnan";

        ${Cont}:hover & {
            color: #dd5528;
        }
    `;

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
                        <div className="img_hover" title="페이지 이동">자세히 보기</div>
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