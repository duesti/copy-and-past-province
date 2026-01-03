import Link from "next/link"

export function Header() {
  return (
    <header className="mb-6">
      <section className="flex gap-2">
        <p className="font-mono opacity-50">По вопросам / идеям - </p>
        <Link 
          href="https://vk.com/vito_s"
          className="underline opacity-70 font-mono"
        >
          @vito_s
        </Link>
      </section>
    </header>
  )
}