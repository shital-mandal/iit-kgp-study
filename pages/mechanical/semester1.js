import Link from 'next/link';

export default function Semester1() {
  return (
    <div>
      <h1>Semester 1</h1>
      <ul>
        <li>
          {/* Example of linking to a material */}
          <Link href="/mechanical/semester1/material1">Material 1</Link>
        </li>
        <li>
          {/* Example of linking to another material */}
          <Link href="/mechanical/semester1/material2">Material 2</Link>
        </li>
      </ul>
    </div>
  );
}
