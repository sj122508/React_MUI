import {useState} from 'react';
import {
    Box, 
    FormControlLabel, 
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    FormHelperText
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function MUICheckbox() {

    // create state for terms and condition
    const [termsAndCondition, setTermsAndCondition] = useState(false);
    // create state for skills
    const [skills, setSkills] = useState([]);

    const handleSkillsChange = (event) => {   
        console.log(event.target.value, 'event.target.value')
        const index = skills.indexOf(event.target.value);
        if (index === -1) {
            setSkills([...skills, event.target.value]);
        } else {
            setSkills(skills.filter((item) => item !== event.target.value));
        }
    };

    // create handle change for terms and condition
    const handleChange = (event) => {
        console.log(event.target.checked, 'event.target.checked')
        setTermsAndCondition(event.target.checked);
    };

  return (
    <Box>
        <Box>
            <FormControlLabel 
                label='I accept terms and condition'
                control={
                    <Checkbox 
                        checked={termsAndCondition}
                        onChange={handleChange}
                        size='small'
                        color='secondary'
                    />
                }
            />
        </Box>
        <Box>
            <FormControlLabel 
                label='I accept terms and condition'
                labelPlacement='start' // start, end, top, bottom
                control={
                    <Checkbox 
                        icon={<BookmarkBorderIcon />} 
                        checkedIcon={<BookmarkIcon />} 
                        checked={termsAndCondition} 
                        onChange={handleChange}
                    />
                }
            />
            
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills Vertical</FormLabel>
                <FormGroup>
                    <FormControlLabel 
                        label='HTML'
                        control={
                            <Checkbox 
                                value='HTML'
                                checked={skills.includes('HTML')}
                                onChange={handleSkillsChange}
                            />
                        }
                    />

                    <FormControlLabel 
                        label='CSS'
                        control={
                            <Checkbox 
                                value='CSS'
                                checked={skills.includes('CSS')}
                                onChange={handleSkillsChange}
                            />
                        }
                    />

                    <FormControlLabel 
                        label='Javascript'
                        control={
                            <Checkbox 
                                value='Javascript'
                                checked={skills.includes('Javascript')}
                                onChange={handleSkillsChange}
                            />
                        }
                    />
                </FormGroup>
            </FormControl>
        </Box>

         <Box>
            <FormControl>
                <FormLabel>Skills Horizontal</FormLabel>
                <FormGroup row>
                    <FormControlLabel 
                        label='HTML'
                        control={
                            <Checkbox 
                                value='HTML'
                                checked={skills.includes('HTML')}
                                onChange={handleSkillsChange}
                            />
                        }
                    />

                    <FormControlLabel 
                        label='CSS'
                        control={
                            <Checkbox 
                                value='CSS'
                                checked={skills.includes('CSS')}
                                onChange={handleSkillsChange}
                            />
                        }
                    />

                    <FormControlLabel 
                        label='Javascript'
                        control={
                            <Checkbox 
                                value='Javascript'
                                checked={skills.includes('Javascript')}
                                onChange={handleSkillsChange}
                            />
                        }
                    />
                </FormGroup>
            </FormControl>
        </Box>

        <Box>
            <FormControl error>
                <FormLabel>Checkbox Group with error</FormLabel>
                <FormGroup row>
                    <FormControlLabel 
                        label='HTML'
                        control={
                            <Checkbox 
                                value='HTML'
                                checked={skills.includes('HTML')}
                                onChange={handleSkillsChange}
                            />
                        }
                    />

                    <FormControlLabel 
                        label='CSS'
                        control={
                            <Checkbox 
                                value='CSS'
                                checked={skills.includes('CSS')}
                                onChange={handleSkillsChange}
                            />
                        }
                    />

                    <FormControlLabel 
                        label='Javascript'
                        control={
                            <Checkbox 
                                value='Javascript'
                                checked={skills.includes('Javascript')}
                                onChange={handleSkillsChange}
                            />
                        }
                    />
                </FormGroup>
                <FormHelperText sx={{margin:0}}>Some important helper text</FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MUICheckbox