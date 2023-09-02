
import Link from 'next/link'
//HOME PAGE
export default async function Page() {
    return (
        <div>
            <div>
                <h1>Slot Tracker</h1>
            </div>
            <div>
            </div>
            <Link href ="/login">Log In</Link>
            <div>
                <p style={{display: 'inline-block'}}>Don't have a account? Sign up today!</p>
                <Link href ="/signup">Sign up</Link>
            </div>
        </div>
    )
}

