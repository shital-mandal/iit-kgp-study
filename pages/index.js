import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Study Material Center</h1>
      <ul>
        <li>
          <Link href="/mechanical">Mechanical Department</Link>
        </li>
      </ul>
    </div>
  );
}

