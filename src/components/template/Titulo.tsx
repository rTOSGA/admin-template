interface TituloProps {
    titulo: string
    subtitutlo: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div>
            <h1 className={`text-4xl font-bold text-gray-900 dark:text-gray-100`}>{props.titulo}</h1>
            <h2 className={`font-light text-sm text-gray-600 dark:text-gray-300`}>{props.subtitutlo}</h2>
        </div>
    )
}