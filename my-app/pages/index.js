import Head from 'next/head'
import MarkdownEditor from '../components/footer'
import Calculator from '../components/jo'
import { Rnd } from 'react-rnd'

const showmenu = () =>{
  console.log('hi')
}

export default function Home() {
  const blog = () => {
    console.log('hi')
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full bg-black text-white">
        <div className="p-1 pl-4 text-sm w-24" onClick={showmenu()}>Start</div>
        <div className="w-40 bg-gray-800 p-1 pl-4 text-sm ml-8 text-white">Notepad</div>
        <div className="w-40 bg-gray-700 p-1 pl-4 text-sm text-white">Taschenrechner</div>
      </div>
      <main className=" bg-cover w-screen h-screen relative" style={{ backgroundImage: 'url(https://4kwallpapers.com/images/walls/thumbs_3t/1432.jpg)' }}>
        <div className="absolute left-0 bg-black w-24" id="menu" >
          <div className="text-white text-sm p-1 pl-4">Notepad</div>
          <div className="text-white text-sm p-1 pl-4">Taschenrechner</div>
        </div>
        <Rnd
          dragHandleclassName="handli"
          default={{
            x: 300,
            y: 200,
            width: 720,
            height: 550,
          }}
          style={{ zIndex: 999 }}
        >
          <div className="z-50 border-2 w-full h-full flex flex-col bg-blue-100" onClick={console.log('hi')}
          >

            <div className=" bg-gray-200 text-sm p-1 justify-between z-100 flex">
              <div>Menu</div>
              <div className="text-gray-500 handli">Notepad</div>
              <div className="flex">
                <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
                <div onClick={blog} className="mx-2 bg-green-300 w-4 h-4 rounded-full"></div>
                <div className="bg-red-300 w-4 h-4 rounded-full"></div>
              </div>
            </div>
            <MarkdownEditor className="flex-1 h-full bg-white w-full resize-none p-1 focus:outline-none"/>
          </div>
        </Rnd>

        <Rnd
          dragHandleclassName="handli"
          default={{
            x: 30,
            y: 20,
            width: 220,
            height: 250,
          }}
        >
          <div className="border-2 w-full h-full flex flex-col bg-blue-100">

            <div className=" bg-gray-200 text-sm p-1 justify-between z-100 flex">
              <div>Menu</div>
              <div className="text-gray-500 handli">Notepad</div>
              <div className="flex">
                <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
                <div onClick={blog} className="mx-2 bg-green-300 w-4 h-4 rounded-full"></div>
                <div className="bg-red-300 w-4 h-4 rounded-full"></div>
              </div>
            </div>
            <Calculator />
          </div>
        </Rnd>

      </main>
    </div>
  )
}
