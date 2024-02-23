import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/store">
            <li>Store</li>
          </Link>
          <Link href="/store/telefono">
            <li>Category: teléfono</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
