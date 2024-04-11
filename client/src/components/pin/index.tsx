import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'

function Pin({ item }: { item: any }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex gap-5">
          <img
            src={item.img}
            alt=""
            className="w-16 h-12 object-cover rounded-lg bg-gray-300"
          />
          <div className="flex flex-col gap-2">
            <Link to={`/${item.id}`} className="">
              {item.title}
            </Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin
