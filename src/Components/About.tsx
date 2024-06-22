import Image from "next/image";
import img from '../Assets/Startup business landing page, isometric rocket.png';


const About: React.FC = () => {
  return (
    <main className="mx-28 py-28">
      <div className='text-4xl font-anton capitalize font-semibold text-center'>
        why this platform
      </div>
      <div className="pt-10">
      <h1 className='text-2xl font-semibold'>Motive</h1>
      <p className='text-2xl font-light text-justify text-[#EEEEEE] pt-4'>SeekIt is dedicated to bridging the gap between lost items and their rightful owners. Our mission is to create a community-driven platform where people can easily report and find lost possessions, ensuring valuable items are returned to their owners swiftly and securely.</p>
      </div>
      <div className='grid grid-cols-2 mt-10'>
        <div>
          <Image src={img} alt="Image"/>
        </div>
        <div className=''>
        <div className='pt-10'>
        <h1 className='text-2xl font-semibold'>Report Lost Items</h1>
        <p className='font-light text-[#EEEEEE] pt-2'>Users can quickly create a report for their lost items, including descriptions, photos, and the last known location.</p>
        </div>
        <div className='pt-10'>
          <h1 className='text-2xl font-semibold'>Community Assistance</h1>
          <p className='font-light text-[#EEEEEE] pt-2'>The platform leverages the power of community by allowing users to browse reports of found items and match them with the reported lost items.</p>
        </div>
        <div className='pt-10'>
          <h1 className='text-2xl font-semibold'>Intelligent Matching</h1>
          <p className='font-light text-[#EEEEEE] pt-2'>SeekIt uses advanced algorithms to match lost items with found items based on descriptions, photos, and location data.</p>
        </div>
        <div className='pt-10'>
          <h1 className='text-2xl font-semibold'>Secure Communication</h1>
          <p className='font-light text-[#EEEEEE] pt-2'>Once a match is identified, SeekIt facilitates secure communication between the finder and the owner to arrange for the item's return.</p>
        </div>
        <div className='pt-10'>
          <h1 className='text-2xl font-semibold'>Reward System</h1>
          <p className='font-light text-[#EEEEEE] pt-2'>To encourage community participation, SeekIt includes a reward system where users can offer and receive rewards for returning lost items.</p>
        </div>
        </div>
      </div>
    </main>
  );
}

export default About;
