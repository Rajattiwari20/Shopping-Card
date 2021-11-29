import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useDispatch } from 'react-redux'
import { getCategory } from '../../../redux/actions'

function DropDown() {
  const [category, setCategory] = React.useState('')

  const dispatch = useDispatch()
  const handleChange = (event) => {
    setCategory(event.target.value)
    dispatch(getCategory(event.target.value))
  }

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Select Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handleChange}
          label="Select Category"
        >
          <MenuItem value={"men's clothing"}>men's clothing</MenuItem>
          <MenuItem value={'jewelery'}>jewelery</MenuItem>
          <MenuItem value={'electronics'}>electronics</MenuItem>
          <MenuItem value={"women's clothing"}>women's clothing</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default DropDown
