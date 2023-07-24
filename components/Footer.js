import {cities} from '../Data'
export default function Footer() {
    return (
      <footer className="flex flex-col items-start pl-10 bg-green-500 h-36">
        <h1 className="p-2 text-2xl">&copy;2023</h1>
        <h1 className="p-2 text-2xl">{cities.length} Locations World Wide</h1>
      </footer>
    )
  }