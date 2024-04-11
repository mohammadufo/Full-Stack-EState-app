import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Button, ButtonGroup, TextField } from '@mui/material'

const types = ['buy', 'rent']

function SearchBar() {
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0,
  })

  const switchType = (val: string) => {
    setQuery((prev) => ({ ...prev, type: val }))
  }

  return (
    <div className="searchBar">
      <div className="type">
        <ButtonGroup>
          {types.map((type) => (
            <Button
              key={type}
              size="large"
              color="primary"
              className="!rounded-b-none"
              onClick={() => switchType(type)}
              variant={query.type === type ? 'contained' : 'outlined'}
            >
              {type}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <form className="flex items-center flex-col md:flex-row">
        <TextField
          className="w-full"
          label="location"
          variant="filled"
          type="text"
          name="location"
        />
        <TextField
          className="w-full"
          label="minPrice"
          variant="filled"
          type="number"
          name="minPrice"
        />
        <TextField
          className="w-full"
          label="maxPrice"
          variant="filled"
          type="number"
          name="maxPrice"
        />
        <Button
          variant="contained"
          color="primary"
          className="h-[55px] !rounded-s-none w-full md:w-auto"
        >
          <span className="md:hidden">Search</span>
          <SearchIcon />
        </Button>
      </form>
    </div>
  )
}

export default SearchBar
