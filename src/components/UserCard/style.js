import styled from 'styled-components'

export const Container = styled.div`
    width: 250px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 3px 7px 1px rgba(0,0,0,0.44);
    border-radius: 5px;
    flex-direction: column;
    margin: 10px;


    &:hover{
        opacity: 0.5;
        cursor:pointer;
        transition: 0.3s ease;
    }
`

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`