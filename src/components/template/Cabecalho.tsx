import Titulo from "./Titulo";
import BotaoTema from "./BotaoTema";
import AvatarUsuario from "./AvatarUsuario";
import useAppData from "../../data/hook/useAppData";

interface CabecalhoProps {
  titulo: string;
  subtitutlo: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  const { tema, alternarTema } = useAppData();

  return (
    <div className={`flex`}>
      <Titulo titulo={props.titulo} subtitutlo={props.subtitutlo}></Titulo>
      <div className={`flex flex-grow justify-end items-center`}>
        <BotaoTema tema="dark" alternarTema={alternarTema}></BotaoTema>
        <AvatarUsuario className="ml-3"></AvatarUsuario>
      </div>
    </div>
  );
}
