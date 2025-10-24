import Link from "next/link";

export default function Header(){
    return(
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>About Me</Link>
                </li>
            </ul>
        </nav>
    )
}