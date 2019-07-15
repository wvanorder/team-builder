import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import Form, {Formz} from './Form';
import MemberCard from'./MemberCard';
import 'antd/dist/antd.css';

import { Tabs, Radio } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const TabPanez=styled(TabPane)`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
`


const Header = styled.div`
width: 100%;
height 100px;
background-color: beige;
text-align: center;
`

const Appz = styled.div`
display: flex;
flex-flow: row nowrap;
`

const Side = styled.div`
  width: 25%;
  height: 100vh
  text-align: center;
  background-color: tomato;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Middle = styled.div`
width: 50%;
height: 100vh
text-align: center;
background-color: mediumaquamarine;

`

function App() {

  const [team, changeTeam] = useState([]);

  const [teams, addTeams] = useState(['Team1', 'Team2', 'Team3']);
  const [newTeam, changeNewTeam] = useState('');

  const [teamMember, changeTeamMember] = useState({
    name: '',
    email: '',
    team: '',
    role: '',
    id: 0,
  });

  const changeTeamHandler = e => {
    console.log(newTeam);
    changeNewTeam(e.target.value)
  };

  const addNewTeam = e => {
    e.preventDefault();
    addTeams([...teams, newTeam]);
  }


  const [memberToEdit, setMemberToEdit] = useState('');

  const setMember = (member) => {
    setMemberToEdit(member)
  }

  const changeHandler = e => {
    changeTeamMember({...teamMember, [e.target.name]: e.target.value});
  };

  const changeEditHandler = e => {
    setMemberToEdit({...memberToEdit, [e.target.name]: e.target.value});
  };


  const submitHandler = e => {
    e.preventDefault();
    changeTeam([...team, teamMember]);
    changeTeamMember({
      name: '',
      email: '',
      team: '',
      role: '',
      id: team.length + 1,
    });
  }

  const updateMember = e => {
    e.preventDefault();
    changeTeam(team.map(mate => {
      if(mate.id === memberToEdit.id){
        mate={...memberToEdit}
      } return mate
    }));
    setMemberToEdit('');
  }

  



  return (
    <div>
      <Header>
        <h1>The Best Team Builder App ever made</h1>
      </Header>
      <Appz>
        <Side>
          <h2> Add a New Team!</h2>
          <Formz onSubmit={addNewTeam}>
            <input name="team"
            placeholder="add a team"
            value={newTeam}
            onChange={changeTeamHandler} />
            <button>Add new Team</button>
          </Formz>
        </Side>
        <Middle>
        <Tabs defaultActiveKey="Team1" onChange={callback}>
              {teams.map(teamz => {
                return <TabPanez tab={teamz} key={teamz}>
                {team.map(mate => {
                  if(mate.team === teamz){
                    return <MemberCard member={mate} setMember={setMember} />
                  }
                })}
                </TabPanez>
              })}
          </Tabs>
        </Middle>
        <Side>
          <h2>Team Member Form</h2>
        <Form 
          teamMember={teamMember} 
          changeTeamMember={changeTeamMember}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          changeEditHandler={changeEditHandler}
          memberToEdit={memberToEdit}
          updateMember={updateMember}
          teams={teams}
          />
          
        </Side>
    </Appz>
    </div>
    
  );
}

export default App;
