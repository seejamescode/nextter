import Link from "next/link";

const Nav = () => (
  <div>
    <Link as={`/`} href={`/`}>
      <h1>
        <a href="/" onClick={e => e.target.blur()}>
          Nextter
        </a>
      </h1>
    </Link>
    <a
      href="https://twitter.com/seejamescode"
      rel="noopener noreferrer"
      target="_blank"
    >
      James Y Rauhut
    </a>
  </div>
);

export default Nav;
