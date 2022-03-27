import MenuLateral from "./MenuLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import useAppData from "../../data/hook/useAppData";
import ForcarAutenticacao from "../../auth/ForcarAutenticacao";

interface LayoutProps {
  titulo: string;
  subtitutlo: string;
  color?: string
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const {tema, alternarTema} = useAppData()

  return (
    <ForcarAutenticacao>
    <div className={`${tema} flex h-screen w-screen `}>
      <MenuLateral></MenuLateral>
      <div className={`flex flex-col w-full p-7 ${props.color} dark:bg-slate-800`}>
        <Cabecalho
          titulo={props.titulo}
          subtitutlo={props.subtitutlo}
        ></Cabecalho>
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
    </ForcarAutenticacao>
  );
}
