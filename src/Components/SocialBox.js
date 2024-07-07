function SocialBox(props){
    return(
        <ul>
            <a href={props.data.l1[0]} target="blank"><li>{props.data.l1[1]}</li></a>
            <a href={props.data.l2[0]} target="blank"><li>{props.data.l2[1]}</li></a>
            <a href={props.data.l3[0]} target="blank"><li>{props.data.l3[1]}</li></a>
            <a href={props.data.l4[0]} target="blank"><li>{props.data.l4[1]}</li></a>
            <a href={props.data.l5[0]} target="blank"><li>{props.data.l5[1]}</li></a>
        </ul>
    )
}
export default SocialBox;