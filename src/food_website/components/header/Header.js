import React from 'react';
import Styled from 'styled-components';
import { Row, Col } from 'antd';
import Icon from '@ant-design/icons';

const Header = () => {
    return(
        <Style>
          <Row className="row">
            <Col className="start"  xs={5} sm={4} md={6} lg={8} xl={10} >
              {/* <img src="/icons/EDH.svg" alt="EDH_poco" /> */}
              <div>Marca</div>
            </Col>
            <Col className="center" xs={14} sm={16} md={12} lg={8} xl={4}>
              <a href="#home">Categoria 1</a>
              <a href="#news">Categoria 2</a>
              <a href="#contact">Categoria 3</a>
            </Col>
            <Col className="end" xs={5} sm={4} md={6} lg={8} xl={10}>
              <div className="icons">
                <Icon type="search" />
              </div>
              <div className="icons">
                <Icon type="shopping" />
              </div>
              <div className="icons">
                <Icon type="user" />
              </div>
            </Col>
        </Row>
          {/* <div className="navbar">
            <div className="left">
              <h1></h1>
            </div>
              <div className="right">
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
              </div>
          </div> */}
        </Style>
    )
}

const Style = Styled.div`
.row {
  z-index: 1;
  padding: 15px 0px;
  display: flex;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  box-shadow: -20px -0px 0px -29px rgba(0,0,0,0.2),-10px 18px 20px -10px rgba(0,0,0,0.19) !important;
  div {
    display: inline-block;
  }
  a {
    color: #708090;
    padding: 23px 16px;
    text-decoration: none;
  }
  a:hover {
    background: #ddd;
    color: #000;
    cursor: pointer;
    background-color: transparent;
  }
  .start {
    text-align: start;
    padding-left: 20px;
  }
  .center {
    margin: 0 auto;
  }
  .end {
   text-align: end;
   padding-right: 20px;
   color: #708090;
   line-height: normal;
   .icons {
    font-size: 20px;
    padding: 0 8px;
   }
 }
}
`;

export default Header;