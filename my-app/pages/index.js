import Head from 'next/head'
import Welcome from '../components/footer'
import { Rnd } from 'react-rnd'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="flex w-full bg-black text-white">
        <div class="p-1 pl-4 text-sm w-24" onclick="showmenu()">Start</div>
        <div class="w-40 bg-gray-800 p-1 pl-4 text-sm ml-8 text-white">Notepad</div>
        <div class="w-40 bg-gray-700 p-1 pl-4 text-sm text-white">Taschenrechner</div>
      </div>
      <main class=" bg-cover w-screen h-screen relative" style={{ backgroundImage: 'url(https://4kwallpapers.com/images/walls/thumbs_3t/1432.jpg)' }}>
        <div class="absolute left-0 bg-black w-24" id="menu" >
          <div class="text-white text-sm p-1 pl-4">Notepad</div>
          <div class="text-white text-sm p-1 pl-4">Taschenrechner</div>
        </div>

        <Rnd
          dragHandleClassName="handli"
          default={{
            x: 0,
            y: 0,
            width: 320,
            height: 250,
          }}
        >
          <div class="border-2 w-full h-full flex flex-col bg-blue-100">

            <div class=" bg-gray-200 text-sm p-1 justify-between z-100 flex">
              <div>Menu</div>
              <div class="text-gray-500 handli">Notepad</div>
              <div class="flex">
                <div class="bg-yellow-300 w-4 h-4 rounded-full"></div>
                <div class="mx-2 bg-green-300 w-4 h-4 rounded-full"></div>
                <div class="bg-red-300 w-4 h-4 rounded-full"></div>
              </div>
            </div>            <textarea class="flex-1 h-full bg-white w-full resize-none p-1 focus:outline-none">sdf</textarea>
          </div>
        </Rnd>
      </main>
    </div>
  )
}
