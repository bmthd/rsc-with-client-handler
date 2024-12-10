import { ClientButton, handleClick } from "./_client";

export default function Home() {
  return (
    <div>
      <h1 >Server Component</h1>
      <ClientButton />
      <button onClick={handleClick}>button from server</button>
    </div>
  );
}
