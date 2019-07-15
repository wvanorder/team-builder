import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import Form from './Form';
import MemberCard from'./MemberCard';
import 'antd/dist/antd.css';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}


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
  background-color: mediumaquamarine;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Middle = styled.div`
width: 50%;
height: 100vh
text-align: center;
background-color: tomato;

`

function App() {

  const [team, changeTeam] = useState([]);
  const [teams, addTeams] = useState(['Team1', 'Team2', 'Team3']);

  const [teamMember, changeTeamMember] = useState({
    name: '',
    email: '',
    team: '',
    role: '',
    id: 0,
  });


  const [memberToEdit, setMemberToEdit] = useState('');

  const setMember = (member) => {
    setMemberToEdit(member)
  }

  const changeHandler = e => {
    console.log(teamMember);
    changeTeamMember({...teamMember, [e.target.name]: e.target.value});
  };

  const changeEditHandler = e => {
    console.log(teamMember);
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
        TEAM
      </Header>
      <Appz>
        <Side>
          <form>
            <input name="team"
            placeholder="add a team" />
          </form>
        </Side>
        <Middle>
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
        </Middle>
        <Side>
          <Tabs defaultActiveKey="Team1" onChange={callback}>
              {teams.map(teamz => {
                return <TabPane tab={teamz} key={teamz}>
                {team.map(mate => {
                  if(mate.team === teamz){
                    return <MemberCard member={mate} setMember={setMember} />
                  }
                })}
                </TabPane>
              })}
          </Tabs>
        </Side>
    </Appz>
    </div>
    
  );
}

export default App;
