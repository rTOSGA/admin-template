import { IconHome, IconConfig, IconBell, IconExit, IconWarning } from "../icons";
import MenuItem from "./MenuItem";
import Logo from "./Logo";
import useAuth from "../../data/hook/useAuth";

export default function MenuLateral(props) {
  const {logout} = useAuth()

  return (
    <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 ">
      <div
        className={` flex flex-col items-center justify-center h-24 w-24 bg-gradient-to-r from-gray-500 to-gray-900`}
      >
        <Logo></Logo>
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Inicio" icon={IconHome}></MenuItem>
        <MenuItem
          url="/ajustes"
          texto="Configurações"
          icon={IconConfig}
        ></MenuItem>
        <MenuItem
          url="/notificacoes"
          texto="Novidades"
          icon={IconBell}
        ></MenuItem>
      </ul>
      <ul>
        <MenuItem
          texto="Sair"
          icon={IconExit}
          onClick={logout}
          className={`text-red-600 dark:text-red-400 dark:hover:text-white hover:bg-red-400 hover:text-white`}
        ></MenuItem>
      </ul>
    </aside>
  );
}
