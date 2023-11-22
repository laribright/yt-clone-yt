import VideoIdNav from '@/components/VideoIdNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VideoIdNav />
      {children}
    </>
  );
}
