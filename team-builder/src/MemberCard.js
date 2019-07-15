import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const Card = styled.div`
width: 30%;
max-width: 400px;
height: 200px;
background-color: tomato;
margin: 20px 20px;
`

export default function MemberCard(props) {

    return(
        <Card>
            <h3>
                {props.member.name}
            </h3>
            <h4>
                {props.member.role}
            </h4>
            <h6>
                {props.member.id}, {props.member.team}
            </h6>

            <button onClick={() => {props.setMember(props.member)}}> <Icon type="edit" />Edit Member</button>
        </Card>
    )
}