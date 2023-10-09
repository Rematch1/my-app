import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import styled, { css } from "styled-components";
import useDetectClose from "./hooks/useDetectClose";
import About from './pages/About';
import Announce from './pages/Announce';
import Apim from './pages/Apim';
import Aut from './pages/Aut';
import Code from './pages/Code';
import Dashboard from './pages/Dashboard';
import Download from './pages/Download';
import Faq from './pages/Faq';
import Guide from './pages/Guide';
import Ldap from './pages/Ldap';
import Mon from './pages/Mon';
import Qna from './pages/Qna';
import Sta from './pages/Sta';

const DropdownMenu = () => {
  const [aboutIsOpen, aboutRef, aboutHandler] = useDetectClose(false);
  const [supportIsOpen, supportRef, supportHandler] = useDetectClose(false);
  const [apisIsOpen, apisRef, apisHandler] = useDetectClose(false);
  const [manageIsOpen, manageRef, manageHandler] = useDetectClose(false);

  const logoutClickHandler = () => {
    console.log("logout");
  };

  return (
    <Wrapper>
      <DropdownContainer>
        <DropdownButton onClick={aboutHandler} ref={aboutRef}>
          소개
        </DropdownButton>
        <Menu isDropped={aboutIsOpen}>
          <Ul>
            <Li>
              <LinkWrapper href="/about">포탈소개</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="/guide">가이드</LinkWrapper>
            </Li>
          </Ul>
        </Menu>
        <Routes>
         <Route path="/about" element={<About />} />
         <Route path="/guide" element={<Guide />} />
       </Routes>
      </DropdownContainer>

      <DropdownContainer>
        <DropdownButton onClick={supportHandler} ref={supportRef}>
          고객지원
        </DropdownButton>
        <Menu isDropped={supportIsOpen}>
          <Ul>
            <Li>
              <LinkWrapper href="/announce">공지사항</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="/faq">FAQ</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="/qna">QnA</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="/download">자료실</LinkWrapper>
            </Li>
          </Ul>
        </Menu>
        <Routes>
         <Route path="/announce" element={<Announce />} />
         <Route path="/faq" element={<Faq />} />
         <Route path="/qna" element={<Qna />} />
         <Route path="/download" element={<Download />} />
       </Routes>
      </DropdownContainer>

      <DropdownContainer>
        <DropdownButton onClick={apisHandler} ref={apisRef}>
          API
        </DropdownButton>
        <Menu isDropped={apisIsOpen}>
          <Ul>
            <Li>
              <LinkWrapper href="code">행정표준코드</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="ldap">LDAP</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="aut">공무원 모바일 인증</LinkWrapper>
            </Li>
          </Ul>
        </Menu>
        <Routes>
         <Route path="/code" element={<Code />} />
         <Route path="/ldap" element={<Ldap />} />
         <Route path="/aut" element={<Aut />} />
       </Routes>
      </DropdownContainer>
      <DropdownContainer>
        <DropdownButton onClick={manageHandler} ref={manageRef}>
          관리 및 통계
        </DropdownButton>
        <Menu isDropped={manageIsOpen}>
          <Ul>
            <Li>
              <LinkWrapper href="dashboard">대쉬보드</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="apim">API 관리</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="mon">사용량 관리</LinkWrapper>
            </Li>
            <Li>
              <LinkWrapper href="sta">통계</LinkWrapper>
            </Li>
          </Ul>
        </Menu>
        <Routes>
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/apim" element={<Apim />} />
         <Route path="/mon" element={<Mon />} />
         <Route path="/sta" element={<Sta />} />
       </Routes>
      </DropdownContainer>
    </Wrapper>
  );
};

export default DropdownMenu;

const Wrapper = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 19px;
  background: gray;
  width: 1000px;
  height: 50px;
  font-weight: bold;
`;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

const DropdownButton = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  background: gray;
  position: absolute;
  top: 52px;
  left: 50%;
  width: 200px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: gray;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li``;

const LinkWrapper = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: white;
`;

const Logout = styled.div`
  cursor: pointer;
  font-size: 16px;
  display: block;
  text-decoration: none;
  color: white;
  font-size: 19px;
`;
