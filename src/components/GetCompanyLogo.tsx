import Google from '@/assets/google.png'
import Amazon from '@/assets/amazon.png'
import LinkedIn from '@/assets/linkedin.png';
import Microsoft from '@/assets/microsoft.png';
import TED from '@/assets/ted.png';
import Uniliver from '@/assets/uniliver.png';
import Apple from '@/assets/apple.png';

import Image from 'next/image';
export const GetCompanyLogo = ({ companyName }: { companyName: string }) => {
    companyName = companyName.toLowerCase();
    switch (companyName) {
        case 'google':
            return <Image src={Google} alt="Google"  className='h-[14px] w-[14px]'/>;
        case 'amazon':
            return <Image src={Amazon} alt="Amazon"  className='h-[14px] w-[14px]'/>;
        case 'linkedin':
            return <Image src={LinkedIn} alt="LinkedIn"  className='h-[14px] w-[14px]'/>;
        case 'microsoft':
            return <Image src={Microsoft} alt="Microsoft"  className='h-[14px] w-[14px]'/>;
        case 'ted':
            return <Image src={TED} alt="TED"  className='h-[14px] w-[14px]'/>;
        case 'unilever':
            return <Image src={Uniliver} alt="Uniliver"  className='h-[14px] w-[14px]'/>;
        case 'apple':
            return <Image src={Apple} alt="Apple"  className='h-[14px] w-[14px]'/>;
            default:
            return null;
    }
};   