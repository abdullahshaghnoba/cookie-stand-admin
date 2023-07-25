import { useAuth } from "../contexts/auth"

export default function Header() {
 const {logout, user } = useAuth();
    return (
      <header className="flex items-center justify-around pl-10 bg-green-500 h-36 ">
        <h1 className="text-5xl font-bold">Cookie Stand Admin</h1><h1 className="p-2 text-white bg-green-700 rounded">{user.username}</h1>
        <button className="p-2 text-white bg-green-700 rounded" onClick={() => logout()}>Sign Out</button>
      </header>
    )
  }