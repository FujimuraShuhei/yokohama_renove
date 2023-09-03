import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../Header/Header.module.css';


const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="index.html">
          <Image
            width={100}
            height={100}
            src="images/logo.jpg"
            alt="YOKOHAMA RENOVEのロゴ"
          />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="#">ホーム</Link>
          </li>
          <li>
            <Link href="#">リノベの特徴</Link>
          </li>
          <li>
            <Link href="#">私たちのお約束</Link>
          </li>
          <li>
            <Link href="#">リノベ実績</Link>
          </li>
          <li>
            <Link href="#">資料請求</Link>
          </li>
          <li>
            <Link href="#">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
