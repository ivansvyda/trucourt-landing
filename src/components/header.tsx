import Link from 'next/link';

export const Header = () => {
  return (
    <header className='container py-10'>
      <nav className='flex justify-between items-center'>
        <Link href='/' className='font-bold text-3xl tracking-tighter'>
          TruCourt
        </Link>
        <ul className='flex items-center gap-8'>
          <li className='font-bold text-lg'>
            <Link href='/about'>about</Link>
          </li>
          <li className='font-bold text-lg'>
            <Link href='/trainer'>trainer</Link>
          </li>
          <li className='font-bold text-lg'>
            <Link href='/classes'>classes</Link>
          </li>
        </ul>
        <div className='flex gap-8 items-center'>
          <Link href='/contacts' className='font-semibold text-lg'>
            contacts
          </Link>
          <Link
            href='/'
            className='text-white font-semibold text-lg bg-primary px-5 py-2 rounded-full'
          >
            get started
          </Link>
        </div>
      </nav>
    </header>
  );
};
