import styled from "styled-components";
import Pets from "@mui/icons-material/Pets";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useEffect, useState } from "react";
/* using NativeSelect because the docs describe its mobile-friendliness */
/* https://mui.com/material-ui/react-select/ */

const FlexContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

const UserPetSelect = ({setPet, defPet}) => {
    // https://mui.com/material-ui/react-slider/
    const [showPet, setShowPet] = useState(null);
    useEffect( () => {
        setShowPet(defPet)
    },[setShowPet, defPet])
    return showPet && (
        <FlexContainer>
            <Box sx={{minWidth: 150}}>
                <Pets/>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Canine or Feline?
                    </InputLabel>
                    <NativeSelect
                        defaultValue={showPet || "Dog"}
                        onChange={setPet}
                        inputProps={{
                            name: 'pet',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                    </NativeSelect>
                </FormControl>
            </Box>
        </FlexContainer>
    )
}

export default UserPetSelect;