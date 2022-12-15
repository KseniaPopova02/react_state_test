import React from "react";
import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PlusBtn = styled.button`
  font-size: 40px;
  color: #e9b4cf;
  border: none;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
`;
const MinusBtn = styled.button`
  font-size: 40px;
  color: #e9b4cf;
  border: none;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
`;
const Number = styled.div`
  margin: 0 20px;
  font-size: 35px;
`;

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    //state это объект
    //state нельзя менять на прямую!!!
  }
  componentDidMount = () => {
    setInterval(() => {
      this.handlerPlus();
    }, 2000);
  };
  handlerPlus = () => {
    //Для того что бы правильно поменять стейт нужно:
    let currentCount = this.state.count;
    currentCount++;
    //В лоб присваивать стейт нельзя, правильно будет сделать так:
    this.setState({
      count: currentCount,
    });
  };
  handlerMinus = () => {
    let currentCount = this.state.count;
    currentCount--;
    this.setState({
      count: currentCount,
    });
  };
  render() {
    return (
      <div>
        <Header>Counter</Header>
        <BtnWrapper>
          <PlusBtn onClick={this.handlerPlus}>+</PlusBtn>
          <Number>{this.state.count}</Number>
          <MinusBtn onClick={this.handlerMinus}>-</MinusBtn>
        </BtnWrapper>
      </div>
    );
  }
}

export default Counter;
