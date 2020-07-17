import React, { Component } from 'react';
import styled from 'styled-components';

class KeysCalculator extends Component {
    render() {
        return (
            <ButtonBlock>
                <Button name="±" onClick={e => this.props.onClick(e.target.name)}>±</Button>
                <ButtonClear name="C" onClick={e => this.props.onClick(e.target.name)}>C</ButtonClear>
                <ButtonClear name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</ButtonClear>
                <ButtonAction name="+" onClick={e => this.props.onClick(e.target.name)}>+</ButtonAction><br />

                <Button name="1" onClick={e => this.props.onClick(e.target.name)}>1</Button>
                <Button name="2" onClick={e => this.props.onClick(e.target.name)}>2</Button>
                <Button name="3" onClick={e => this.props.onClick(e.target.name)}>3</Button>
                <ButtonAction name="-" onClick={e => this.props.onClick(e.target.name)}>-</ButtonAction><br />

                <Button name="4" onClick={e => this.props.onClick(e.target.name)}>4</Button>
                <Button name="5" onClick={e => this.props.onClick(e.target.name)}>5</Button>
                <Button name="6" onClick={e => this.props.onClick(e.target.name)}>6</Button>
                <ButtonAction name="*" onClick={e => this.props.onClick(e.target.name)}>x</ButtonAction><br />

                <Button name="7" onClick={e => this.props.onClick(e.target.name)}>7</Button>
                <Button name="8" onClick={e => this.props.onClick(e.target.name)}>8</Button>
                <Button name="9" onClick={e => this.props.onClick(e.target.name)}>9</Button>
                <ButtonAction name="/" onClick={e => this.props.onClick(e.target.name)}>÷</ButtonAction><br />

                <Button name="%" onClick={e => this.props.onClick(e.target.name)}>%</Button>
                <Button name="0" onClick={e => this.props.onClick(e.target.name)}>0</Button>
                <Button name="." onClick={e => this.props.onClick(e.target.name)}>.</Button>
                <ButtonResult name="=" onClick={e => this.props.onClick(e.target.name)}>=</ButtonResult>
            </ButtonBlock>
        );
    }
}

export default KeysCalculator;

const ButtonBlock = styled.div`
background: #509CA9;
justify-content: space-between;
width: 400px;
font-size: 20px;
font-weight: 600;
border-radius: 7px;
margin: 10px;
`

const Button = styled.button`
height: 60px;
width: 25%;
background-color: #fff;
border-radius: 3px;
border: 1px solid #c4c4c4;
background-color: transparent;
font-size: 2rem;
color: #333;
background-image: linear-gradient(to bottom,transparent,transparent 50%,rgba(0,0,0,.04));
box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), inset 0 1px 0 0 rgba(255,255,255,.45), inset 0 -1px 0 0 rgba(255,255,255,.15), 0 1px 0 0 rgba(255,255,255,.15);
text-shadow: 0 1px rgba(255,255,255,.4);

    &:hover {
        background-color: #ADD8E6;
`

const ButtonResult = styled(Button)`
    &:hover {
        background-color: green;
`

const ButtonAction = styled(Button)`
    &:hover {
        background-color: blue;
`

const ButtonClear = styled(Button)`
    &:hover {
        background-color: red;
`

