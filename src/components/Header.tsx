import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"

export default async function Header() {
    const session = await getServerSession(authOptions)
    return(
        <header className="bg-gray-200 p-4">
          <a href="" className='logo'>Trello</a>
          <div>
            {session && (
                <>
                    Hello, {session.user?.name}
                    <button>Logout</button>
                </>
            )}
          </div>
        </header>
    )
}