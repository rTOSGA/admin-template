import Link from "next/link";

interface MenuItemProps {
  url?: string;
  texto: string;
  icon: any;
  className?: string
  onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
  function renderizarLink() {
    return (
      <a className={`flex flex-col justify-center items-center h-24 w-24 dark:text-gray-200 ${props.className}`}>
        {props.icon}
        <span className={`text-xs font-light `}>
          {props.texto}
        </span>
      </a>
    );
  }

  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer`}>
      {props.url ? (
        <Link href={props.url}>{renderizarLink()}</Link>
      ) : (
        renderizarLink()
      )}
    </li>
  );
}
