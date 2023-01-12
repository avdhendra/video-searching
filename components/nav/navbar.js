import { useEffect, useState } from "react";
import styles from "./navbar.module.css"
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    const [showDropDown, setShowDropDown] = useState(false);

    const [username, setUserName] = useState("ho")
    const [didToken, setDidToken] = useState("")
    const router = useRouter();

    const handleOnClickHome = (e) => {
        e.preventDefault();
        router.push("/");
    }
    const handleOnClickMyList = (e) => { 
        e.preventDefault();
        router.push("/browser/my-list");
    }
    const handleShowDropdown = (e) => {
        e.preventDefault();
        setShowDropDown(!showDropDown);
    }
    const handleSignout = async (e) => {
         e.preventDefault()
    }
    return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
          
            <div className={styles.logoWrapper}>
              <Image
                src="/static/netflix.svg"
                alt="Netflix logo"
                width="128"
                height="34"
              />
            </div>
        
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{username}</p>
              {/** Expand more icon */}
              <Image
                src={"/static/expand_more.svg"}
                alt="Expand dropdown"
                width="24"
                height="24"
              />
            </button>

            {showDropDown && (
              <div className={styles.navDropdown}>
                <div>
                  <a className={styles.linkName} onClick={handleSignout}>
                    Sign out
                  </a>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
export default NavBar;