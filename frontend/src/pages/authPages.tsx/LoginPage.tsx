import styled from "styled-components"
import { FlexColumn } from "../../components/BaseComponents"
import LoginForm from "../../components/forms/LoginForm"

export default function LoginPage() {
    return (
        <FlexColumn>
            <Continer>
                <LoginForm />
            </Continer>
        </FlexColumn>
    )
}


const Continer = styled.div`
    width: 350px;
`