
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


interface ITabProps {
  isActive: boolean;
}


const _NavLink = styled(NavLink)`
  text-decoration: none;
  outline: none;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  background: ${props => props.theme.color.white};
  box-shadow: 0 -2px 16px 0 ${props => props.theme.color.gray};
`;

const _Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 0;
  justify-content: space-evenly;
  padding: 12px;
`;

const _Tab = styled.div<ITabProps>`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: ${props => props.isActive
          ? props.theme.color.primary
          : props.theme.color.grayDark};
  border-radius: 50%;
  border: 1px solid ${props => props.isActive
          ? props.theme.color.primary
          : props.theme.color.grayDark};
  width: 40px;
  height: 40px;
  outline: none;
`;


function TabBar() {
  return (
    <_Wrapper>
      <_Container>
        <_NavLink to={'/'} end={true}>
          {(props) => (
            <_Tab isActive={props.isActive}>
              <i className="fa fa-file-alt"/>
            </_Tab>
          )}
        </_NavLink>
        <_NavLink to={'/valuation'} end={true}>
          {(props) => (
            <_Tab isActive={props.isActive}>
              <i className="fa-solid fa-message"></i>
            </_Tab>
          )}
        </_NavLink>
        <_NavLink to={'/cart'} end={true}>
          {(props) => (
            <_Tab isActive={props.isActive}>
              <i className="fa-solid fa-gear"></i>
            </_Tab>
          )}
        </_NavLink>
      </_Container>
    </_Wrapper>
  );
}

export default TabBar;
