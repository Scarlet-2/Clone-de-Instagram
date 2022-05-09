import React from "react";
import "./Post.css";

function Post({userphoto, username, caption, imageUrl }) {
  return (
    <div className="post caixaPost">
      <div className="post_header">
        <div className="flex-display">
          <img className="imagemPerfil" src={userphoto}/>
          <h3>{username}</h3>
        </div>
        
        <div>
          <button><img src="https://img.icons8.com/material-outlined/24/000000/more.png" alt=" "/></button>
        </div>
      </div>

      <img className="post_image" src={imageUrl} alt=" "/>
      <div className="interacoes">
        <div>
          <button><img src="https://cdn-icons-png.flaticon.com/512/151/151910.png" className="botoesLike pl-3" alt=" "/></button>
          <button><img src="https://cdn-icons.flaticon.com/png/512/3031/premium/3031126.png?token=exp=1652136543~hmac=c759cfb783ad348c967958f1e19bd4c4" className="botoesLike pl-3" alt=" "/></button>
          <button><img src="https://cdn-icons.flaticon.com/png/512/2550/premium/2550207.png?token=exp=1652135872~hmac=29a7dab8562e8bbefd5cd01a16f2e2ed" className="botoesSend pl-3" alt=" "/></button>
        </div>
      
        <div className="marcador">
          <button><img src="https://cdn-icons.flaticon.com/png/512/5662/premium/5662990.png?token=exp=1652136876~hmac=55e8e8b369b3ff19f1b29f25b35c8766" alt=" "/></button>
        </div>
      </div>
      
      

      <div className="post_text">
        <strong>{username}: </strong> 
        {caption}
      </div>

      {/* Parte feita por Diego */}
      <p className="data_post">HÁ {Math.round(Math.random() * (23 - 2) + 2)} HORAS</p>
      <div className="caixa-comentario">
        <button>
        <svg aria-label="Emoji" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
        </button>
        
        <input type="text" className="comentario-texto" placeholder="Adicione um comentário..."></input>
        <button className="publicar">Publicar</button>
      {/* Parte feita por Diego */}

      </div>
    </div>
  );
}

export default Post;
