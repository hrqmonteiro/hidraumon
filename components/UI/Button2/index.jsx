import Link from "next/link";
import {MdKeyboardArrowRight} from "react-icons/md"

export default function Button2 (props) {
  return (
    
      <Link href={props.url}>
        <a className="effect-3"><button className="button-secondary"><span id="text">{props.text}</span> <MdKeyboardArrowRight/></button></a>
      </Link>
  )
}
