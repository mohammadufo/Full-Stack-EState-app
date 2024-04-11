import SearchBar from '../searchbar'
import CountUp from 'react-countup'

const Home = () => {
  return (
    <div className="flex home items-center justify-between lg:container-lg px-4 lg:px-0">
      <div className="h-full w-full md:w-[60%]">
        <div className="md:pr-24 flex flex-col justify-center gap-8 sm:gap-12 h-full">
          <h1 className=" md:text-[64px] ">
            Find Real Estate & Get Your Dream Place
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <SearchBar />
          <div className="flex justify-between">
            <div className="box">
              <CountUp start={0} end={16}>
                {({ countUpRef }) => (
                  <span
                    className="text-[20px] md:text-[36px]"
                    ref={countUpRef}
                  />
                )}
              </CountUp>{' '}
              +
              <h2 className="text-sm md:text-[20px] font-light">
                Years of Experience
              </h2>
            </div>
            <div className="box">
              <CountUp start={0} end={200}>
                {({ countUpRef }) => (
                  <span
                    className="text-[20px] md:text-[36px]"
                    ref={countUpRef}
                  />
                )}
              </CountUp>
              <h2 className="text-sm md:text-[20px] font-light">
                Award Gained
              </h2>
            </div>
            <div className="box">
              <CountUp start={0} end={2000}>
                {({ countUpRef }) => (
                  <span
                    className="text-[20px] md:text-[36px]"
                    ref={countUpRef}
                  />
                )}
              </CountUp>
              +
              <h2 className="text-sm md:text-[20px] font-light">
                Property Ready
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex h-full w-[40%] bg-bg  items-center relative">
        <img
          src="/bg.png"
          alt=""
          className="md:w-[105%] lg:w-[115%] absolute right-0"
        />
      </div>
    </div>
  )
}

export default Home
