import styled from 'styled-components'

export const HomeSection = styled.div `
    height: 500px;
    background: url('images/home1.jpeg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
` 

export const HomeInformation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) ;

`

export const HomeTitle = styled.h2`
    font-size: 55px;
    font-weight: bold;
    color: #000;
    padding-top:5px;

`

export const HomeInfo = styled.h4`
    font-size: 50px;
    color: #eb5424;
    margin: 40px;
`

export const HomeDesc = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #fff;
`

export const HomeBtn = styled.button`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold ;
    margin-bottom: 50px;


    &:hover {
    background: #fff;
    color: #eb5424 ;
    }
`


