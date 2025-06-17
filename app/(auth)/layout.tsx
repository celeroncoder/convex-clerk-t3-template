export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex h-screen items-center justify-center">
      {children}
    </main>
  );
}
