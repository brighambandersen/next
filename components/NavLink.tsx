import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { href, children } = props;

  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`p-3 ${isActive ? 'text-blue-600' : 'text-black'}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
