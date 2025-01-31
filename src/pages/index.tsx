import dynamic from 'next/dynamic';
const RemoteComponent = dynamic(() => import('remoteApp/RemoteComponent'), {
 ssr: false,
 });
export default function Home() {
 return (
 <div>
 <h1>Host Application</h1>
 <RemoteComponent />
 </div>
 );
 }