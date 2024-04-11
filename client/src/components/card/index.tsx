import { Link } from 'react-router-dom'
import ChatIcon from '@mui/icons-material/Chat'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { Chip, IconButton, ListItemButton } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import BedIcon from '@mui/icons-material/Bed'
import BathtubIcon from '@mui/icons-material/Bathtub'

function Card({ item }: { item: any }) {
  return (
    <div className="flex gap-5 w-full cursor-pointer hover:-translate-y-2 hover:bg-gray-100 rounded-md p-4 transition-all">
      <Link to={`/${item.id}`} className="w-[40%] h-52">
        <img
          src={item.img}
          alt=""
          className="w-full h-full bg-slate-200 object-cover rounded-lg"
        />
      </Link>
      <div className="w-[60%] flex flex-col justify-between">
        <h2 className="text-[20px] font-semibold  w-full truncate">
          <Link className="" to={`/${item.id}`}>
            {item.title}
          </Link>
        </h2>
        <div className="flex items-center gap-1 text-gray-400">
          <LocationOnIcon fontSize="small" />
          <span className="text-sm">{item.address}</span>
        </div>
        <p className="text-[20px] p-1 bg-primary/35 rounded w-fit">
          $ {item.price}
        </p>
        <div className="w-full flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Chip icon={<BedIcon />} label={`${item.bedroom} bedroom`} />
            <Chip icon={<BathtubIcon />} label={`${item.bathroom} bathroom`} />
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              color="primary"
              size="small"
              className="ring-1 ring-primary "
            >
              <ChatIcon />
            </IconButton>

            <IconButton
              color="primary"
              size="small"
              className="ring-1 ring-primary "
            >
              <BookmarkIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
