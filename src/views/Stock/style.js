import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`
export const Content = styled.div`
    width: 100%;
    color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    a {
        text-decoration: none;
        color: black;
    }
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #20295F;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    h3 {
        color: #20295F;
        position: relative;
        top: 30px;
        background-color: white;
        padding: 0px 20px;
    }
`