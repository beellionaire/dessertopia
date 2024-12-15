export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed right-0 top-10 z-10 h-screen w-60 bg-slate-800">
        <ul className="text-amber-600 p-5">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
