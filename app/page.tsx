import Image from "next/image";
import { Helo } from './components/helo';
import { About } from './components/about';
import { Works } from './components/works';

export default function Home() {
  return (
    <main>
      <Helo />
      <About />
      <Works />
    </main>
  )
}
