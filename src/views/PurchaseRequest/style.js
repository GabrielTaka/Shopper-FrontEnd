import styled from 'styled-components'

export const  Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const Form = styled.div`
    width: 50%;
    margin-top: 40px;
    margin-bottom: 70px;
`

export const Input = styled.div`
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0px;

    span {
        color: #707070;
    }

    textArea {
        font-size: 16px;
        border: 1px solid #EE6B26;
    }
`

export const Save = styled.div`
    width: 100%;

    button {
        width: 100%;
        color: white;
        border: none;
        font-size: 20px;
        background-color: #EE6B26;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
    }
`