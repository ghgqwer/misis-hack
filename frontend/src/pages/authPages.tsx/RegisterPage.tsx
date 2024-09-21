import styled from "styled-components"
import { FlexColumn } from "../../components/BaseComponents"
import RegisterForm from "../../components/forms/RegisterForm"


export default function RegisterPage() {
    return (
        <FlexColumn>
            <Continer>
                <RegisterForm />
            </Continer>
        </FlexColumn>
    )
}


const Continer = styled.div`
    width: 350px;
`
