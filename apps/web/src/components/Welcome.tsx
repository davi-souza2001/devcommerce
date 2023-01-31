import Image from 'next/image'
import Logo from '../../public/logo.svg'

export function Welcome() {
    return(
        <>
			<p className="uppercase font-bold">Bem-vindo ao</p>

            <div className='hidden md:flex'>
                <Image src={Logo} alt='Logo' height={500} width={500} />
            </div>

            <div className='flex md:hidden'>
                <Image src={Logo} alt='Logo' height={150} width={150} />
            </div>
        </>
    )
}
