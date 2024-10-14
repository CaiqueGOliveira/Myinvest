import CabecalhoPrincipal from "../CabecalhoPrincipal";


type MainProps = {
    children: React.ReactNode;
    titulo: string;
}


const MainContainer = ({ children, titulo }: MainProps) => {
    return (
        <main className='w-[85vw] h-screen bg-neutral-900 px-14 pb-8 flex flex-col items-center'>
            <CabecalhoPrincipal titulo={titulo}/>
            {children}
        </main>
    )
}

export default MainContainer;