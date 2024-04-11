import { Search } from '@mui/icons-material'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'

function Filter() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-[24px] font-light">
        Search results for <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          {/* <label htmlFor="city">Location</label> */}
          <TextField
            label="City Location"
            variant="outlined"
            fullWidth
            type="text"
            id="city"
            name="city"
            size="small"
          />
        </div>
      </div>
      <div className=" flex justify-between items-center gap-5">
        <FormControl size="small">
          <InputLabel>Type</InputLabel>
          <Select
            className="w-[100px]"
            id="type"
            name="type"
            // value={age}
            label="Type"
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>any</em>
            </MenuItem>
            <MenuItem value="buy">Buy</MenuItem>
            <MenuItem value="rent">Rent</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small">
          <InputLabel>Property</InputLabel>
          <Select
            className="w-[100px]"
            name="property"
            id="property"
            // value={age}
            label="Property"
            // onChange={handleChange}
          >
            <MenuItem value="">
              <em>any</em>
            </MenuItem>
            <MenuItem value="apartment">Apartment</MenuItem>
            <MenuItem value="house">House</MenuItem>
            <MenuItem value="condo">Condo</MenuItem>
            <MenuItem value="land">Land</MenuItem>
          </Select>
        </FormControl>

        <TextField
          className="w-[100px]"
          label="Min Price"
          type="number"
          id="minPrice"
          name="minPrice"
          variant="outlined"
          size="small"
          InputProps={{ inputProps: { min: '0' } }}
        />
        <TextField
          className="w-[100px]"
          label="Max Price"
          type="number"
          id="maxPrice"
          name="maxPrice"
          variant="outlined"
          size="small"
          InputProps={{ inputProps: { min: '0' } }}
        />

        <TextField
          className="w-[100px]"
          variant="outlined"
          id="bedroom"
          name="bedroom"
          size="small"
          label="Bedroom"
          type="number"
          InputProps={{ inputProps: { min: '0' } }}
        />
        <Button variant="contained">
          <Search />
        </Button>
      </div>
    </div>
  )
}

export default Filter
