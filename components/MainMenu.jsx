import Image from 'next/future/image'
import promo from '../public/promo.jpg'

const MainMenu = () => {
    return (
        <div className="max-w-[1320px] mx-auto h-auto px-10 2xl:px-20 bg-white shadow-2xl flex justify-between items-center mt-10 border-2 border-gray-500">
            <div className="flex space-x-12 mx-auto items-center py-2">
                <div className="flex items-center flex-col">
                    <a className='active:text-[#00833e] active:fill-[#00833e] text-center cursor-pointer'>
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            className=''
                            xmlns="http://www.w3.org/2000/svg"><path d="M951.36 497.92A584 584 0 0 0 544 123.84a421.76 421.76 0 0 0-413.76 128 237.76 237.76 0 0 0-52.48 177.28C26.24 659.2 142.08 715.2 254.08 768a689.28 689.28 0 0 1 111.68 64 407.36 407.36 0 0 0 235.52 80.32 316.48 316.48 0 0 0 83.52-10.88c71.04-19.2 169.92-73.92 236.8-226.24h-1.6l2.88-3.52a197.12 197.12 0 0 0 28.48-173.76zM175.68 295.68a355.84 355.84 0 0 1 352-109.44 515.84 515.84 0 0 1 362.24 330.24 132.16 132.16 0 0 1-19.2 117.12 203.84 203.84 0 0 1-152.32 79.68c-69.76 7.36-104.96-15.36-163.52-53.12a789.76 789.76 0 0 0-309.44-128 146.24 146.24 0 0 1-103.36-102.4 174.08 174.08 0 0 1 33.6-134.08z m492.48 544a320 320 0 0 1-264.64-59.52 752.32 752.32 0 0 0-121.6-68.48C193.92 668.8 129.92 637.76 128 533.12a256 256 0 0 0 97.6 61.12h4.8a728.32 728.32 0 0 1 289.6 118.08c53.44 34.56 100.48 64 172.8 64a256 256 0 0 0 32 0 266.56 266.56 0 0 0 64-11.84 258.24 258.24 0 0 1-120.64 74.88z" /><path d="M390.08 484.16a121.92 121.92 0 1 0-121.92-121.92 122.24 122.24 0 0 0 121.92 121.92z m0-179.52a57.92 57.92 0 1 1-57.92 57.6 57.92 57.92 0 0 1 57.92-57.6z" /></svg>
                        <h3 className="font-bold text-lg font-abc">Beef</h3>
                    </a>
                </div>
                <div className="flex items-center flex-col">
                    <a className='active:text-[#00833e] active:fill-[#00833e] text-center cursor-pointer'>
                        <svg
                            width="60"
                            height="60"
                            viewBox="0 0 1024 1024"
                            className="fill-black stroke-black stroke-[15px]"
                            version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M942 619.8c-27.4-29.4-42.5-67.6-42.5-107.8s15.1-78.4 42.5-107.8c14.8-15.8 18.6-38 10-58-8.6-19.8-27.3-32.2-48.9-32.3h-0.9c-35.3 0-70 9.4-100.2 27.2-29.4 17.3-53.9 41.9-71.1 71.4-2.8 4.8-7.3 6-9.7 6.4-4.2 0.6-8.4-0.8-11.3-3.8-38.3-38.2-82.9-68.2-132.5-89.1-51.4-21.7-105.9-32.7-162.2-32.7-29.1 0-57.6 2.9-85.5 8.7l-1.1 0.3c-33.5 7.1-66 18.3-97.1 33.6-28.6 14.1-55.7 31.5-80.5 51.8l-0.2 0.2c-2.1 1.7-4.1 3.4-6.2 5.2-0.4 0.4-0.9 0.8-1.3 1.1l-4.5 3.9c-0.6 0.5-1.2 1.1-1.8 1.6-1.7 1.5-3.3 3-5 4.5-0.8 0.7-1.6 1.5-2.4 2.3-1 1-2.1 2-3.1 2.9-0.8 0.8-1.6 1.5-2.4 2.3l-4.5 4.5c-0.8 0.8-1.6 1.6-2.4 2.5-1 1.1-2.1 2.1-3.1 3.2-0.7 0.8-1.4 1.5-2.2 2.3l-4.5 4.8c-0.6 0.7-1.3 1.4-1.9 2.1-1.3 1.5-2.7 3-4 4.5-0.3 0.4-0.7 0.8-1 1.1-1.6 1.9-3.3 3.8-4.9 5.7-0.4 0.5-0.9 1-1.3 1.6-1.7 2-3.3 4-4.9 6-14.1 17.6-21.9 39.7-21.9 62.2s7.8 44.6 21.9 62.2c1.6 2 3.3 4 4.9 6 0.4 0.5 0.9 1 1.3 1.6 1.6 1.9 3.2 3.8 4.9 5.7 0.3 0.4 0.7 0.7 1 1.1 1.3 1.5 2.7 3 4 4.5 0.6 0.7 1.3 1.4 1.9 2.1 1.5 1.6 3 3.3 4.6 4.9 0.7 0.7 1.4 1.5 2.1 2.2 1 1.1 2.1 2.2 3.1 3.2l2.4 2.4c1.5 1.5 3 3 4.6 4.5 0.8 0.8 1.6 1.5 2.4 2.3 1 1 2.1 2 3.1 3 0.8 0.7 1.6 1.5 2.4 2.2 1.7 1.5 3.3 3 5 4.5 0.6 0.5 1.2 1.1 1.8 1.6l4.5 3.9c0.4 0.4 0.9 0.7 1.3 1.1 2.1 1.8 4.1 3.5 6.2 5.2 0.1 0 0.1 0.1 0.2 0.1 24.8 20.3 51.9 37.8 80.5 51.9 31.2 15.3 63.7 26.5 97.1 33.6l1.1 0.3c27.8 5.8 56.4 8.7 85.5 8.7 56.2 0 110.8-11 162.2-32.7 49.6-20.9 94.2-50.9 132.5-89.1 3-3 7.1-4.3 11.3-3.8 2.4 0.3 6.9 1.6 9.7 6.4 17.1 29.4 41.7 54.1 71.1 71.4 30.3 17.8 64.9 27.2 100.2 27.2h0.9c21.5-0.1 40.3-12.5 48.8-32.3 8.6-20.3 4.8-42.5-10-58.3z m-619.8 59.4c-76.3-19.4-145.4-62.9-196.3-123.6-0.3-0.4-0.6-0.7-0.9-1.1-1.5-1.8-2.9-3.5-4.4-5.3 0 0 0-0.1-0.1-0.1-11.5-14.4-15.5-32.4-11.9-49.4 0.3-1.6 0.8-3.2 1.2-4.8s1-3.2 1.6-4.7c2.2-5.4 5.2-10.6 9-15.4 1.5-1.8 3-3.7 4.5-5.5 0.3-0.3 0.6-0.7 0.9-1 50.9-60.7 120.1-104.2 196.3-123.6 54.7 38.3 87.1 100.2 87.1 167.2 0.1 67.2-32.3 129.1-87 167.3z m593.1-17.3c-1.1 2.5-4.4 8.2-12.3 8.2h-0.8c-28.2 0-55.8-7.5-80-21.7-23.5-13.8-43.1-33.5-56.8-57-8.3-14.3-22.6-23.7-39.1-25.9-16.6-2.2-32.9 3.3-44.8 15.1-71.3 71-165.9 110.2-266.4 110.2-13.9 0-27.8-0.8-41.4-2.3 47.9-45.6 75.5-108.9 75.5-176.6s-27.6-131-75.5-176.6c13.7-1.5 27.5-2.3 41.4-2.3 100.5 0 195.2 39.1 266.4 110.2 11.8 11.8 28.1 17.3 44.8 15.1 16.5-2.2 30.8-11.6 39.1-25.9 13.7-23.5 33.3-43.2 56.8-57 24.1-14.2 51.8-21.7 80-21.7h0.7c7.9 0 11.2 5.7 12.3 8.2s3 8.9-2.5 14.8c-34.3 36.8-53.2 84.8-53.2 135.1s18.9 98.3 53.2 135.1c5.6 6.1 3.7 12.5 2.6 15z" /><path d="M273 515.4m-30 0a30 30 0 1 0 60 0 30 30 0 1 0-60 0Z" /></svg>
                        <h3 className="font-bold text-lg font-abc mt-[-10px]" >Fish</h3>
                    </a>
                </div>
                <div className="flex items-center flex-col">
                    <a href="" className='active:text-[#00833e] active:fill-[#00833e] text-center cursor-pointer'>
                        <svg
                            className='fill-black stroke-[15px] stroke-neutral-800'
                            viewBox="0 0 1024 1024"
                            width="50"
                            height="50" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 870.4H426.666667c-91.511467 0-171.707733-30.173867-238.353067-89.668267C108.6464 709.393067 68.266667 618.1376 68.266667 509.44c0-7.7824 0.3072-15.581867 0.887466-23.364267 5.376-87.466667 40.362667-164.0448 103.953067-227.6352C242.670933 188.8768 327.9872 153.6 426.666667 153.6s183.995733 35.2768 253.559466 104.840533c44.151467 44.151467 74.8544 94.958933 91.392 151.159467h82.551467a17.066667 17.066667 0 0 1 17.066667 17.066667v98.833066c10.1888 6.690133 19.950933 14.711467 29.149866 23.944534C937.1136 586.120533 955.733333 630.954667 955.733333 682.666667c0 51.746133-18.653867 96.341333-55.4496 132.488533C864.341333 851.746133 819.746133 870.4 768 870.4zM426.666667 187.733333c-89.2928 0-166.485333 31.914667-229.4272 94.839467-57.5488 57.5488-89.1904 126.7712-94.020267 205.7216l-0.017067 0.238933c-0.529067 6.9632-0.802133 13.943467-0.802133 20.906667 0 99.959467 35.549867 180.3776 108.663467 245.845333C271.240533 809.0112 343.790933 836.266667 426.666667 836.266667h341.333333c42.8544 0 78.2336-14.7968 108.151467-45.243734C906.8032 760.900267 921.6 725.521067 921.6 682.666667c0-42.939733-14.830933-78.609067-45.346133-109.1072-1.655467-1.655467-3.310933-3.242667-5.000534-4.8128V597.333333c0 51.729067-18.653867 96.324267-55.4496 132.488534C779.861333 766.395733 735.2832 785.066667 683.52 785.066667c-51.694933 0-96.529067-18.619733-133.239467-55.3472-36.164267-36.1472-54.493867-80.6912-54.493866-132.386134 0-51.592533 18.295467-96.392533 54.408533-133.137066C587.093333 427.895467 631.620267 409.6 682.666667 409.6h53.213866c-15.5136-46.882133-42.308267-89.514667-79.786666-127.0272C593.152 219.648 515.959467 187.733333 426.666667 187.733333z m256 256c-42.376533 0-77.824 14.592-108.356267 44.5952-29.815467 30.344533-44.3904 66.065067-44.3904 109.0048 0 42.922667 14.557867 78.318933 44.4928 108.253867C604.910933 736.1024 640.597333 750.933333 683.52 750.933333c42.871467 0 78.2336-14.7968 108.1344-45.243733C822.3232 675.549867 837.12 640.170667 837.12 597.333333v-153.6H682.666667z" /><path d="M938.666667 460.8a33.9968 33.9968 0 0 1-24.132267-10.001067l-19.575467-19.575466a34.167467 34.167467 0 0 1-45.312-45.312l-20.4288-20.445867a34.133333 34.133333 0 1 1 48.264534-48.264533l85.333333 85.333333A34.133333 34.133333 0 0 1 938.666667 460.8z" /><path d="M866.7648 365.824l48.264533 48.2816-53.76 53.76-48.264533-48.298667z" /></svg>
                        <h3 className="font-bold text-lg font-abc">Rotisserie</h3>
                    </a>

                </div>
                <div className="flex items-center flex-col">
                    <a href="" className='active:text-[#00833e] active:fill-[#00833e] text-center cursor-pointer'>
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M969.94384 137.6c-46.4-27.2-80-28.8-108.8-19.2L768.34384 193.6h1.6c36.8-30.4 115.2-107.2 193.6-49.6 116.8 60.8 16 145.6 16 145.6s107.2-83.2-9.6-152zM856.34384 315.2c86.4 97.6-38.4 140.8-38.4 140.8s131.2-40 48-145.6c-51.2-64-97.6-62.4-142.4-48l-38.4 22.4c51.2-17.6 128-36.8 171.2 30.4zM489.94384 715.2s139.2-129.6 171.2-145.6c16-16 24-30.4 30.4-22.4s-8 16-8 22.4c0 0 24-16 24 8s-70.4 123.2-84.8 137.6c-16 16-84.8 38.4-116.8 46.4l-16-46.4" fill="#333333" /><path d="M365.806001 322.503932a16 24 75.977 1 0 46.569529-11.630946 16 24 75.977 1 0-46.569529 11.630946Z" fill="#333333" /><path d="M251.54384 912c-9.6 0-17.6 0-27.2-1.6-67.2 0-185.6-56-188.8-166.4-51.2-73.6-89.6-227.2 201.6-435.2l32-22.4-1.6 40c-1.6 24 4.8 92.8 38.4 116.8 17.6 12.8 43.2 12.8 75.2 1.6l76.8-27.2-56 59.2c-1.6 1.6-96 100.8-129.6 142.4 4.8 9.6 8 22.4 4.8 40 9.6 16 24 38.4 28.8 54.4 12.8 1.6 35.2 9.6 51.2 30.4 43.2-24 121.6-59.2 160-43.2 11.2 4.8 19.2 14.4 22.4 27.2 4.8 24-19.2 56-35.2 72-48 52.8-140.8 112-252.8 112z m-20.8-550.4C56.34384 494.4-2.85616 624 69.14384 724.8l4.8 8v6.4c0 88 99.2 134.4 152 134.4h1.6c99.2 9.6 187.2-38.4 236.8-84.8 27.2-25.6 36.8-46.4 38.4-52.8-14.4-6.4-78.4 11.2-140.8 49.6l-19.2 12.8-8-20.8c-9.6-25.6-33.6-25.6-36.8-25.6h-8l-19.2-19.2v-8c-1.6-6.4-14.4-30.4-27.2-51.2l-4.8-6.4 1.6-8c4.8-19.2-3.2-27.2-3.2-28.8l-14.4-11.2 12.8-12.8c14.4-19.2 65.6-73.6 102.4-113.6-19.2-1.6-35.2-6.4-51.2-17.6-38.4-27.2-51.2-78.4-56-113.6z" fill="#333333" /><path d="M246.74384 657.6c9.6 16 24 38.4 28.8 54.4 12.8 1.6 35.2 9.6 51.2 30.4 11.2-6.4 27.2-14.4 41.6-20.8-1.6-1.6-1.6-4.8-3.2-6.4-8-16 30.4-46.4 30.4-46.4-30.4-8-62.4 54.4-62.4 54.4-16-30.4 30.4-60.8 30.4-60.8-24-16-54.4 46.4-54.4 46.4-30.4-38.4 16-76.8 30.4-76.8 16 0 38.4 16 38.4 16 0-8-8-22.4-30.4-30.4-20.8-9.6-59.2 28.8-59.2 28.8-8-22.4 24-46.4 46.4-54.4s38.4 22.4 38.4 22.4c0-16-8-30.4-30.4-38.4s-46.4 16-46.4 16v-8l24-30.4 25.6-49.6c-30.4 33.6-80 84.8-102.4 112 1.6 11.2 4.8 24 3.2 41.6z" fill="#333333" /><path d="M246.74384 630.4l-1.6-6.4c-6.4-20.8-27.2-75.2-44.8-81.6l-3.2-1.6c-27.2-9.6-100.8-32-100.8-78.4v-1.6l1.6-1.6c11.2-11.2 102.4-116.8 126.4-116.8h4.8l-1.6 4.8c0 1.6-14.4 81.6 52.8 118.4 44.8 28.8 89.6 8 89.6 8l14.4-6.4-8 12.8c-3.2 4.8-86.4 115.2-124.8 145.6l-4.8 4.8zM105.94384 464c1.6 40 68.8 62.4 94.4 70.4l3.2 1.6c20.8 6.4 41.6 62.4 48 81.6 32-28.8 89.6-104 112-131.2-17.6 4.8-51.2 9.6-84.8-12.8-60.8-33.6-59.2-100.8-56-120-22.4 8-81.6 70.4-116.8 110.4z" fill="#333333" /><path d="M32.34384 704h-3.2l-1.6-3.2c0-1.6-46.4-118.4 48-211.2l4.8-3.2 1.6 6.4s8 22.4 52.8 43.2c11.2 4.8 22.4 9.6 32 14.4 38.4 14.4 73.6 28.8 86.4 72l8 43.2H256.34384c-1.6 0-100.8 8-131.2 22.4-27.2 14.4-75.2 16-92.8 16z m44.8-204.8c-78.4 81.6-48 179.2-43.2 196.8 17.6 0 62.4-1.6 88-14.4 27.2-14.4 108.8-20.8 129.6-22.4l-6.4-35.2c-11.2-38.4-44.8-52.8-81.6-67.2l-33.6-14.4c-33.6-17.6-48-33.6-52.8-43.2z" fill="#333333" /><path d="M179.54384 888c-1.6 0-104-32-128-140.8v-3.2l3.2-1.6S109.14384 720 131.54384 704c3.2-3.2 8-6.4 12.8-9.6 22.4-17.6 54.4-43.2 115.2-30.4h1.6l1.6 1.6c3.2 4.8 32 48 32 64v1.6l-1.6 1.6s-46.4 38.4-52.8 59.2c-17.6 44.8-38.4 96-60.8 96z m-120-139.2c22.4 97.6 112 129.6 120 131.2 9.6 0 25.6-17.6 49.6-89.6 8-22.4 46.4-54.4 54.4-62.4-1.6-12.8-20.8-43.2-28.8-56-56-11.2-84.8 11.2-107.2 28.8-4.8 3.2-8 6.4-12.8 9.6-20.8 14.4-64 33.6-75.2 38.4z" fill="#333333" /><path d="M267.54384 899.2c-16 0-32-3.2-43.2-11.2l-3.2-3.2 3.2-3.2s8-8 22.4-36.8c4.8-9.6 8-24 9.6-38.4 6.4-33.6 12.8-72 46.4-78.4h3.2c1.6 0 49.6 16 49.6 41.6v3.2c-1.6 1.6-36.8 51.2 14.4 94.4l4.8 3.2-4.8 3.2c-6.4 0-57.6 25.6-102.4 25.6z m-36.8-16c38.4 20.8 107.2-6.4 126.4-16-46.4-43.2-17.6-91.2-12.8-99.2-1.6-16-30.4-28.8-43.2-33.6-28.8 4.8-33.6 40-40 72-3.2 16-4.8 30.4-11.2 41.6-8 19.2-14.4 30.4-19.2 35.2zM581.14384 300.8l-70.4 40 8 4.8c-19.2 8-32 14.4-36.8 19.2-9.6 9.6-107.2 89.6-150.4 112-11.2 4.8-27.2 1.6-41.6-11.2-24-20.8-43.2-65.6-25.6-128 20.8-12.8 92.8-54.4 153.6-65.6 1.6 0 4.8-1.6 6.4-1.6l-27.2 14.4 65.6-4.8 1.6-3.2s3.2 0 8 1.6l27.2-1.6c19.2-1.6 86.4-8 144-16l-22.4 19.2h-1.6c25.6-6.4 54.4-17.6 80-30.4 41.6-22.4 72-65.6 115.2-80l40-33.6-148.8 72c-12.8 6.4-67.2 14.4-124.8 20.8l-12.8-28.8c-22.4 8-81.6 19.2-156.8 33.6-80 16-169.6 73.6-174.4 75.2l-6.4 3.2-1.6 6.4c-27.2 84.8 1.6 145.6 35.2 176 17.6 14.4 36.8 22.4 56 22.4 9.6 0 19.2-1.6 28.8-6.4 48-24 148.8-107.2 160-118.4 6.4-4.8 38.4-17.6 64-27.2l41.6-16-22.4-9.6 92.8-54.4c-22.4 8-40 14.4-48 14.4 1.6 0-22.4 1.6-56 1.6z m-70.4 91.2z" fill="#333333" /><path d="M606.74384 291.2c9.6 0 17.6-1.6 27.2-3.2 30.4-4.8 60.8-17.6 89.6-27.2l30.4-17.6h-32c-6.4 6.4-12.8 9.6-16 11.2 0 1.6-44.8 24-99.2 36.8z" fill="#333333" /><path d="M814.74384 168c-43.2 16-73.6 57.6-115.2 80-25.6 14.4-54.4 24-80 30.4l-22.4 12.8h11.2c54.4-12.8 99.2-35.2 99.2-35.2 3.2-1.6 9.6-4.8 16-11.2h-1.6l92.8-76.8zM464.34384 275.2v3.2h8c-4.8-3.2-8-3.2-8-3.2z" fill="#333333" /><path d="M606.74384 291.2c-6.4 1.6-11.2 3.2-17.6 4.8l-9.6 4.8c33.6 0 57.6-1.6 57.6-1.6 8 0 25.6-6.4 48-14.4l38.4-22.4c-28.8 9.6-59.2 22.4-89.6 27.2-9.6 1.6-17.6 1.6-27.2 1.6z" fill="#333333" /><path d="M606.74384 291.2h-11.2l-6.4 3.2c6.4 0 12.8-1.6 17.6-3.2z" fill="#333333" /></svg>
                        <h3 className="font-bold text-lg font-abc">Seafood</h3>
                    </a>

                </div>


                <div className="flex items-center flex-col">
                    <a href="" className='active:text-[#00833e] active:fill-[#00833e] text-center cursor-pointer'>
                        <svg width="40"
                            height="40"
                            className="fill-black stroke-[15px] stroke-neutral-800 mb-[8px]"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M119.466667 1024c-47.786667 0-78.506667-27.306667-85.333334-71.68-20.48-10.24-34.133333-37.546667-34.133333-81.92 0-40.96 40.96-61.44 81.92-61.44 13.653333 0 30.72-17.066667 51.2-37.546667 136.533333-136.533333 208.213333-211.626667 208.213333-307.2C341.333333 372.053333 413.013333 0 750.933333 0c150.186667 0 273.066667 180.906667 273.066667 273.066667 0 334.506667-372.053333 402.773333-474.453333 402.773333-92.16 0-157.013333 64.853333-286.72 194.56l-13.653334 13.653333C211.626667 921.6 204.8 931.84 204.8 955.733333c0 40.96-54.613333 68.266667-85.333333 68.266667zM68.266667 952.32c3.413333 23.893333 20.48 37.546667 51.2 37.546667 17.066667 0 51.2-17.066667 51.2-34.133334 0-37.546667 17.066667-58.026667 54.613333-98.986666l13.653333-10.24c136.533333-136.533333 204.8-204.8 310.613334-204.8C641.706667 641.706667 989.866667 576.853333 989.866667 273.066667c0-78.506667-109.226667-238.933333-238.933334-238.933334-307.2 0-375.466667 344.746667-375.466666 430.08 0 109.226667-75.093333 187.733333-218.453334 331.093334-30.72 30.72-51.2 47.786667-75.093333 47.786666-3.413333 0-47.786667 0-47.786667 27.306667 0 30.72 6.826667 51.2 17.066667 51.2 3.413333 0 13.653333-10.24 17.066667-13.653333 13.653333-13.653333 34.133333-34.133333 58.026666-17.066667 6.826667 3.413333 10.24 13.653333 6.826667 23.893333-3.413333 6.826667-13.653333 10.24-23.893333 6.826667-3.413333 0-10.24 3.413333-17.066667 13.653333-6.826667 3.413333-13.653333 10.24-23.893333 17.066667z" fill="" /><path d="M426.666667 716.8c-10.24 0-17.066667-10.24-17.066667-20.48 0 0 0-13.653333-6.826667-23.893333-6.826667-6.826667-13.653333-10.24-27.306666-10.24-30.72 0-47.786667-3.413333-58.026667-13.653334-10.24-10.24-10.24-27.306667-10.24-40.96v-10.24c0-10.24 6.826667-17.066667 17.066667-17.066666s17.066667 6.826667 17.066666 17.066666V628.053333s6.826667 3.413333 34.133334 3.413334c23.893333 0 40.96 6.826667 54.613333 20.48 17.066667 20.48 17.066667 47.786667 13.653333 51.2 0 6.826667-6.826667 13.653333-17.066666 13.653333z" fill="" /></svg>
                        <h3 className="font-bold text-lg font-abc">Chicken</h3>
                    </a>

                </div>
            </div>


        </div>
    )
}

export default MainMenu;