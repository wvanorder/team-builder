import React from 'react';


export default function Form(props) {


    return(
        <div>
            <form onSubmit={props.memberToEdit ? props.updateMember : (props.submitHandler)}>
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
                <select 
                name="team"
                value={props.memberToEdit? props.memberToEdit.team :props.teamMember.team}
                onChange={props.memberToEdit ? props.changeEditHandler: props.changeHandler}
                >
                <option>Select a Team</option>
                {props.teams.map(team => {
                    return <option value={team}>{team}</option>
                })}
                </select>
                <input 
                name="role"
                placeholder="role"
                value={props.memberToEdit? props.memberToEdit.role :props.teamMember.role}
                onChange={props.memberToEdit ? props.changeEditHandler: props.changeHandler}
                />
                <button>{props.memberToEdit? 'Update Member' : 'Add New Member'}</button>
            </form>
        </div>
    )
};