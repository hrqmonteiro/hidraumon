import Link from "next/link";

export default function Button (props) {
  return (
    
      <Link href={props.url}>
        <a className="effect-3"><button className="button-primary">{props.text}</button></a>
      </Link>
  )
}
