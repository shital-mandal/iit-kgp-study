import Link from 'next/link';

export default function Mechanical() {
  return (
    <div>
      <h1>Mechanical Department</h1>
      <ul>
        <li>
          <Link href="/mechanical/semester1">Semester 1</Link>
        </li>
      </ul>
    </div>
  );
}
