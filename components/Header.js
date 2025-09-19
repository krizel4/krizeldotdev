import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-12 mobile:pt-16 tablet:pt-20 pb-8 mobile:pb-10 tablet:pb-12">
      <div className="w-8 h-8 mobile:w-10 mobile:h-10 tablet:w-12 tablet:h-12 rounded-full block mx-auto mb-3 mobile:mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-lg mobile:text-xl tablet:text-2xl dark:text-white text-center" style={{ fontFamily: 'moret, serif' }}>
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
