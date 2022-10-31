import NavMenu from '../components/NavMenu';
import MainMenu from '../components/MainMenu';

export const Layout = ({ children }) => {
    return (
        <>
            <NavMenu />
            <MainMenu />
            <main className='max-w-[1320px] px-10 py-4 mx-auto flex flex-wrap justify-between'>{children}</main>
        </>
    )
}
