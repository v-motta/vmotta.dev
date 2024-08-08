export function Footer() {
  return (
    <footer className="mx-4 flex justify-center border-t border-t-zinc-300 py-4 md:h-16 md:py-0">
      <p className="content-center text-center font-mono lg:text-start">
        &copy; {new Date().getFullYear()} Vinicius Motta. All rights reserved.
      </p>
    </footer>
  )
}
