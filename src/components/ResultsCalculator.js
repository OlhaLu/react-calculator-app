import React, { Component } from 'react';
import styled from 'styled-components';

class ResultsCalculator extends Component {
    render() {
        let { result } = this.props;
        return (
            <Result>
                <ResultValue>{result}</ResultValue>
            </Result>
        )
            ;
    }
}

export default ResultsCalculator;


const Result = styled.div`
margin: 0 15px 0 10px;
height: 4em;
display: flex;
justify-content: flex-end;
align-items: center;
background-color: #191970;
padding: 10px;
outline: 1px solid #888888;
`

const ResultValue = styled.p`
color: #ffffff;
font-size: 1.4em;
font-weight: bold;
`