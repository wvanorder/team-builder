import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const Formz = styled.form`
    display: flex;
    flex-flow: column nowrap;
    width: 70%;
    height: 300px;
    justify-content: space-evenly;

    input{
        width: 100%;
        height: 50px;
        font-size: 36px;
        border-radius: 15px;
        &:focus{
            outline: none;
        } 
    }
    select{
        width: 100%;
        height: 50px;
        font-size: 36px;
        border-radius: 15px;
        &:focus{
            outline: none;
        } 
    }
    button{
        width: 100%;
        border-radius: 15px;
        height: 50px;
        font-size: 36px;
        &:focus{
            outline: none;
        } 
        &:hover{
            background-color: mediumaquamarine;
            transition-duration: 0.2s;
        }
    }
`


export default function Form(props) {


    return(
            <Formz onSubmit={props.memberToEdit ? props.updateMember : (props.submitHandler)}>
                <input 
                name="name"
                type="text"
                placeholder="name"
                value={props.memberToEdit? props.memberToEdit.name : props.teamMember.name}
                onChange={props.memberToEdit ? props.changeEditHandler : props.changeHandler}
                />
                <input 
                name="email"
                type="text"
                placeholder="email"
                value={props.memberToEdit? props.memberToEdit.email :props.teamMember.email}
                onChange={props.memberToEdit ? props.changeEditHandler: props.changeHandler}
                /> 
                {props.memberToEdit? null: <select 
                name="team"
                value={props.memberToEdit? props.memberToEdit.team :props.teamMember.team}
                onChange={props.memberToEdit ? props.changeEditHandler: props.changeHandler}
                >
                <option>Select a Team</option>
                {props.teams.map(team => {
                    return <option value={team}>{team}</option>
                })}
                </select>}
                <input 
                name="role"
                placeholder="role"
                value={props.memberToEdit? props.memberToEdit.role :props.teamMember.role}
                onChange={props.memberToEdit ? props.changeEditHandler: props.changeHandler}
                />
                <button>{props.memberToEdit? 'Update Member' : <Icon type="user-add" />}</button>
            </Formz>
    )
};

export {Formz};