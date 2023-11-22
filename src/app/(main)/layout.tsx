import Sidebar from '@/components/Sidebar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className='md:pl-60 pt-36'>
        <div>{children}</div>
      </main>
      <Sidebar className='translate-x-0' />
    </>
  );
}
