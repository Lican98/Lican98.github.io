function Card (props) {
    return(
        <div class="card" >
        <img class="imagem" src={props.imgSrc} alt="..." />
        <div class="card-b">
         {props.children}
        </div>
      </div>

    )
}

export default Card