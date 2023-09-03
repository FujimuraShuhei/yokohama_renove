import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../Header/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <h1>
          <Link href="#">
            <Image
              width={200}
              height={100}
              src="/header_logo.png"
              alt="YOKOHAMA RENOVEのロゴ"
            />
          </Link>
        </h1>
        <ul className={styles.header__ul}>
          <li className={styles.header__li}>
            <Link href="#">ホーム</Link>
          </li>
          <li className={styles.header__li}>
            <Link href="./service">リノベの特徴</Link>
          </li>
          <li className={styles.header__li}>
            <Link href="#">私たちのお約束</Link>
          </li>
          <li className={styles.header__li}>
            <Link href="#">リノベ実績</Link>
          </li>
          <li className={styles.header__li}>
            <Link href="#">資料請求</Link>
          </li>
          <li className={styles.header__li_02}>
            <Link href="#">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
