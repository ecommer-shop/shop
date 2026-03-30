import logoDark from '../../public/PNG-05.png';
import logoLight from '../../public/PNG-06-1.PNG';

export function LoginLogo() {
    return (
        <>
            {/* Logo blanco – modo oscuro */}
            <img
                src={logoDark}
                alt="Ecommer"
                className="hidden dark:block h-30 w-auto"
            />
            {/* Logo negro – modo claro */}
            <img
                src={logoLight}
                alt="Ecommer"
                className="block dark:hidden h-30 w-auto"
            />
        </>
    );
}
