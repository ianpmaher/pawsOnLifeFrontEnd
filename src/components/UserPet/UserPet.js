import styled from "styled-components";
import Pets from "@mui/icons-material/Pets";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
/* using NativeSelect because the docs describe its mobile-friendliness */
/* https://mui.com/material-ui/react-select/ */

const FlexContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

const marks = [
    {
        value: 1,
        label: "Dog",
    },
    {
        value: 2,
        label: "Cat",
    }
]

const valuetext = (value) => {
    return `${value}`
}


const UserPet = (props) => {
    // https://mui.com/material-ui/react-slider/

    return (
        <FlexContainer>
            <Box sx={{minWidth: 150}}>
                <Pets/>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Canine or Feline?
                    </InputLabel>
                    <NativeSelect
                        defaultValue={"Dog"}
                        inputProps={{
                            name: 'pet',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={"Dog"}>Dog</option>
                        <option value={"Cat"}>Cat</option>
                    </NativeSelect>
                </FormControl>
            </Box>
        </FlexContainer>
    )
}

export default UserPet;