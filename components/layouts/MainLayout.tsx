import Head from "next/head";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - Manolo</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
