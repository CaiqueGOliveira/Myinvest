import CabecalhoPrincipal from "../CabecalhoPrincipal";


type MainProps = {
    children: React.ReactNode;
    titulo: string;
    component?: React.ReactNode;
}


const MainContainer = ({ children, titulo, component }: MainProps) => {
    return (
        <main className='w-[85vw] h-screen bg-neutral-900 px-14 pb-8 flex flex-col items-center'>
            <CabecalhoPrincipal titulo={titulo}>
                {component}
            </CabecalhoPrincipal>

            {children}
        </main>
    )
}

export default MainContainer;