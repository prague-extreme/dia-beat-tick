import Link from "next/link"


function Navbar() {
  return (
    <div className="flex bg-blue-800 border-b-2 border-blue-500 text-2xl p-3 px-10 font-bold hover:text-green-300 transition justify-between">
      <Link href="/">DiaBeatTick✓</Link> 
      <Link href="https://www.linkedin.com/in/ayush-verma-37622320b/">Contact</Link> 
    </div>
  )
}

export default Navbar
