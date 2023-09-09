import React from 'react';
import styles from '../About/About.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <section className={styles.section_about}>
      <div className={styles.section_about_ttl}>
        <h2>MESSAGE</h2>
        <p>私たちから伝えたいこと</p>
      </div>
      <div className={styles.section_about_2columnBox}>
        <div className={styles.section_about_textBox}>
          <h3>まさに住みたかった！</h3>
          <h3>と思える理想の家に</h3>
          <p>
            どこに住んでいてもなかなか「ここに住みたい。」が見つからないお客様に対して理想とは？の言語化をしていき、お客様が本当に住みたい家を改装する前にシミュレーションして未来を見せた上で一緒に創りあげていきます。
          </p>
        </div>
        <Image
          width={800}
          height={500}
          src="/section_about01.jpg"
          alt="ここが住みたかった！画像"
        />
      </div>
      <div className={styles.section_about_2columnBox}>
        <Image
          width={800}
          height={500}
          src="/section_about02.jpg"
          alt="ここが住みたかった！画像"
          className={styles.section_about_2columnBox_img}
        />
        <div className={styles.section_about_textBox}>
          <h3>古すぎかな？</h3>
          <h3>と思っても大丈夫。</h3>
          <p>
            どんな家でもYOKOHAMARENOVEなら大変身することができます。
            <br></br>
            みっちりとヒアリングを重ね、お客様の家の耐久力やできることを忠実に再現できるのでご安心ください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
