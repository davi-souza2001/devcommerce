import Image from 'next/image';
import Logo from '../../public/logo.svg';

export function Welcome() {
    return(
        <>
			<p className="uppercase font-bold">Bem-vindo ao</p>

            <Image src={Logo} alt='Logo' height={500} width={500} />
        </>
    )
}