import { listData } from '../../libs'
import Filter from '../filter'
import Card from '../card'
import Map from '../map'

const List = () => {
  const data = listData

  return (
    <div className="container-lg h-full flex">
      <div className="w-[60%]">
        <div className="pr-12 flex flex-col gap-4 h-full overflow-y-scroll pb-4">
          <div className="sticky top-0 bg-white pb-4 drop-shadow-sm z-30">
            <Filter />
          </div>
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="flex-[40%]">
        <Map items={data} />
      </div>
    </div>
  )
}

export default List
