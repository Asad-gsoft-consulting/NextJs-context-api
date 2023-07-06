import Counter from "../components/counter.component";
import ListUsers from "../components/users.component";
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle.jsx"
import './globals.css'

export default function Home() {
  return (
   
    <main style={{maxWidth: 1200, marginInline: "auto", padding: 20}}>
        <DarkModeToggle />
        <Counter />
        <ListUsers />
      </main>

  );
}
