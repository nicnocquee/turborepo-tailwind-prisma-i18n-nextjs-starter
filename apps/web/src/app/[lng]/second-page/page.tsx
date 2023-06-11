import Link from "i18n/link/server";

export default function Page({ params: { lng } }) {
  return (
    <>
      <h1>Hi from second page!</h1>
      <Link lng={lng} href={`/`} className="underline text-brandblue">
        back
      </Link>
    </>
  );
}
