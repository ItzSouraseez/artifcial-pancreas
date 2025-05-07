import React from "react";
import Styles from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={Styles.navBar}>
      <h1 className={Styles.devName}>©️ Projeckt Bits, 2025</h1>
      <div className={Styles.links}>
        <h2><Link href="#construction">Construction</Link></h2>
        <h2><Link href="#working">Working</Link></h2>
      </div>
    </nav>
  );
}
