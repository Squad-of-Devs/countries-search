import Head from "next/head";
import styles from "@/styles/Home.module.css";
import CountryCard from "@/src/components/country-card/CountryCard";
import useFetch from "@/src/hooks/useFetch";
import SearchBarComponent from "@/src/components/search-bar/SearchBar";

export default function Home() {

  interface ICountry {
    name: string,
    flag: string,
    population: number,
    region: string,
    capital: string

  }

  const { data, isFetching } = useFetch<Array<ICountry>>('http://localhost:3000/api/countries')

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <SearchBarComponent />
        { data?.map((country) => {
          return (
            <CountryCard country={country}/>
          )
        })}
      </main>
    </>
  );
}
