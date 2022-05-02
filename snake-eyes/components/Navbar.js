import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Layout.module.css";
import styles2 from "../styles/Home.module.css";
export default function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header className={styles2.header}>
        <nav className={styles.navbar}>
          <Link href="/">
            <a className={styles.navlogo}>
              <img
                className={styles2.headerLogo}
                src="/finallogoWithSE.png"
              ></img>
            </a>
          </Link>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href="/about">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  About
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/FAQ">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  FAQ
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/Buy">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Buy
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/road-map">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Road Map
                </a>
              </Link>
            </li>
          </ul>
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
      {children}
      {/* {footer} */}
    </>
  );
}
